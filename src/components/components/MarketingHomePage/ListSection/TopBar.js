import { Stack } from 'react-bootstrap';
import styled from 'styled-components';
import { CardViewIcon, TableViewIcon } from '../../ImageGallery/icons';

const Button = styled.button`
  color: #0e0d39;
  background: ${(props) => (props.selected ? '#EDD6FF' : '#FFFFFF')};
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

const TopBar = ({ sortingTypes, sortBy, setSortBy, viewType, setViewType }) => {
  return (
    <div className="d-flex justify-content-md-between align-items-center gap-3 flex-wrap justify-content-center">
      <Stack direction="horizontal" gap={2}>
        {sortingTypes.map((sortingType) => {
          return (
            <Button
              key={sortingType.value}
              selected={sortBy === sortingType.value}
              onClick={() => setSortBy(sortingType.value)}
            >
              {sortBy === sortingType.value ? (
                <i className="fa fa-check"></i>
              ) : null}
              {sortingType.name}
            </Button>
          );
        })}
      </Stack>
      <Stack direction="horizontal" gap={2}>
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
