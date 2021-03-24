import React from "react";
import "../css/Pagination.css";

function Pagination({ maxContentPerPage, totalMatchesData, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalMatchesData / maxContentPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pagination">
      <nav>
        <ul>
          {pageNumber.map((number) => (
            <>
              <li key={number} className="page-item">
                <a onClick={() => paginate(number)} className="page-link">
                  {number}
                </a>
              </li>
            </>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
