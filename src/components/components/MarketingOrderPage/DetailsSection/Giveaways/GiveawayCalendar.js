import styled from 'styled-components';
import Calendar from './Calendar/Calendar';
import Current from './Calendar/Current';
import DaysGrid from './Calendar/DaysGrid';
import NextButton from './Calendar/NextButton';
import PreviousButton from './Calendar/PreviousButton';
import dayjs from 'dayjs';
import { useDate } from '../DatesContext';

const Card = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 3px solid ${(props) => (props.drop ? '#0e0d39aa' : '#edd6ff')};
  background: ${(props) => props.background || '#ffffff'};
  position: relative;
  color: #0e0d39;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

  @media (max-width: 425px) {
    padding: 0.75rem 0.365rem;
  }

  @media (max-width: 375px) {
    padding: 1rem 0.25rem;
  }
`;

const CalendarContainer = styled(Calendar)`
  width: 100%;
`;

const CalendarHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0e0d39;
  padding-inline: 1.5rem;
`;

const NextBtn = styled(NextButton)`
  border: none;
  background: transparent;
  outline: none;
`;

const PreviousBtn = styled(PreviousButton)`
  border: none;
  background: transparent;
  outline: none;
`;

const Title = styled(Current)`
  font-size: 1.25rem;
  font-weight: 500;
`;

const HeaderCell = styled.div`
  text-align: center;
  color: #0e0d3973;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 0;
`;

const Cell = styled.div`
  width: 100%;
  padding: 0.75rem 0.75rem;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 0.5rem 0.5rem;
  }

  @media (max-width: 425px) {
    padding: 0.25rem 0.25rem;
  }
`;

const CellButton = styled.button`
  border: none;
  outline: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #ffffff;
  color: ${(props) =>
    props.isSelected || props.event ? '#ffffff' : '#0e0d39'};
  overflow: hidden;
  position: relative;

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  &:disabled {
    color: #aaaaaa;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f0b631;
    transform: ${(props) =>
      props.isSelected && props.event
        ? 'translateY(50%)'
        : props.event
        ? 'translateY(0%)'
        : 'translateY(100%)'};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0080ff;
    transform: ${(props) =>
      props.isSelected && props.event
        ? 'translateY(-50%)'
        : props.isSelected
        ? 'translateY(0%)'
        : 'translateY(100%)'};
  }
`;

const CellText = styled.span`
  text-transform: uppercase;
  width: 100%;
  font-size: 0.7rem;
  font-weight: 700;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  ${({ lower }) => lower && ` bottom: -0.25rem;`}
  ${({ upper }) => upper && ` top: -0.25rem;`}

  ${({ isSelected, event, upper, lower }) => {
    if (isSelected && event && lower) return 'color: #f0b631';
    if (isSelected && event && upper) return 'color: #0080ff';
    if (!isSelected && event) return 'color: #f0b631';
    if (isSelected && !event) return 'color: #0080ff';
  }};
`;

const DateCell = ({
  children,
  date,
  onClick,
  state,
  isSelected,
  event,
  ...props
}) => {
  return (
    <Cell {...props}>
      {isSelected && event ? <CellText upper>Giveaway</CellText> : null}
      {!(isSelected && event) && (isSelected || event) ? (
        <CellText upper isSelected={isSelected} event={event}>
          D-Day
        </CellText>
      ) : null}
      <CellButton
        disabled={date.isBefore(dayjs())}
        onClick={onClick}
        isSelected={isSelected}
        event={event}
      >
        <span>{children}</span>
      </CellButton>
      {event ? (
        <CellText lower isSelected={isSelected} event={event}>
          {event.name}
        </CellText>
      ) : isSelected ? (
        <CellText lower isSelected={isSelected} event={event}>
          Giveaway
        </CellText>
      ) : null}
    </Cell>
  );
};

const GiveawayCalendar = () => {
  const { giveawayDate, setGiveawayDate, deliveryDate } = useDate();

  return (
    <div className="position-absolute end-0">
      <Card>
        <CalendarContainer
          selectedDate={giveawayDate}
          setSelectedDate={setGiveawayDate}
        >
          <CalendarHead>
            <Title />
            <div className="d-flex align-items-center gap-2">
              <PreviousBtn />
              <NextBtn />
            </div>
          </CalendarHead>
          <DaysGrid
            className="mt-2"
            HeaderCell={HeaderCell}
            DateCell={DateCell}
            events={
              deliveryDate
                ? [
                    {
                      name: 'Delivery',
                      date: deliveryDate,
                    },
                  ]
                : []
            }
          />
        </CalendarContainer>
      </Card>
    </div>
  );
};

export default GiveawayCalendar;
