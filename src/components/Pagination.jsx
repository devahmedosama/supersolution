import Link from "next/link";
import usePagination from '../lib/usePagination.js'

export const dotts = '...'

const Pagination = ({ currentPage, totalItems, perPage, renderPageLink }) => {
    const pages = usePagination(totalItems, currentPage, perPage)

    return (
        <div className="container mil-p-0-120">

            {/* pagination */}
            <div className="mil-pagination">
                <Link key="pagination-item-prev" href={currentPage > 1 ? renderPageLink( currentPage - 1 ) : renderPageLink( currentPage )} className="mil-pagination-link mil-pagination-link--prev">&laquo;</Link>
                
                {pages.map((pageNumber, i) =>
                    pageNumber === dotts ? (
                    <span
                        key={i}
                        className="mil-pagination-text"
                    >
                        {pageNumber}
                    </span>
                    ) : (
                    <Link
                        key={`pagination-item-${i}`}
                        href={renderPageLink(pageNumber)}
                        className={`${
                        pageNumber === currentPage ? 'mil-pagination-link--active' : ''
                        } mil-pagination-link`}
                    >
                        {pageNumber}
                    </Link>
                    )
                )}

                <Link key="pagination-item-next" href={currentPage < pages.length ? renderPageLink( currentPage + 1 ) : renderPageLink( currentPage )} className="mil-pagination-link mil-pagination-link--next">&raquo;</Link>
            </div>
            {/* pagination end */}

        </div>
    );
  };
  export default Pagination;