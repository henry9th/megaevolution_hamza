import { QuestionMarkIcon } from '../../ImageGallery/icons';
import Title from './Title';
import Select from 'react-select';
import { useState } from 'react';
import styled from 'styled-components';

// Select
const languagesList = [
  {
    label: 'English',
    value: 'English',
  },
  {
    label: 'Korean',
    value: 'Korean',
  },
  {
    label: 'Japanese',
    value: 'Japanese',
  },
  {
    label: 'Chinese',
    value: 'Chinese',
  },
  {
    label: 'Spanish',
    value: 'Spanish',
  },
  {
    label: 'French',
    value: 'French',
  },
  {
    label: 'German',
    value: 'German',
  },
  {
    label: 'Indonesian',
    value: 'Indonesian',
  },
  {
    label: 'Vietnamese',
    value: 'Vietnamese',
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
  return (
    <OptionWrapper {...innerProps} isDisabled={isDisabled}>
      <span>{data.label}</span>
    </OptionWrapper>
  );
};

const selectCustomStyles = {
  container: (base) => ({
    ...base,
    minWidth: '9rem',
  }),
  control: (base) => ({
    ...base,
    width: '100%',
    margin: '0',
    padding: '0',
    border: 'none',
    color: '#0e0d39',
    boxShadow: 'none',
  }),
  valueContainer: (base) => ({
    ...base,
    fontSize: '1.125rem',
    fontWeight: '600',
    fontFamily: 'Space Grotesk',
    padding: '0',
  }),
  menu: (base) => ({
    ...base,
    border: '3px solid #edd6ff',
    borderRadius: '1rem',
    zIndex: 100,
    maxWidth: '12rem',
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

const ContentLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  return (
    <div>
      <div className="d-flex align-items-center gap-2 text-primary-dark">
        <Title>Content Language *</Title>
        <QuestionMarkIcon />
      </div>

      <div className="d-flex mt-2 justify-content-start">
        <Select
          styles={selectCustomStyles}
          options={languagesList}
          components={{
            Option,
            IndicatorSeparator: () => null,
          }}
          onChange={(type) => {
            setSelectedLanguage(type);
          }}
          value={selectedLanguage}
        />
      </div>
    </div>
  );
};

export default ContentLanguage;
