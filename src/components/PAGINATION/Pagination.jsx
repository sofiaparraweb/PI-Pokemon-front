import './Pagination.css';

const Pagination = ({ page, setPage, max}) => {
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const pageNumbers = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div className="pagination-container">
      <button
        disabled={page === 1 || page < 1}
        onClick={previousPage}
        className="pagination-button"
      >
       {'<'}
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setPage(pageNumber)}
          className={pageNumber === page ? 'current-page' : 'pagination-button'}
        >
          {pageNumber}
        </button>
      ))}
      <button
        disabled={page === max}
        onClick={nextPage}
        className="pagination-button"
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
