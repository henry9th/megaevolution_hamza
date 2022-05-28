import { Stack } from 'react-bootstrap';
import styled from 'styled-components';
import Title from './Title';

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

const Keyword = styled.button`
  border: none;
  color: #0e0d39;
  border-radius: 1rem;
  font-size: 1rem;
  padding: 0.25rem 0.75rem;
  width: fit-content;
  background-color: ${(props) => (props.selected ? '#edd6ff' : '#fff')};
  font-weight: ${(props) => (props.selected ? '700' : '500')};
  transition: all 0.2s ease-in-out;
`;

const keywords = ['BNB', 'KLAY', 'BUSD'];

const PaymentFilter = ({ selected, setSelected }) => {
  return (
    <Wrapper>
      <Title>Payment</Title>

      <Keyword
        className="align-self-start"
        selected={selected.length === keywords.length}
        onClick={() => {
          if (selected.length === keywords.length) {
            setSelected([]);
          } else {
            setSelected(keywords);
          }
        }}
      >
        All
      </Keyword>
      <Stack className="flex-wrap" direction="horizontal" gap={3}>
        {keywords.map((keyword) => (
          <Keyword
            key={keyword}
            selected={selected.includes(keyword)}
            onClick={() => {
              if (selected.includes(keyword)) {
                setSelected(selected.filter((k) => k !== keyword));
              } else {
                setSelected([...selected, keyword]);
              }
            }}
          >
            {keyword}
          </Keyword>
        ))}
      </Stack>
    </Wrapper>
  );
};

export default PaymentFilter;
