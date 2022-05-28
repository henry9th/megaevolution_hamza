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

const TableView = ({
  data,
  toggleItemSelection,
  isSelected,
  selectAll,
  isAllSelected,
}) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>
              <div class="form-check">
                <label class="form-check-label" for="check-all">
                  All
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="check-all"
                  checked={isAllSelected()}
                  onChange={selectAll}
                />
              </div>
            </TableHeader>
            <TableHeader>Creator</TableHeader>
            <TableHeader>Packages</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Link</TableHeader>
            <TableHeader></TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              data={item}
              toggleItemSelection={toggleItemSelection}
              isSelected={isSelected(item.id)}
            />
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
