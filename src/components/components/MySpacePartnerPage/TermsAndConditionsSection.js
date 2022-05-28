import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   
    p {
        text-align: center;
        text-transform: capitalize;
    }
    a {
        color: #0E0D39;
        font-weight: 500;
        text-decoration: none;
        font-size: 1rem !important;
    }
    .terms-and-conditions {
        .btn-outline {
            width: 100%;
            max-width: 100%;
            border-radius: 1rem;
            border: 3px solid #EDD6FF;
            background: #FFFFFF;
            padding: 1rem 1.5rem;
            font-size: 1.25rem;
            font-weight: 700;
            color: #0E0D39;
        }

        .solid-btn {
          background: radial-gradient(63.11% 63.11% at 31.97% 19.67%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
          linear-gradient(0deg, #FFC543, #FFC543);
          color: #0E0D39;
          border-radius: 1.5rem;
          padding: 1rem 3rem;
          border: none;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
          &:hover {
              box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); 
          }
      }
    }
    
    @media (max-width: 375px) {
      .terms-and-conditions {
        .solid-btn {
          padding: 0.75rem 2rem;
        }

        .btn-outline {
          padding: 0.75rem 1rem; 
        }
      }

    }
`;

const TermsAndConditionsSection = () => {
  return (
    <div className="col-12 mt-5 terms-and-conditions">
      <GlobalStyles />

      <div className="d-flex gap-2 gap-md-4 justify-content-center align-items-center">
        <button className="solid-btn">Accept</button>
        <button className="solid-btn">decline</button>
      </div>
      <p className="mt-3 text-center">
        By accepting you agree to <a href="">terms and conditions</a>
      </p>

      <button className="btn-outline mt-5">Fold Previous Activites</button>
    </div>
  );
};

export default TermsAndConditionsSection;
