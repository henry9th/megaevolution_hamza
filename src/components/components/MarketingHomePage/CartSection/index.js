import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../../../../contexts/CartContext';
import Pagination from '../Pagination';
import CardsView from './CardsView';
import PriceSection from './PriceSection';
import TableView from './TableView';
import TopBar from './TopBar';

const Wrapper = styled.div`
  background: #ffffff;
  padding-block: 4rem;
  margin-block: 4rem;
`;

const CartSection = () => {
  const [viewType, setViewType] = useState('card');
  const [selected, setSelected] = useState([]);
  const { cartItems, removeSelectedIds, cartLimit } = useCart();

  const toggleItemSelection = (id) => {
    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((item) => item !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };

  const isSelected = (id) => selected.includes(id);

  const removeSelected = () => {
    removeSelectedIds(selected);
    setSelected([]);
  };

  const selectAll = () => {
    if (isAllSelected()) {
      setSelected([]);
    } else {
      setSelected(cartItems.map((item) => item.id));
    }
  };

  const isAllSelected = () => selected.length === cartItems.length;

  // pagination and data
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState(cartItems.slice(0, ITEMS_PER_PAGE));

  useEffect(() => {
    setPageData(
      cartItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    );
  }, [currentPage, cartItems]);

  return (
    <Wrapper>
      <div className="container">
        <h2 className="text-center">Cart</h2>

        <TopBar
          viewType={viewType}
          setViewType={setViewType}
          removeSelected={removeSelected}
        />

        {cartItems.length > 0 ? (
          <>
            <div className="mt-5">
              {viewType === 'card' && (
                <CardsView
                  data={pageData}
                  toggleItemSelection={toggleItemSelection}
                  isSelected={isSelected}
                />
              )}
              {viewType === 'table' && (
                <TableView
                  data={pageData}
                  toggleItemSelection={toggleItemSelection}
                  isSelected={isSelected}
                  isAllSelected={isAllSelected}
                  selectAll={selectAll}
                />
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">
                {cartItems.length} / {cartLimit}
              </h5>

              <Pagination
                totalPages={Math.ceil(cartItems.length / ITEMS_PER_PAGE)}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                className="mt-4"
              />
              <div />
            </div>

            <PriceSection />
          </>
        ) : (
          <div className="mt-5">
            <h4 className="text-center text-muted">No items in cart</h4>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default CartSection;
