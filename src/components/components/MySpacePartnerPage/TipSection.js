import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    .tip {
        .tip-card {
            width: 100%;
            border-radius: 1rem;
            border: 3px solid #EDD6FF;
            background: #FFFFFF;
            padding: 2rem 1.5rem;
        }
        h4 {
            color: #0E0D39;
        }
        p {
            text-align: left;
        }
        .solid-btn {
            background: radial-gradient(63.11% 63.11% at 31.97% 19.67%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
            linear-gradient(0deg, #FFC543, #FFC543);
            color: #0E0D39;
            border-radius: 1.25rem;
            padding: 0.75rem 2rem;
            border: none;
            font-weight: 500;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;
            &:hover {
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); 
            }
            
        }
        .select-options {
            display: grid;
            grid-template-columns: repeat(9, 1fr);
            border: 1px solid #EDD6FF;
            border-radius: 1rem;
            overflow: hidden;

            .select-option {
                grid-column: span 2;
                padding: 1rem;
                text-align: center;
                border: none;
                border-right: 1px solid #EDD6FF;
                background: #FFFFFF;

                &:last-child {
                    grid-column: span 3;
                    border-right: none;
                }

                &.active {
                    background: #EDD6FFaa;
                }

                button.custom {
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                }
                input.custom {
                    width: 100%;
                    height: 100%;
                    border: none;
                    background: transparent;
                    text-align: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                    padding: 0.5rem;

                    &::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }

                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }

    @media (max-width: 425px) {
        .tip {
            .tip-card {
                padding: 1.25rem 1rem;

                .select-options {
                    grid-template-columns: repeat(3, 1fr);

                    .select-option {
                        grid-column: span 1;
        
                        &:last-child {
                            grid-column: span 3;
                            border-top: 1px solid #EDD6FF;
                            input.custom {
                                font-size: 1rem;
                            }
                        }
                    }
                }
            }
        }
    }
`;

const TipSection = () => {
  const [tip, setTip] = useState(0);
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState(0);

  return (
    <div className="col-12 mt-5 pt-4 tip">
      <GlobalStyles />
      <h3>Leave a Tip</h3>

      <div className="tip-card">
        <h4>Show your appreciation to john by leaving a tip</h4>
        <p>Choose an option below</p>

        <div className="select-options">
          <button
            className={`select-option ${tip === 20 ? 'active' : ''}`}
            onClick={() => {
              if (tip !== 20) {
                setTip(20);
                setIsCustom(false);
                setCustomAmount(0);
              } else {
                setTip(0);
              }
            }}
          >
            <span>7%</span>
            <h4>20 Klay</h4>
          </button>
          <button
            className={`select-option ${tip === 42 ? 'active' : ''}`}
            onClick={() => {
              if (tip !== 42) {
                setTip(42);
                setIsCustom(false);
                setCustomAmount(0);
              } else {
                setTip(0);
              }
            }}
          >
            <span>15%</span>
            <h4>42 Klay</h4>
          </button>
          <button
            className={`select-option ${tip === 59 ? 'active' : ''}`}
            onClick={() => {
              if (tip !== 59) {
                setTip(59);
                setIsCustom(false);
                setCustomAmount(0);
              } else {
                setTip(0);
              }
            }}
          >
            <span>20%</span>
            <h4>59 Klay</h4>
          </button>
          <div className="select-option">
            {isCustom ? (
              <input
                type="number"
                className="custom"
                placeholder="Enter Amount"
              />
            ) : (
              <button
                className="custom"
                onClick={() => {
                  setIsCustom(true);
                  setTip(0);
                }}
              >
                <i className="fa fa-pencil"></i>
                Custom Tip
              </button>
            )}
          </div>
        </div>

        <div className="d-flex mt-4 justify-content-end">
          <button className="solid-btn mx-auto mx-sm-0">Tip Now</button>
        </div>
      </div>
    </div>
  );
};

export default TipSection;
