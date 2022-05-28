import styled from 'styled-components';
import { KlayIcon } from '../../ImageGallery/icons';
import Select from 'react-select';
import { useState } from 'react';

const PackageColumn = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1.5fr 4fr 1.5fr 1.5fr 1.5fr 1.5fr;
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
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1rem;
`;

const Title = styled.h4`
  color: #0e0d39;
  font-size: 1.5rem;
  margin: 0;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
`;

const Cell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #edd6ff;
  border-right: 1px solid #edd6ff;

  &:last-child {
    border-bottom: none;
  }
`;

const InputField = styled.input`
  width: 100%;
  flex: 1;
  //   height: 100%;
  align-self: ${(props) => (props.vertical === 'top' ? 'start' : 'center')};
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: #0e0d39;
  font-family: 'Space Grotesk', FontAwesome;
  text-align: ${(props) => props.align || 'left'};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => (props.darkPlaceholder ? '#0e0d39' : '#cbcaeb')};
  }

  ${(props) =>
    props.type === 'number'
      ? `
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      -moz-appearance: textfield;
      `
      : ''}
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: #0e0d39;
  font-family: 'Space Grotesk', FontAwesome;
  resize: none;
  overflow-y: scroll;
  overflow-x: hidden;

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

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #cbcaeb !important;
  }
`;

const ErrorText = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  color: #ec595a;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.25rem 1rem;
`;

const AddColumnButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  grid-row: 2 / span 6;
  background: #edd6ff4d;
  color: #edd6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-right: 1px solid #edd6ff;
  font-size: 6rem;
`;

// Select
const revisionsList = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: 4,
    value: 4,
  },
  {
    label: 5,
    value: 5,
  },
  {
    label: 6,
    value: 6,
  },
  {
    label: 7,
    value: 7,
  },
  {
    label: 8,
    value: 8,
  },
  {
    label: 9,
    value: 9,
  },
  {
    label: 'Unlimited',
    value: 'unlimited',
  },
];

const OptionWrapper = styled.div`
  text-align: center;
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
    padding: '0.5rem',
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
    fontWeight: '600',
    fontFamily: 'Space Grotesk',
  }),
  menu: (base) => ({
    ...base,
    border: '3px solid #edd6ff',
    borderRadius: '1rem',
    zIndex: 100,
    maxWidth: '6rem',
    right: '0',
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: '6rem',
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

const PackageForm = ({ heading, defaultEnabled }) => {
  const [enabled, setEnabled] = useState(defaultEnabled);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [revisions, setRevisions] = useState('');
  const [contentLength, setContentLength] = useState('');

  const [priceError, setPriceError] = useState('');
  const [deliveryTimeError, setDeliveryTimeError] = useState('');

  const validatePrice = (value) => {
    if (value <= 0) {
      setPriceError('Only positive numbers are allowed.');
    } else {
      setPriceError('');
    }
  };

  const validateDeliveryTime = (value) => {
    if (value <= 0 || value > 30) {
      setDeliveryTimeError('Invalid Numbers ( Max: 30 days )');
    } else {
      setDeliveryTimeError('');
    }
  };

  return (
    <PackageColumn>
      <Header>
        <Title>{heading}</Title>
        {enabled && (
          <IconButton type="button" onClick={() => setEnabled(false)}>
            <i className="fa fa-times-circle fa-lg" aria-hidden="true"></i>
          </IconButton>
        )}
      </Header>
      {!enabled ? (
        <AddColumnButton onClick={() => setEnabled(true)}>
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </AddColumnButton>
      ) : (
        <>
          <Cell>
            <InputField
              placeholder="Name your package &#xf040;"
              vertical="top"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Cell>
          <Cell>
            <TextArea
              placeholder="Describe the details of your service &#xf040;"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Cell>
          <Cell className="p-3">
            <KlayIcon />
            <InputField
              type="number"
              placeholder="--"
              align="right"
              darkPlaceholder
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                validatePrice(e.target.value);
              }}
              onBlur={(e) => validatePrice(e.target.value)}
            />
            <h5 className="m-0">Klay</h5>

            {priceError && <ErrorText>{priceError}</ErrorText>}
          </Cell>
          <Cell className="p-3">
            <InputField
              type="number"
              placeholder="--"
              align="right"
              darkPlaceholder
              value={deliveryTime}
              onChange={(e) => {
                setDeliveryTime(e.target.value);
                validateDeliveryTime(e.target.value);
              }}
              onBlur={(e) => validateDeliveryTime(e.target.value)}
            />
            <h5 className="m-0">Days</h5>

            {deliveryTimeError && <ErrorText>{deliveryTimeError}</ErrorText>}
          </Cell>
          <Cell>
            <Select
              styles={selectCustomStyles}
              options={revisionsList}
              components={{
                Option,
                IndicatorSeparator: () => null,
              }}
              onChange={(type) => {
                setRevisions(type);
              }}
              value={revisions}
            />
          </Cell>
          <Cell>
            <TextArea
              placeholder="Describe content length e.g. 10 min, 500 words, etc."
              value={contentLength}
              onChange={(e) => setContentLength(e.target.value)}
            />
          </Cell>
        </>
      )}
    </PackageColumn>
  );
};

export default PackageForm;
