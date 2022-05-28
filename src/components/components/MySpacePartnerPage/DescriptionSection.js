import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    h3 {
        color: #0E0D39;
    }
    .description-box {
        width: 100%;
        height: 300px;
        border-radius: 1rem;
        border: 3px solid #EDD6FF;
        background: #FFFFFF;
        padding: 1rem;

        textarea {
            width: 100%;
            height: 100%;
            border: none;
            background: transparent;
            resize: none;

            &:focus {
                outline: none;
            }

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

        
    }
`;

const DescriptionSection = () => {
  return (
    <div className="col-12 mt-5">
      <GlobalStyles />
      <h3>Description</h3>

      <div className="description-box">
        <textarea name="description"></textarea>
      </div>
    </div>
  );
};

export default DescriptionSection;
