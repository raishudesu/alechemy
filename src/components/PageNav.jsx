import React from "react";

const totalPages = 4; // Change this value to set the total number of pages

const PageNav = ({ currentPage, handlePageChange }) => {
  // Create an array with page numbers from 1 to TOTAL_PAGES
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex gap-3">
      {pageNumbers.map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(pageNumber)}
          className={`${
            pageNumber === currentPage ? "bg-gray-300" : "bg-none"
          } p-2 hover:bg-gray-300 transition ease-in-out rounded-md`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default PageNav;
