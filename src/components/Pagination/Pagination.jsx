import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Pagination.css';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  // Generate page numbers with ellipsis
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pageNumbers.push(i);
    } else if (
      i === currentPage - 2 ||
      i === currentPage + 2
    ) {
      pageNumbers.push('...');
    }
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination-container">
      {/* Items per page selector */}
      <div className="items-per-page">
        <label htmlFor="itemsPerPage" className="items-per-page-label">
          Show:
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="items-per-page-select"
        >
          <option value={12}>12</option>
          <option value={24}>24</option>
          <option value={36}>36</option>
          <option value={48}>48</option>
        </select>
        <span className="items-per-page-text">per page</span>
      </div>

      {/* Page navigation */}
      <div className="page-navigation">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`nav-button ${currentPage === 1 ? 'disabled' : ''}`}
        >
          <FaChevronLeft />
        </button>

        {pageNumbers.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="ellipsis">...</span>
            ) : (
              <button
                onClick={() => handlePageChange(page)}
                className={`page-button ${currentPage === page ? 'active' : ''}`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`nav-button ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Page info */}
      <div className="page-info">
        Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
        {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} items
      </div>
    </div>
  );
};

export default Pagination; 