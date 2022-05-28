import dayjs from 'dayjs';
import { useMemo, createElement } from 'react';
import styled from 'styled-components';
import { useCalendar } from './Context';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const DaysGrid = ({ HeaderCell, DateCell, events, ...props }) => {
  const { daysFormat, current, selectDate, next, prev, selectedDate } =
    useCalendar();

  const weekDays = useMemo(() => {
    const startOfWeek = dayjs().startOf('week');

    const days = [];

    for (let i = 0; i < 7; i++) {
      days.push(
        dayjs(startOfWeek)
          .add(i, 'days')
          .format(
            daysFormat === 'full'
              ? 'dddd'
              : daysFormat === 'short'
              ? 'ddd'
              : daysFormat === 'min'
              ? 'dd'
              : 'ddd'
          )
      );
    }

    return days;
  }, [daysFormat]);

  const dates = useMemo(() => {
    const monthStart = dayjs(current).startOf('month');
    const monthEnd = dayjs(current).endOf('month');
    const startDate = dayjs(monthStart).startOf('week');
    const endDate = dayjs(monthEnd).endOf('week');

    const monthDates = [];

    let currentDate = startDate;
    while (!currentDate.isAfter(endDate)) {
      let event = null;
      for (let i = 0; i < events?.length || 0; i++) {
        if (dayjs(events[i].date).isSame(currentDate, 'day')) {
          event = events[i];
          break;
        }
      }

      monthDates.push({
        date: currentDate,
        state: currentDate.isBefore(monthStart)
          ? 'prev'
          : currentDate.isAfter(monthEnd)
          ? 'next'
          : 'current',
        action: currentDate.isBefore(monthStart)
          ? (currentDate) => {
              prev();
              selectDate(currentDate);
            }
          : currentDate.isAfter(monthEnd)
          ? (currentDate) => {
              next();
              selectDate(currentDate);
            }
          : selectDate,
        event,
      });
      currentDate = currentDate.add(1, 'day');
    }

    return monthDates;
  }, [current, events]);

  return (
    <Grid {...props}>
      {weekDays.map((day) =>
        HeaderCell ? (
          <HeaderCell key={day}>{day}</HeaderCell>
        ) : (
          <Cell key={day}>{day}</Cell>
        )
      )}

      {dates.map(({ date, action, event, state }) =>
        DateCell ? (
          <DateCell
            key={date}
            onClick={() => action(date)}
            date={date}
            state={state}
            event={event}
            isSelected={dayjs(selectedDate).isSame(date, 'day')}
          >
            {date.get('date')}
          </DateCell>
        ) : (
          <Cell as="button" key={date} onClick={() => action(date)}>
            {date.get('date')}
          </Cell>
        )
      )}
    </Grid>
  );
};

const Cell = ({ children, as = 'div', ...props }) => {
  return createElement(as, props, children);
};

export default DaysGrid;
