import styled from 'styled-components';
import Select from 'react-select';
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import { CartIcon } from '../ImageGallery/icons';
import { useCart } from '../../../contexts/CartContext';

const Container = styled.div`
  background: transparent;
  border: 3px solid #edd6ff;
  border-radius: 1rem;
  padding: 2rem 3rem 6rem;
`;

const Button = styled.button`
  color: #0e0d39;
  background: #edd6ff;
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

const Item = styled.div`
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
  margin-bottom: 1rem;
  margin-right: 0.5rem;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;

  & i {
    color: ${(props) => (props.textColor ? props.textColor : 'inherit')};
  }
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

const OverviewSection = () => {
  const [selectedType, setSelectedType] = useState(types[0]);
  const { cartItems, removeTemp, undoTempRemovals } = useCart();

  return (
    <div className="mt-5 pt-5">
      <Container>
        <h2 className="text-center">Orders</h2>

        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-center justify-content-md-start"
        >
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

        <div className="mt-5 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h4 className="m-0">Send Orders to</h4>

          <div className="d-flex align-items-center gap-2">
            <Button onClick={undoTempRemovals}>
              Undo <i className="fa fa-undo"></i>
            </Button>
            <Button>
              Cart <CartIcon size={0.8} />
            </Button>
          </div>
        </div>

        <div className="mt-4 d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
          {cartItems.map((item) => (
            <Item key={item.id}>
              {item.name}
              <IconButton
                textColor="#EDD6FF"
                onClick={() => removeTemp(item.id)}
              >
                <i className="fa fa-times-circle" aria-hidden="true"></i>
              </IconButton>
            </Item>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OverviewSection;
