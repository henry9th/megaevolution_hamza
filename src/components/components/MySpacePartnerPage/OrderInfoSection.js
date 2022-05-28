import { createGlobalStyle } from 'styled-components';
import InfoProgress from './InfoProgress';

const GlobalStyles = createGlobalStyle`
    .info-card {
        background: #fff;
        border-radius: 1.25rem;
        border: 3px solid #EDD6FF;
        padding: 3rem;
    }
    h3 {
        color: #0E0D39
    }
    .language-box {
        color: #0E0D39;
        border: 3px solid #EDD6FF;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border-radius: 1.25rem;
        padding: 0.75rem 1.5rem;

       h5 {
            margin: 0;
            color: #0E0D39;
        }
    }

    @media (max-width: 768px) {
      .info-card {
        background: #fff;
        border-radius: 1.25rem;
        border: 3px solid #EDD6FF;
        padding: 2rem 1.5rem;
      }
      .language-box {
        border-radius: 1rem;
        padding: 0.5rem 1rem;
      }
    }
`;

const OrderInfoSection = () => {
  return (
    <div className="col-12 mt-5">
      <GlobalStyles />
      <div className="info-card">
        <div className="d-flex justify-content-between flex-wrap align-items-center">
          <h3>ICEMEME NFT Order Information</h3>
          <div className="language-box">
            <h5>Content language</h5>
            <div className="locale-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/img/buttons/united-states-of-america.png'
                }
                alt=""
              />
              <span className="lines"></span>
            </div>
          </div>
        </div>

        <InfoProgress progress={75} />
      </div>
    </div>
  );
};

export default OrderInfoSection;
