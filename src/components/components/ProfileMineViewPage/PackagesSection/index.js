import styled from 'styled-components';
import Card from '../Card';
import Select from 'react-select';
import { useState } from 'react';
import PackageForm from './PackageForm';
import { Form } from 'react-bootstrap';

// Styled Components
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
  min-width: 18rem;
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  border-right: ${(props) => (props.primary ? '2px solid #edd6ff' : 'none')};
  border-bottom: 2px solid #edd6ff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const PrimaryTitle = styled.h5`
  color: #0e0d39;
  padding: 2.5rem 2.25rem;
  margin: 0;
  border-bottom: 1px solid #edd6ff;
  background-color: #edd6ff4d;
  font-size: 1.25rem;
  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

// select
const types = [
  {
    label: 'Youtube',
    value: 'Youtube',
  },
  {
    label: 'Twitter',
    value: 'Twitter',
  },
  {
    label: 'Blog',
    value: 'Blog',
    isDisabled: true,
  },
];

const OptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 1rem;
  cursor: pointer;
  color: ${(props) => (props.isDisabled ? '#ccc' : '#0e0d39')};
  font-weight: 700;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Option = ({ innerProps, isDisabled, data }) => {
  return (
    <OptionWrapper {...innerProps} isDisabled={isDisabled}>
      <span>{data.label}</span>
    </OptionWrapper>
  );
};

const selectCustomStyles = {
  container: (base) => ({
    ...base,
    width: '100%',
  }),
  control: (base) => ({
    ...base,
    width: '100%',
    margin: '0',
    background: '#fff',
    border: 'none',
    color: '#0e0d39',
    boxShadow: 'none',
  }),
  valueContainer: (base) => ({
    ...base,
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: 'Space Grotesk',
  }),
  menu: (base) => ({
    ...base,
    border: '3px solid #edd6ff',
    borderRadius: '1rem',
    zIndex: 100,
    maxWidth: '10rem',
    right: '0',
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#0e0d39',

    '&:hover': {
      color: '#0e0d39',
      cursor: 'pointer',
    },
  }),
};

const data = {
  title: 'Mike’s Tube Gold Plan ',
  description:
    'This is Mike from Mike’s Tube. This plan will provide you a promotion video dealing with Roadmaps & Websites of your NFT/Metaverse/Crypto projects. ',
  price: 500,
  deliveryTime: 7,
  revisions: 3,
  contentLength: '10~15 minutes of walkthrough video.',
};

const PackagesSection = () => {
  const [selectedType, setSelectedType] = useState('');

  return (
    <div className="mt-5 pt-2">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h3 className="m-0">Packages</h3>

        <Form.Check
          type="checkbox"
          id="custom-checkbox"
          label="Hide packages"
          className="text-primary-dark"
        />
      </div>

      <Card>
        <PackageGrid>
          <PackageColumn primary>
            <Header>
              <Select
                styles={selectCustomStyles}
                options={types}
                components={{
                  Option,
                  IndicatorSeparator: () => null,
                }}
                onChange={(type) => {
                  setSelectedType(type);
                }}
                value={selectedType}
              />
            </Header>
            <PrimaryTitle>Description *</PrimaryTitle>
            <PrimaryTitle>Price *</PrimaryTitle>
            <PrimaryTitle>Delivery Time *</PrimaryTitle>
            <PrimaryTitle>Number of Revisions *</PrimaryTitle>
            <PrimaryTitle>Content Length *</PrimaryTitle>
          </PackageColumn>
          <PackageForm data={data} />
          <PackageForm />
          <PackageForm />
        </PackageGrid>
      </Card>
    </div>
  );
};

export default PackagesSection;
