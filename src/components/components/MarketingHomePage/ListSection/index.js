import { useState } from 'react';
import Pagination from '../Pagination';
import CardsView from './CardsView';
import TopBar from './TopBar';
import creatorsMockData from '../creatorsMockData';
import { useEffect } from 'react';
import TableView from './TableView';

const sortingTypes = [
  {
    name: 'By Subscribers',
    value: 'subscribers',
  },
  {
    name: 'Recently Updated',
    value: 'date',
  },
  {
    name: 'Lowest Price',
    value: 'lowest-price',
  },
  {
    name: 'Highest Price',
    value: 'highest-price',
  },
];

const ListSection = () => {
  const [sortBy, setSortBy] = useState(sortingTypes[0].value);
  const [viewType, setViewType] = useState('card');

  // pagination and data
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState(
    creatorsMockData.slice(0, ITEMS_PER_PAGE)
  );

  useEffect(() => {
    setPageData(
      creatorsMockData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    );
  }, [currentPage]);

  return (
    <div className="mt-5 pt-5">
      <TopBar
        sortingTypes={sortingTypes}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewType={viewType}
        setViewType={setViewType}
      />

      <div className="mt-4 ">
        {viewType === 'card' && <CardsView data={pageData} />}
        {viewType === 'table' && <TableView data={pageData} />}
      </div>

      <Pagination
        totalPages={Math.ceil(creatorsMockData.length / ITEMS_PER_PAGE)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        className="mt-4"
      />
    </div>
  );
};

export default ListSection;
