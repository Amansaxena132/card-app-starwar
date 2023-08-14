import {Pagination} from 'antd';


const PaginationSection = ({ currentPage, totalPages, handlePaginationChange }) => {
    return (
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <Pagination current={currentPage} total={totalPages * 10} onChange={handlePaginationChange}/>
      </div>
    ); 
  };
  

  export default PaginationSection;