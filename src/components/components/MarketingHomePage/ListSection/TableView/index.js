import styled from 'styled-components';
import TableRow from './TableRow';

const TableContainer = styled.div`
  width: 100%;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    height: 0.5rem;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

const TableHeader = styled.th`
  font-weight: 500;
  font-size: 1.25rem;
  color: #0e0d39;
  padding: 1.5rem 1rem;
`;

const TableView = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>Creator</TableHeader>
            <TableHeader>Packages</TableHeader>
            <TableHeader>Stats</TableHeader>
            <TableHeader>Link</TableHeader>
            <TableHeader></TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} data={item} />
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
