import styled from 'styled-components';
import CreatorCard from '../CreatorCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.25rem 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.5rem 1rem;
  }

  @media (max-width: 425px) {
    grid-gap: 1.25rem 0.75rem;
  }
`;

const CardsView = ({ data, toggleItemSelection, isSelected }) => {
  return (
    <Grid>
      {data.map((item) => (
        <CreatorCard
          key={item.id}
          data={item}
          toggleItemSelection={toggleItemSelection}
          isSelected={isSelected(item.id)}
          clickable
          removable
        />
      ))}
    </Grid>
  );
};

export default CardsView;
