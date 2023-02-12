import { Link } from "react-router-dom";
import "./Pagination.scss";

type Paginaton = {
  countOfPages: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
};

export const Pagination = ({
  countOfPages,
  currentPage,
  setCurrentPage,
}: Paginaton) => {
  const pageNumbers = Array.from(
    { length: countOfPages },
    (__, index) => index + 1
  );

  const nextPage = () => {
    if (currentPage !== countOfPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="navigation">
      <div className="container">
        <div className="navigation-list">
          <Link
            className="navigation-button"
            onClick={prevPage}
            to={
              currentPage === 1
                ? `?page=${currentPage}`
                : `?page=${currentPage - 1}`
            }
          >
            Prev
          </Link>
          {pageNumbers.map((pageNum) => (
            <Link
              to={`?page=${pageNum}`}
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={
                pageNum === currentPage
                  ? "navigation-button navigation-button--active"
                  : "navigation-button"
              }
            >
              {pageNum}
            </Link>
          ))}
          <Link
            className="navigation-button"
            to={
              currentPage === countOfPages
                ? `?page=${currentPage}`
                : `?page=${currentPage + 1}`
            }
            onClick={nextPage}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};
