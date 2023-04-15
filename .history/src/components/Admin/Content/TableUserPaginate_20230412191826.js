import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const items = [...Array(33).keys()];
const Items = ({ currentItems }) => {
  return (
    <div className='items'>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </div>
  );
};

const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % items.length;
  `User requested page number ${event.selected}, which is offset ${newOffset}`;
};
const TableUserPaginate = (props) => {
  const { listUser } = props;
  const [pageCount, setPageCount] = useState(0);

  return (
    <>
      <table className='table table-hover table-bordered'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>User Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Role</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className='btn btn-secondary'
                      onClick={() => {
                        props.handleClickBtnView(item);
                      }}
                    >
                      View
                    </button>
                    <button
                      className='btn btn-warning mx-3'
                      onClick={() => {
                        props.handleClickBtnUpdate(item);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className='btn btn-danger'
                      onClick={() => {
                        props.handleClickBtnDelete(item);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listUser && listUser.length === 0 && (
            <tr>
              <td colSpan={4}>Not Found Data</td>
            </tr>
          )}
        </tbody>
        <PaginatedItems itemsPerPage={4} />
      </table>
      <ReactPaginate
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='< previous'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={null}
      />
    </>
  );
};
export default TableUserPaginate;
