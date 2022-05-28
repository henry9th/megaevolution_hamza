import styled from 'styled-components';
import PackageForm from './PackageForm';

// Styled Components
const Card = styled.div`
  width: 100%;
  border-radius: 1rem;
  border: 3px solid #edd6ff;
  background: ${(props) => props.background || '#ffffff'};
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 425px) {
    padding: 0.75rem;
  }

  @media (max-width: 375px) {
    padding: 0.5rem;
  }
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  padding-bottom: 0.5rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0.5rem;
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

const PackageColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr 1.5fr 1.5fr 1.5fr 1.5fr;
  border-right: ${(props) => (props.primary ? '2px solid #edd6ff' : 'none')};
  min-width: 14rem;
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  border-right: ${(props) => (props.primary ? '2px solid #edd6ff' : 'none')};
  border-bottom: 2px solid #edd6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem;
`;

const PrimaryTitle = styled.h5`
  color: #0e0d39;
  padding: 1.5rem 1.25rem;
  margin: 0;
  border-bottom: 1px solid #edd6ff;
  background-color: #edd6ff4d;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const data = {
  title: 'Mike’s Tube Gold Plan ',
  description:
    'This is Mike from Mike’s Tube. This plan will provide you a promotion video dealing with Roadmaps & Websites of your NFT/Metaverse/Crypto projects. ',
  price: 500,
  deliveryTime: 7,
  revisions: 3,
  contentLength: '10~15 minutes of walkthrough video.',
};

const PackagesDropdown = ({ selectedType, setSelectedType }) => {
  return (
    <Card>
      <PackageGrid>
        <PackageColumn primary>
          <Header>
            <h6 className="m-0">Platform</h6>
            <h5 className="m-0">Youtube</h5>
          </Header>
          <PrimaryTitle>Description</PrimaryTitle>
          <PrimaryTitle>Price</PrimaryTitle>
          <PrimaryTitle>Delivery Time</PrimaryTitle>
          <PrimaryTitle>Number of Revisions</PrimaryTitle>
          <PrimaryTitle>Content Length</PrimaryTitle>
        </PackageColumn>
        <PackageForm
          data={data}
          type="Standard"
          setSelected={setSelectedType}
          selected={selectedType}
        />
        <PackageForm
          data={data}
          type="Premium"
          setSelected={setSelectedType}
          selected={selectedType}
        />
        <PackageForm
          data={data}
          type="Enterprise"
          setSelected={setSelectedType}
          selected={selectedType}
        />
      </PackageGrid>
    </Card>
  );
};

export default PackagesDropdown;
