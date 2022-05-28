import { createContext, useContext, useState } from 'react';
import dayjs from 'dayjs';

const CalendarContext = createContext();

const CalendarProvider = ({
  children,
  daysFormat = 'short',
  selectedDate,
  setSelectedDate,
}) => {
  const [mode, setMode] = useState('month');
  const [current, setCurrent] = useState(dayjs());
  // const [selectedDate, setSelectedDate] = useState(null);

  const changeMode = (mode) => {
    setMode(mode);
  };

  const selectDate = (date) => {
    setSelectedDate(date);
  };

  const next = () => {
    if (mode === 'month') {
      setCurrent((prev) => dayjs(prev).add(1, 'month'));
    }
  };

  const prev = () => {
    if (mode === 'month') {
      setCurrent((prev) => dayjs(prev).subtract(1, 'month'));
    }
  };

  return (
    <CalendarContext.Provider
      value={{
        mode,
        changeMode,
        selectDate,
        selectedDate,
        daysFormat,
        current,
        next,
        prev,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }

  const {
    mode,
    changeMode,
    selectDate,
    selectedDate,
    daysFormat,
    current,
    next,
    prev,
  } = context;

  return {
    mode,
    changeMode,
    selectDate,
    selectedDate,
    daysFormat,
    current,
    next,
    prev,
  };
};

export { CalendarProvider, useCalendar };
