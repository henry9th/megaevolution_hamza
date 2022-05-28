import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    .progress-container {
        position: relative;
        height: 10px;
        width: 100%;
    }
    .progress-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #FFC54333;
        border-radius: 5px;
        overflow: hidden;
    }
    .progress-bar-fill {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: #FFC543;
        border-radius: 5px;
    }
    .check-point {
        position: absolute;
        top: 0;
        transform: translateX(-50%) translateY(-0.5rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .check-point__circle {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: #FFB000;
        border: 3px solid #FFC543;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .check-point__circle__inner {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: #FFF;
        transition: all 0.3s ease-in-out;
    }
    .check-point__text {
        text-align: center;
        margin-top: 0.75rem;
    }
    .check-point__text span {
       font-weight: 500;
       color: #0E0D39;
    }
    .check-point__text h5 {
        color: #0E0D39;
        margin-block-start: 0.5rem;
    }
    .pin {
        position: absolute;
        top: 0;
        transform: translateX(-50%) translateY(-140%);
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: radial-gradient(63.11% 63.11% at 31.97% 19.67%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
        linear-gradient(0deg, #FFC543, #FFC543);
        color: #0E0D39;
        font-size: 1rem;
        font-weight: 700;

        &__inner {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            &:after {
                content: "";
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 0;
                border-top: 15px solid #FFC543;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
            }

        }
           
    }

    @media (max-width: 1024px) {
      .check-point:nth-child(odd) .check-point__text h5 {
        margin-block-start: 1.5rem;
      }
      .check-point:nth-child(even) .check-point__text h5 {
        margin-block-start: 0.25rem;
      }
    }

    @media (max-width: 425px) {
      .check-point .check-point__text h5 {
        display: none;
      }
    }
`;

// calculate width, where 100% = 90%
const calculateBarWidth = (progress) => {
  const width = (progress / 100) * 90;
  return width;
};

const InfoProgress = ({ progress }) => {
  let barWidth = calculateBarWidth(progress);
  barWidth = barWidth + 5;

  return (
    <div className="py-5 mt-5 mb-3">
      <GlobalStyles />

      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${barWidth === 95 ? 100 : barWidth}%` }}
          />
        </div>

        <CheckPoint progress={0} text="Order Accepted" />
        <CheckPoint progress={25} text="Preview Contents" />
        <CheckPoint progress={50} text="Contents Accepted" />
        <CheckPoint progress={75} text="Content Published" />
        <CheckPoint progress={100} text="Giveaway Completed" />

        <div className="pin" style={{ left: `${barWidth}%` }}>
          <div className="pin__inner">{progress}%</div>
        </div>
      </div>
    </div>
  );
};

const CheckPoint = ({ progress, text }) => {
  return (
    <div
      className="check-point"
      style={{ left: `${calculateBarWidth(progress) + 5}%` }}
    >
      <div className="check-point__circle">
        <div className="check-point__circle__inner"></div>
      </div>
      <div className="check-point__text">
        <span>{progress}%</span>
        <h5>{text}</h5>
      </div>
    </div>
  );
};

export default InfoProgress;
