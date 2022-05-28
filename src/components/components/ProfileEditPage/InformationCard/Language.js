import styled from 'styled-components';
import { QuestionMarkIcon } from '../../ImageGallery/icons';
import Title from './Title';
import Select from 'react-select';
import { useState } from 'react';

const SelectedLanguageTag = styled.div`
  color: #0e0d39;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: 'Space Grotesk';
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-right: 0.75rem;
  margin-bottom: 0.5rem;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
`;

// Select
const languagesList = [
  {
    label: 'Korean',
    value: 'Korean',
  },
  {
    label: 'English',
    value: 'English',
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
    label: 'Thai Language',
    value: 'Thai Language',
  },
  {
    label: 'Vietnamese',
    value: 'Vietnamese',
  },
  {
    label: 'French',
    value: 'French',
  },
  {
    label: 'Spanish',
    value: 'Spanish',
  },
  {
    label: 'Arabic',
    value: 'Arabic',
  },
  {
    label: 'Indian',
    value: 'Indonesian',
  },
  {
    label: 'Indonesian',
    value: 'Indonesian',
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
    minWidth: '6rem',
    marginBottom: '0.5rem',
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
    width: '10rem',
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

const Language = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const removeLanguage = (language) => {
    setSelectedLanguages(selectedLanguages.filter((l) => l.value !== language));
  };

  return (
    <div className="mt-4">
      <div className="d-flex align-items-center gap-2 text-primary-dark">
        <Title>Language *</Title>
        <QuestionMarkIcon />
      </div>

      <div className="d-flex mt-3 flex-wrap align-items-center">
        {selectedLanguages.map((language) => (
          <SelectedLanguageTag>
            {language.label}
            <IconButton onClick={() => removeLanguage(language.value)}>
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </IconButton>
          </SelectedLanguageTag>
        ))}

        <Select
          styles={selectCustomStyles}
          options={[
            {
              label: 'Add',
              value: 'Add',
              isDisabled: true,
            },
            ...languagesList.filter((language) =>
              selectedLanguages.every((l) => l.value !== language.value)
            ),
          ]}
          components={{
            Option,
            IndicatorSeparator: () => null,
          }}
          onChange={(type) => {
            setSelectedLanguages((prev) => [...prev, type]);
          }}
          value={{
            label: 'Add',
            value: 'Add',
            isDisabled: true,
          }}
        />
      </div>
    </div>
  );
};

export default Language;
