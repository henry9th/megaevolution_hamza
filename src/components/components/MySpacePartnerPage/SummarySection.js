import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    .summary-card {
        width: 100%;
        border-radius: 1rem;
        border: 3px solid #EDD6FF;
        background: #FFFFFF;
        padding: 2rem 1.5rem;

        h2 {
            color: #0E0D39;
        }
        .flex-1 {
            flex: 1;
        }
        .border-x {
            border-inline: 3px solid #EDD6FF
        }
        .text-right {
            text-align: right;
        }
        .solid-btn {
            background: radial-gradient(63.11% 63.11% at 31.97% 19.67%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
            linear-gradient(0deg, #FFC543, #FFC543);
            color: #0E0D39;
            border-radius: 1rem;
            padding: 1rem 3rem;
            border: none;
            font-weight: 500;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;
            &:hover {
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); 
            }
            
        }
    }

    @media (max-width: 768px) {
        .summary-card {
            padding: 1rem 0.75rem;

            h3 {
                margin-bottom: 0.5rem;
            }

            .border-x {
                border-inline: none
            }

            .solid-btn {
                padding: 0.75rem 1.5rem;
            }
        }
    }

    @media (max-width: 375px) {
        .summary-card {
            padding: 1rem 0.25rem;

            .solid-btn {
                padding: 0.75rem 1rem;
            }
        }
    }
`;

const SummarySection = () => {
  return (
    <div className="col-12 mt-5 pt-4">
      <GlobalStyles />

      <div className="summary-card">
        <h2 className="text-center">Summary</h2>

        <div className="mt-5 container d-flex gap-3 gap-md-0 flex-column flex-md-row flex-wrap align-items-center justify-content-between">
          <div className="flex-1 text-center text-md-left">
            <h3>Order</h3>
            <h2>200 Klay</h2>
          </div>
          <div className="text-center flex-1 border-x">
            <h3>Tips</h3>
            <h2>30 Klay</h2>
          </div>
          <div className="flex-1 text-right">
            <h3>Total Earnings</h3>
            <h2>210 Klay</h2>
          </div>
        </div>

        <div className="d-flex mt-5 pt-3 flex-column flex-sm-row container justify-content-between">
          <h3>This order is complete</h3>

          <button className="solid-btn">Check Giveaway Data</button>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
