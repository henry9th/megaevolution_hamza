import styled from 'styled-components';
import React from 'react';

const InputContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: #edd6ff4d;
  position: relative;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  min-width: 0;
  padding: 0.5rem;

  &::placeholder {
    color: #aaaaaa;
  }

  &:first-child {
    border-right: 1px solid #edd6ff;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #edd6ff;
  margin: 1rem 0;
  border: none;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
`;

const PrizeDetails = ({ prizes, setPrizes, maxPrizes }) => {
  return (
    <div className="mt-2">
      {prizes.map((prize, index) => {
        return (
        <React.Fragment key={index}>
              {index !== 0 &&
              prizes.length < maxPrizes &&
              index === prizes.length - 1 && <Divider />}
            <InputContainer key={index}>
              <Input
                type="text"
                placeholder="ex. Megaevolution NFT"
                value={prize.name}
                onChange={(e) => {
                  prizes[index].name = e.target.value;
                  setPrizes([...prizes]);
                }}
              />
              <Input
                type="number"
                placeholder="1~999"
                className="text-center"
                value={prize.amount}
                onChange={(e) => {
                  prizes[index].amount = e.target.value;
                  setPrizes([...prizes]);
                }}
              />
              {prizes.length > 1 &&
                (prizes.length >= maxPrizes || index !== prizes.length - 1) && (
                  <IconButton
                    className="position-absolute end-0"
                    onClick={() => {
                      prizes.splice(index, 1);
                      setPrizes([...prizes]);
                    }}
                  >
                    <i
                      className="fa fa-times-circle me-1"
                      aria-hidden="true"
                    ></i>
                  </IconButton>
                )}
            </InputContainer>
          </React.Fragment>
        );
      })}

      {prizes.length < maxPrizes && (
        <div className="text-center mt-2">
          <IconButton
            onClick={() => {
              if (prizes.length < maxPrizes) {
                setPrizes([...prizes, { name: '', amount: '' }]);
              }
            }}
          >
            <i className="fa fa-plus-circle fa-3x text-primary-light" />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default PrizeDetails;
