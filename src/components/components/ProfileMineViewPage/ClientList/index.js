import styled from 'styled-components';
import { QuestionMarkIcon } from '../../ImageGallery/icons';
import Card from '../Card';
import ListItem from './ListItem';

const List = styled.ul`
  width: 100%;
  height: 100%;
  max-height: 17rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 0.5rem 0;
  margin: 0;

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
`;

const ClientList = () => {
  return (
    <div className="mt-5 pt-4">
      <div className="d-flex align-items-center justify-content-between gap-4">
        <div className="d-flex align-items-center gap-2 text-primary-dark">
          <h3 className="m-0">Client List</h3>
          <QuestionMarkIcon />
        </div>
        <span className="badge rounded-pill badge-secondary">Total: 2111</span>
      </div>

      <Card className="mt-4">
        <List>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </List>
      </Card>
    </div>
  );
};

export default ClientList;
