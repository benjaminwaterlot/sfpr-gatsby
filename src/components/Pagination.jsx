import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ currentPage, numberOfPages, createUrl }) => {
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <Link
        to={createUrl(currentPage - 1)}
        className="pagination-previous"
        disabled={currentPage === 1}
      >
        Page précédente
      </Link>
      <Link
        to={createUrl(currentPage + 1)}
        className="pagination-next"
        disabled={currentPage === numberOfPages}
      >
        Page suivante
      </Link>
      <ul className="pagination-list">
        {Array(numberOfPages)
          .fill()
          .map((_, idx) => (
            <li key={idx}>
              <Link
                to={createUrl(idx + 1)}
                className={`pagination-link ${
                  idx + 1 === currentPage && 'is-current'
                }`}
                aria-label="Goto page 1"
              >
                {idx + 1}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Pagination
