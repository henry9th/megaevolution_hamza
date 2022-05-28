import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    .review {
        .review-card {
            width: 100%;
            border-radius: 1rem;
            border: 3px solid #EDD6FF;
            background: #FFFFFF;
            padding: 2rem 1.5rem;
        }
        h4 {
            color: #0E0D39;
        }
        .icon-btn {
            background: none;
            border: none;
            color: #EDD6FF;

            &.active {
                color: #FFC543;
            }
        }
        textarea {
            width: 100%;
            height: 250px;
            border: 3px solid #EDD6FF;
            border-radius: 1rem;
            padding: 1rem;   
        }
        input[type="checkbox"] {
            width: auto;
            margin: 0;
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

    @media (max-width: 425px) {
        .review {
          .review-card {
            padding: 1.25rem 1rem;
          }
        }
    }
`;

const ReviewSection = () => {
  return (
    <div className="col-12 mt-5 pt-4 review">
      <GlobalStyles />
      <h3>Leave a Review</h3>

      <div className="review-card">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <h4>Give ratings to your influencer</h4>
          <RatingInput />
        </div>

        <textarea className="mt-md-5 mt-4" placeholder="Write a Review" />

        <div className="d-flex flex-wrap mt-3 justify-content-between">
          <div className="d-flex gap-2 align-items-center">
            <input type="checkbox" name="" id="allowInPartner" />
            <label htmlFor="allowInPartner">
              Allow your client to include you in the Partner List.
            </label>
          </div>

          <button className="solid-btn mt-3 mx-auto mx-sm-0 mt-sm-0">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const RatingInput = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="d-flex">
      <button
        className={`icon-btn ${rating >= 1 ? 'active' : ''}`}
        onClick={() => setRating(1)}
      >
        <i class="fa fa-star fa-2x" aria-hidden="true"></i>
      </button>
      <button
        className={`icon-btn ${rating >= 2 ? 'active' : ''}`}
        onClick={() => setRating(2)}
      >
        <i class="fa fa-star fa-2x" aria-hidden="true"></i>
      </button>
      <button
        className={`icon-btn ${rating >= 3 ? 'active' : ''}`}
        onClick={() => setRating(3)}
      >
        <i class="fa fa-star fa-2x" aria-hidden="true"></i>
      </button>
      <button
        className={`icon-btn ${rating >= 4 ? 'active' : ''}`}
        onClick={() => setRating(4)}
      >
        <i class="fa fa-star fa-2x" aria-hidden="true"></i>
      </button>
      <button
        className={`icon-btn ${rating >= 5 ? 'active' : ''}`}
        onClick={() => setRating(5)}
      >
        <i class="fa fa-star fa-2x" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ReviewSection;
