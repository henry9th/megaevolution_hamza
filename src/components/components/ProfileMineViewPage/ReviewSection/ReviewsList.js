import styled from 'styled-components';
import ReviewItem from './ReviewItem';

const List = styled.ul`
  width: 100%;
  height: 100%;
  max-height: 75rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 0.5rem 0;
  margin: 0;

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
`;

const ReviewsList = () => {
  return (
    <List className="mt-4">
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </List>
  );
};

export default ReviewsList;
