import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    h3 {
        color: #0E0D39;
    }
    .calender-card {
        width: 100%;
        border-radius: 1rem;
        border: 3px solid #EDD6FF;
        background: #FFFFFF;
        padding: 1rem 0.5rem;
    }
    .react-calendar {
        width: 100%;
        border: none;
    }
`;

const CalenderCard = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="col-12 col-lg-6 mt-5">
      <GlobalStyles />
      <h3>Calendar</h3>

      <div className="calender-card">
        <Calendar onChange={setValue} value={value} />
      </div>
    </div>
  );
};

export default CalenderCard;
