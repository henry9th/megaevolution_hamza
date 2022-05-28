import styled from 'styled-components';
import Select from 'react-select';
import { useState } from 'react';
import { SearchIcon } from '../../ImageGallery/icons';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 2rem;
  margin-top: 2.5rem;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0px 13px 37px 0px #edd6ff66;
`;

const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  min-width: 4rem;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 1.125rem;
  font-weight: 500;
  font-family: 'Space Grotesk';
  min-width: 0;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
`;

// select
const types = [
  {
    label: 'All',
    value: 'All',
  },
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
  },
];

const OptionWrapper = styled.div`
  text-align: start;
  padding: 0.25rem 1rem;
  cursor: pointer;
  color: ${(props) => (props.isDisabled ? '#ccc' : '#0e0d39')};
  font-weight: 700;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Option = ({ innerProps, isDisabled, data }) => {
  if (isDisabled) return null;

  return (
    <OptionWrapper {...innerProps} isDisabled={isDisabled}>
      <span>{data.label}</span>
    </OptionWrapper>
  );
};

const selectCustomStyles = {
  container: (base) => ({
    ...base,
    minWidth: '8rem',
  }),
  control: (base) => ({
    ...base,
    width: '100%',
    margin: '0',
    padding: '0',
    border: 'none',
    color: '#0e0d39',
    background: '#EDD6FF',
    boxShadow: 'none',
    borderRadius: '1rem',
  }),
  valueContainer: (base) => ({
    ...base,
    fontSize: '1rem',
    padding: '0 1rem',
    fontWeight: '600',
    fontFamily: 'Space Grotesk',
  }),
  menu: (base) => ({
    ...base,
    border: '3px solid #edd6ff',
    borderRadius: '1rem',
    zIndex: 100,
    width: '6rem',
    right: '0',
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: '12rem',
    overflow: 'auto',
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

const SearchBar = () => {
  const [selectedType, setSelectedType] = useState(types[0]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SearchContainer onSubmit={onSubmit}>
      <h3 className="m-0">Platform</h3>
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
      <InputWrapper>
        <Input placeholder="Search Creator" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputWrapper>
    </SearchContainer>
  );
};

export default SearchBar;
