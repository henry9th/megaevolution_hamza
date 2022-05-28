import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  border-radius: 1rem;
  border: 3px solid #edd6ff;
  background: ${(props) => props.background || '#ffffff'};
  padding: ${(props) => (props.gap === 'sm' ? '1rem 0.5rem' : '2rem 1.5rem')};
  max-width: ${(props) => props.maxWidth || 'none'};

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

  @media (max-width: 425px) {
    padding: 0.75rem 0.365rem;
  }

  @media (max-width: 375px) {
    padding: 1rem 0.25rem;
  }
`;

export default Card;
