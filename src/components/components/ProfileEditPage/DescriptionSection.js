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

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  resize: none;
  padding: 0 0.5rem;
  overflow-y: scroll;
  color: #0e0d39;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #dbdaf1;
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
`;

const DescriptionSection = () => {
  return (
    <div className="mt-5 pt-4">
      <h3 className="">Description</h3>

      <HightedCard>
        <TextArea
          placeholder={`    Please use this space to freely talk about you and/or your project.
            

    A good description in this space typically includes:


    General
        Greetings and brief self-introduction
        Area of interest regarding crypto/metaverse/NFT/etc.
            
            
    Creators
        Skills and capability as a creator
        Resume and experience
        Description of packages for clients`}
        />
      </HightedCard>
    </div>
  );
};

export default DescriptionSection;
