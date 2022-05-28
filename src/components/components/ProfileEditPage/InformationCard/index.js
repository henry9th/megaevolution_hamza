import styled from 'styled-components';
import Card from '../Card';
import ContentLanguage from './ContentLanguage';
import Keywords from './Keywords';
import Language from './Language';
import Member from './Member';

const HightedCard = styled(Card)`
  min-height: 700px;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    min-height: 600px;
    padding: 1rem 0.5rem;
  }

  @media (max-width: 425px) {
    min-height: 500px;
    padding: 0.75rem 0.365rem;
  }

  @media (max-width: 375px) {
    padding: 1rem 0.25rem;
  }
`;

const InformationCard = () => {
  return (
    <div className="mt-5 pt-4">
      <h3 className="">Information</h3>

      <HightedCard>
        <ContentLanguage />
        <Language />
        <Member />
        <Keywords />
      </HightedCard>
    </div>
  );
};

export default InformationCard;
