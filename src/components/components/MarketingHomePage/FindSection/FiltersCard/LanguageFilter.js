import styled from 'styled-components';
import { QuestionMarkIcon, SearchIcon } from '../../../ImageGallery/icons';
import Title from './Title';
import Select from 'react-select';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 0.7px solid #d4d4d4;
  padding: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SelectedLanguageTag = styled.div`
  color: #0e0d39;
  font-size: 1.125rem;
  font-weight: 500;
  font-family: 'Space Grotesk';
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1.4px solid #edd6ff;
  border-radius: 2rem;
  padding: 0.25rem 0.5rem 0.25rem 1rem;

  & i {
    color: #edd6ff;
  }
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
`;

// select
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
    minWidth: '12rem',
    border: '2px solid #EDD6FF',
    padding: '0 0.5rem 0 2.5rem',
    borderRadius: '1rem',
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

const LanguageFilter = ({ selected, setSelected }) => {
  const removeLanguage = (language) => {
    setSelected(selected.filter((l) => l.value !== language));
  };

  return (
    <Wrapper>
      <div className="d-flex position-relative align-items-center gap-3 text-primary-dark">
        <Title>Language</Title>
        <Tooltip
          title="The creator uses this language for communication."
          position="top"
          trigger="mouseenter"
          className="position-absolute end-0"
        >
          <QuestionMarkIcon />
        </Tooltip>
      </div>

      <div className="position-relative d-flex align-items-center ">
        <IconButton className="position-absolute ms-1">
          <SearchIcon size={0.7} />
        </IconButton>
        <Select
          styles={selectCustomStyles}
          options={[
            ...languagesList.filter((language) =>
              selected.every((l) => l.value !== language.value)
            ),
          ]}
          components={{
            Option,
            IndicatorSeparator: () => null,
            IndicatorsContainer: () => null,
          }}
          onChange={(type) => {
            setSelected((prev) => [...prev, type]);
          }}
          value={{}}
        />
      </div>

      <div className="d-flex gap-3 flex-wrap align-items-center">
        {selected.map((language) => (
          <SelectedLanguageTag>
            {language.label}
            <IconButton onClick={() => removeLanguage(language.value)}>
              <i class="fa fa-times fa-lg" aria-hidden="true"></i>
            </IconButton>
          </SelectedLanguageTag>
        ))}
      </div>
    </Wrapper>
  );
};

export default LanguageFilter;
