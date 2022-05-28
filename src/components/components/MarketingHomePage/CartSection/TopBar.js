import { Stack } from 'react-bootstrap';
import styled from 'styled-components';
import { CardViewIcon, TableViewIcon } from '../../ImageGallery/icons';
import Select from 'react-select';
import { useState } from 'react';

const Button = styled.button`
  color: ${(props) => (props.delete ? '#fff' : '#0e0d39')};
  background: ${(props) =>
    props.delete ? '#EC595A' : props.selected ? '#EDD6FF' : '#FFFFFF'};
  border: 2px solid #edd6ff;
  border-radius: 0.75rem;
  padding: 0.125rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DeleteButton = styled(Button)`
  color: #fff;
  background: #ec595a;
  border: 2px solid #ec595a;
  text-transform: capitalize;
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
    borderRadius: '2rem',
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

const TopBar = ({ viewType, setViewType, removeSelected }) => {
  const [selectedType, setSelectedType] = useState(types[0]);

  return (
    <div className="d-flex justify-content-md-between align-items-center gap-3 flex-wrap justify-content-center">
      <Stack direction="horizontal" gap={3}>
        <h4 className="m-0">Platform</h4>
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
      </Stack>
      <Stack direction="horizontal" gap={2}>
        <DeleteButton
          onClick={() => {
            removeSelected();
          }}
        >
          <span>delete</span>
          <i className="fa fa-times" />
        </DeleteButton>
        <Button
          selected={viewType === 'card'}
          onClick={() => setViewType('card')}
        >
          <CardViewIcon />
          <span>Card View</span>
        </Button>
        <Button
          selected={viewType === 'table'}
          onClick={() => setViewType('table')}
        >
          <TableViewIcon />
          <span>Table View</span>
        </Button>
      </Stack>
    </div>
  );
};

export default TopBar;
