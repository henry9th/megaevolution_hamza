import { Stack } from 'react-bootstrap';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import { QuestionMarkIcon, SearchIcon } from '../../../ImageGallery/icons';
import Title from './Title';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
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

const CustomSearchButton = styled.button`
  border: none;
  color: #0e0d39;
  border-radius: 0.5rem;
  width: 2rem;
  height: 2rem;
  background-color: #faf3ff;
`;

const CustomSearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #0e0d39;
  border-radius: 0.5rem;
  max-width: 8rem;
  padding: 0.25rem;
  background-color: #faf3ff;

  & i {
    color: #edd6ff;
  }
`;

const CustomSearchInput = styled.input.attrs({
  type: 'number',
})`
  border: none;
  background-color: transparent;
  flex: 1;
  min-width: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;

  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
`;

const keywords = ['Subscriber private', '~10k', '10k~50k', '50k~100k', '100k~'];

const SubscribersFilter = ({ selected, setSelected }) => {
  return (
    <Wrapper>
      <div className="d-flex position-relative align-items-center gap-3 text-primary-dark">
        <Title className="me-3">Subscribers</Title>
        <Tooltip
          title=""
          position="top"
          trigger="mouseenter"
          className="position-absolute end-0"
        >
          <QuestionMarkIcon />
        </Tooltip>
      </div>

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
      <Stack direction="horizontal" gap={2}>
        <CustomSearchButton>
          <SearchIcon size={0.5} />
        </CustomSearchButton>
        <CustomSearchInputWrapper>
          <IconButton>
            <i className="fa fa-lock fa-lg" />
          </IconButton>
          <CustomSearchInput placeholder="Input Num" />
        </CustomSearchInputWrapper>
        <span>-</span>
        <CustomSearchInputWrapper>
          <IconButton>
            <i className="fa fa-lock fa-lg" />
          </IconButton>
          <CustomSearchInput placeholder="Input Num" />
        </CustomSearchInputWrapper>
      </Stack>
    </Wrapper>
  );
};

export default SubscribersFilter;
