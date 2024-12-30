import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Pagination = ({
  postPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pagNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pagNumbers.push(i);
  }

  const changeCurrentPage = (option) => {
    if (option === 1) {
      currentPage <= 1 ? setCurrentPage(1) : setCurrentPage((prev) => prev - 1);
    }
    if (option === 2) {
      const maxPage = Math.ceil(totalPosts / postPerPage);
      setCurrentPage((prev) => (prev >= maxPage ? maxPage : prev + 1));
    }
  };

  return (
    <div className="flex items-center py-2 unselectable">
      <FaChevronLeft
        onClick={() => changeCurrentPage(1)}
        className="p-[9px] text-3xl rounded list-none m-[1px] bg-white text-dim cursor-pointer hover:opacity-70"
      />
      {pagNumbers
        .slice(
          currentPage - 5 > 1 ? currentPage - 5 : 0,
          currentPage < 5 ? 5 : currentPage
        )
        .map((item) => (
          <li
            key={item}
            className={`text-dim p-3 py-[5px] rounded list-none m-[1px] text-sm ${
              item === currentPage && "!bg-secondary !text-white"
            }`}
          >
            <button
              href="!#"
              style={{ border: "none", background: "transparent" }}
              onClick={() => paginate(item)}
            >
              {item}
            </button>
          </li>
        ))}
      <FaChevronRight
        onClick={() => changeCurrentPage(2)}
        className="p-[9px] text-3xl rounded list-none m-[1px] bg-white text-dim cursor-pointer hover:opacity-70"
      />
    </div>
  );
};

export default Pagination;
