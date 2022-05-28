import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import styled from 'styled-components';
import Title from './Title';

const Keyword = styled.button`
  border: 0.59px solid #0e0d39;
  color: #0e0d39;
  border-radius: 0.25rem;
  background-color: #ffffff;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  width: fit-content;
  opacity: ${(props) => (props.selected ? 1 : 0.4)};
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: ${(props) => (props.selected ? 0.8 : 0.6)};
  }
`;

const keywords = [
  'Walkthrough',
  'Giveaway',
  'NFT',
  'P2E',
  'Metaverse',
  'Review',
  'Interview',
  'Live Video',
  'AMA',
  'Vlog',
  'Promotion',
  'Art',
  'PFP',
];

const Keywords = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div className="mt-4">
      <Title>Content Keywords *</Title>

      <Stack className="mt-3 flex-wrap" direction="horizontal" gap={3}>
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
    </div>
  );
};

export default Keywords;
