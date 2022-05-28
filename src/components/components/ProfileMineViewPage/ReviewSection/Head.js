import styled from 'styled-components';

const StarWrapper = styled.span`
  background: none;
  border: none;
  color: #edd6ff;
  margin-right: 0.5rem;

  &.active {
    color: #ffc543;
  }

  @media (max-width: 480px) {
    margin-right: 0.25rem;
  }
`;

const Button = styled.button`
  background: ${(props) => (props.filled ? '#EDD6FF' : '#FFFFFF')};
  border: 2px solid #edd6ff;
  border-radius: 50px;
  color: #0e0d39;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
`;

const Head = () => {
  const reviews = 213;
  const rating = 4.3;
  const ratingCount = 5;

  return (
    <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between">
      <div className="d-flex align-items-center flex-wrap gap-3 gap-md-5">
        <h3 className="m-0">{reviews} Reviews</h3>

        <div>
          {[...new Array(ratingCount)].map((_, i) => {
            return (
              <StarWrapper key={i} className={`${i < rating ? 'active' : ''}`}>
                <span className="d-none d-md-inline">
                  <i className="fa fa-star fa-2x" aria-hidden="true"></i>
                </span>
                <span className="d-inline d-md-none">
                  <i className="fa fa-star fa-lg" aria-hidden="true"></i>
                </span>
              </StarWrapper>
            );
          })}
        </div>

        <span className="text-primary-dark fs-4">{rating}</span>
      </div>

      <div className="d-flex align-items-center gap-2">
        <Button>Most recent</Button>
        <Button filled>Most helpful</Button>
      </div>
    </div>
  );
};

export default Head;
