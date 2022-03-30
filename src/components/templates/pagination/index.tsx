import React, { useMemo } from 'react';
import { PaginationWrapper } from './styled';
import { Link } from 'gatsby';

interface Props extends Pagination {
  path: string;
}

const Pagination: React.FC<Props> = ({
  path,
  currentPage,
  hasNextPage,
  hasPreviousPage,
  pageCount,
}) => {
  const navPages = useMemo(() => {
    const prevPage = hasPreviousPage ? currentPage - 1 : currentPage;
    const nextPage = hasNextPage ? currentPage + 1 : currentPage;
    const pageRange = Array.from(new Array(pageCount).keys())
      .map(x => x + 1)
      .slice(Math.max(prevPage - 1, 0), Math.max(nextPage + 1, currentPage));

    return {
      prevPage,
      nextPage,
      pageRange,
    };
  }, [currentPage, hasNextPage, hasPreviousPage]);

  return (
    <PaginationWrapper>
      <ul>
        <li>
          <Link
            to={`/${path}/${navPages.prevPage === 1 ? '' : navPages.prevPage}`}
          >
            <span className="material-icons-outlined">navigate_before</span>
          </Link>
        </li>
        {navPages.pageRange.map(page => (
          <li key={page}>
            <Link
              to={`/${path}/${page === 1 ? '' : page}`}
              className={page === currentPage ? 'active' : ''}
            >
              {page}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={`/${path}/${navPages.nextPage === 1 ? '' : navPages.nextPage}`}
          >
            <span className="material-icons-outlined">navigate_next</span>
          </Link>
        </li>
      </ul>
    </PaginationWrapper>
  );
};

export default Pagination;
