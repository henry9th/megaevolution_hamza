import styled from 'styled-components';
import Card from './Card';

const HightedCard = styled(Card)`
  height: 700px;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    height: 600px;
    padding: 1rem 0.5rem;
  }

  @media (max-width: 425px) {
    height: 500px;
    padding: 0.75rem 0.365rem;
  }

  @media (max-width: 375px) {
    padding: 1rem 0.25rem;
  }
`;

const TextAreaDiv = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  resize: none;
  padding: 0 0.5rem;
  overflow-y: scroll;
  color: #0e0d39;

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

const DescriptionSection = () => {
  return (
    <div className="mt-5 pt-4">
      <h3 className="">Description</h3>

      <HightedCard>
        <TextAreaDiv>
          Diam semper nunc eget ornare feugiat. Cursus ut eu, bibendum ipsum.
          Vestibulum, lorem lobortis convallis tellus purus. Risus lacus
          scelerisque habitant lacinia egestas amet, sapien lacus egestas. Etiam
          eros, aliquet sem sed proin. Facilisis facilisis aliquam sed quis amet
          et commodo nisi. Lobortis sed luctus proin lorem. Gravida interdum
          tincidunt malesuada tempus ut sit in. Facilisi ut lectus aenean vitae
          enim, elementum non. Quis quam et eget est. In aliquam netus suscipit
          risus.
        </TextAreaDiv>
      </HightedCard>
    </div>
  );
};

export default DescriptionSection;
