import { useMemo } from 'react';
import styled from 'styled-components';
import { ChevronLeftIcon, ChevronRightIcon } from '../ImageGallery/icons';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

const Button = styled.button`
  background: ${(props) => (props.active ? '#EDD6FF' : '#F8EEFF')};
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0e0d39;

  &:disabled {
    opacity: 0.5;
  }
`;

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  noOfButtons = 5,
  showNext = true,
  showPrevious = true,
  className,
}) => {
  const buttonNumbers = useMemo(() => {
    const numbers = [];
    if (totalPages > noOfButtons) {
      let start = currentPage - Math.floor((noOfButtons - 1) / 2);
      let end = start + noOfButtons - 1;

      if (start < 1) {
        start = 1;
        end = start + noOfButtons - 1;
      } else if (end > totalPages) {
        end = totalPages;
        start = end - noOfButtons + 1;
      }

      for (let i = start; i <= end; i++) {
        numbers.push(i);
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
      }
    }

    return numbers;
  }, [totalPages, noOfButtons, currentPage]);

  const hasNext = currentPage < totalPages;
  const hasPrevious = currentPage > 1;

  return (
    <PaginationContainer className={className}>
      {showPrevious && (
        <Button
          active
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
          disabled={!hasPrevious}
        >
          <ChevronLeftIcon />
        </Button>
      )}

      {buttonNumbers.map((number) => {
        const page = number;
        const isActive = currentPage === page;
        const isDisabled = page > totalPages;

        const onClick = isDisabled ? null : () => setCurrentPage(page);
        return (
          <Button key={number} active={isActive} onClick={onClick}>
            {page}
          </Button>
        );
      })}

      {showNext && (
        <Button
          active
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
          disabled={!hasNext}
        >
          <ChevronRightIcon />
        </Button>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
