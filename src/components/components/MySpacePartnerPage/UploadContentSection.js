import { createGlobalStyle } from 'styled-components';
import { YoutubeIcon } from '../ImageGallery/icons';

const GlobalStyles = createGlobalStyle`
    .upload-content {
      h3 {
          color: #0E0D39;
      }
      .upload-card {
          width: 100%;
          border-radius: 1rem;
          border: 3px solid #EDD6FF;
          background: #FFFFFF;
          padding: 2rem 1.5rem;
      }
      .input-container {
          position: relative;
          flex: 1;
      }
      input {
          width: 100%;
          border-radius: 0.75rem;
          border: 3px solid #EDD6FF;
          background: #FFFFFF;
          padding: 0.75rem 1rem 0.75rem 4rem;
      } 
      .input-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
      }
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
      .link-btn {
          font-weight: 300;
      }
      p {
          text-align: left;
          margin-block-end: 0.5rem;
      }
    }

    @media (max-width: 425px) {
      .upload-content {
        .upload-card {
          padding: 1rem 0.75rem;
        }
        .btn-outline {
          width: auto;
        }
      }
    }
`;

const UploadContentSection = () => {
  return (
    <div className="col-12 mt-5 pt-4 upload-content">
      <GlobalStyles />
      <h3>Upload Content</h3>

      <div className="upload-card">
        <div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <h3 className="m-0">Preview Content</h3>
            <button className="link-btn">Submit files instead</button>
          </div>

          <div className="d-flex flex-wrap mt-2 gap-2 gap-md-4">
            <div className="input-container">
              <input
                type="text"
                className=""
                placeholder="Copy and paste link"
              />
              <span className="input-icon">
                <YoutubeIcon size={1.2} />
              </span>
            </div>
            <button className="btn-outline">Submit</button>
          </div>
        </div>

        <div className="mt-4">
          <h3>Published Content</h3>

          <div className="d-flex mt-2 gap-2 gap-md-4">
            <div className=" input-container">
              <input
                type="text"
                className=""
                placeholder="Copy and paste link"
              />
              <span className="input-icon">
                <YoutubeIcon size={1.2} />
              </span>
            </div>
            <button className="btn-outline">Submit</button>
          </div>
        </div>

        <div className="mt-4">
          <p>
            * Odio in enim non at a, commodo vitae. Commodo nibh nulla risus
            quisque. Vitae felis quam sed.
          </p>
          <p>
            * Odio in enim non at a, commodo vitae. Commodo nibh nulla risus
            quisque. Vitae felis quam sed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadContentSection;
