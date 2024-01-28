import AuthorFormatOne from '../format/AuthorFormatOne';
import ReactPaginate from 'react-paginate';

const AuthorLayoutOne = ({authors, pageCount = 1, currentPage = 1}) => {
  const renderPaginate = () => {
    if (pageCount > 1) {
      return (
        <ReactPaginate
          previousLabel={<i className="fas fa-arrow-left"></i>}
          nextLabel={<i className="fas fa-arrow-right"></i>}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          previousLinkClassName={"prev"}
          nextLinkClassName={"next"}
          disabledClassName={"disabled"}
          activeClassName={"current"}
          forcePage={currentPage - 1}
        />
      )
    }
  }

  const changePage = ({selected}) => {
    const pageNumber = selected + 1; // selected is zero-based index
    window.location.href = `/authors/page/${pageNumber}`;
  }

  return (
    <>
      {authors.map((author, index) => (
        <AuthorFormatOne key={`author-${index}`} author={author} />
      ))}

      { renderPaginate() }
    </>
  )
}

export default AuthorLayoutOne;