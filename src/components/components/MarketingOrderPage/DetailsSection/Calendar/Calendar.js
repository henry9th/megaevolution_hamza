import { CalendarProvider } from './Context';

const Calendar = ({ children, className, selectedDate, setSelectedDate }) => {
  return (
    <div className={className}>
      <CalendarProvider
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      >
        {children}
      </CalendarProvider>
    </div>
  );
};

export default Calendar;
