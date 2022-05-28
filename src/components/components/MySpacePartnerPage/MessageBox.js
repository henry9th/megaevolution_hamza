import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    .message-box {
        .messages-card {
            width: 100%;
            border-radius: 1rem;
            border: 3px solid #EDD6FF;
            background: #FFFFFF;
            padding: 1rem 1.5rem;

            .btn-outline {
                width: 100%;
                max-width: 13rem;
                border-radius: 0.75rem;
                border: 3px solid #EDD6FF;
                background: #FFFFFF;
                padding: 0.5rem 1rem;
                color: #0E0D39;
                font-size: 1rem;
            }

            .messages-container {
                height: 500px;
                overflow-y: scroll;
                overflow-x: hidden;
                padding: 1rem;
                margin-block-end: 1rem;

                &::-webkit-scrollbar {
                    width: 0.5rem;
                }
                &::-webkit-scrollbar-track {
                    background: transparent;
                }
                &::-webkit-scrollbar-thumb {
                    background: #cfcfd7;
                    transition: all 0.3s ease-in-out;
                    border-radius: 0.5rem;
                }
                &::-webkit-scrollbar-thumb:hover {
                    background: #bfbfc7;
                }

            }
            .input-container {
                position: relative;
                flex: 1;

                input {
                    width: 100%;
                    border-radius: 0.75rem;
                    border: 3px solid #EDD6FF;
                    background: #FFFFFF;
                    padding: 0.75rem 5rem 0.75rem 1rem;
                } 
                .input-icons {
                    position: absolute;
                    right: 0.75rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #0E0D39;

                    button {
                        background: transparent;
                        border: none;
                    }
                }
            }

            .message-wrapper {
                display: flex;
                flex-direction: row;
                margin-bottom: 1rem;

                .message {
                    flex: 1;
                    padding: 0.75rem;
                    border-radius: 0.75rem;
                    border: 2px solid #EDD6FF;
                    background: #FFFFFF;
                    margin-left: 2rem;
                    margin-right: 0;
                    
                    p {
                        text-align: left;
                        margin: 0;
                        color: #0E0D39;
                    }
                }

                .message-sender {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    background: #EDD6FF;
                }

                &.own {
                    flex-direction: row-reverse;

                    .message {
                        margin-left: 0;
                        margin-right: 2rem;
                    }
                }
            }

        }
    }

    @media (max-width: 768px) {
        .message-box {
            .messages-card {
                padding: 0.75rem 0.5rem;

                .btn-outline {
                    width: auto;
                    max-width: 100%;
                }

                .message-wrapper {
                    .message {
                        margin-left: 1rem;

                    }
                    &.own {
                        .message {
                            margin-right: 1rem;
                        }
                    }

                    .message-sender {
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                }
            }
        }
    }

    @media (max-width: 425px) {
        .message-box {
            .messages-card {
                padding: 0.75rem 0.25rem;

                .messages-container {
                    padding: 0.5rem;
                }

                .message-wrapper {
                    .message {
                        margin-left: 0.5rem;
                    }
                    &.own {
                        .message {
                            margin-right: 0.5rem;
                        }
                    }
                    .message-sender {
                        width: 2rem;
                        height: 2rem;
                    }
                }
            }

        }
    }
`;

const MessageBox = () => {
  return (
    <div className="col-12 mt-5 pt-4 message-box">
      <GlobalStyles />
      <h3>Message Box</h3>

      <div className="messages-card">
        <div className="messages-container">
          <Message />
          <Message own />
          <Message />
          <Message />
        </div>
        <div className="d-flex flex-column flex-sm-row mt-2 gap-2 gap-sm-3 gap-md-4">
          <div className="input-container">
            <input type="text" className="" placeholder="Type your message" />
            <div className="input-icons">
              <button>
                <i className="fa fa-smile-o fa-2x" aria-hidden="true"></i>
              </button>
              <button>
                <i className="fa fa-paperclip fa-2x" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <button className="btn-outline">Submit</button>
        </div>
      </div>
    </div>
  );
};

const Message = ({ own }) => {
  return (
    <div className={`message-wrapper ${own ? 'own' : ''}`}>
      <div className="message-sender"></div>
      <div className="message">
        <p>
          Urna pulvinar sed donec tincidunt duis gravida. Amet ullamcorper quis
          ac eget montes, sit ultrices nulla amet. Est mauris placerat tortor,
          amet tempor enim. At ut ac pellentesque nunc porttitor fringilla
          ullamcorper porttitor amet. Proin cursus gravida aliquet orci
          malesuada enim viverra. In tincidunt hac pellentesque fusce sit et
          sit. Enim sollicitudin sed cursus justo faucibus egestas scelerisque
          vitae at. Ornare vitae donec nibh amet quam dui tempor vitae congue.
          Eu et nulla diam ut mattis nulla mi mollis. Condimentum at egestas
          urna in. Sodales lectus donec feugiat nibh. Egestas non arcu sed.
        </p>
      </div>
    </div>
  );
};

export default MessageBox;
