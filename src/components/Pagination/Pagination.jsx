import { PaginationPropTypes } from '../../utils/propTypes'
import './Pagination.css'
const Pagination = ({ currentPage, totalPages }) => {
  return (
    <div className='pagination'>
      <span className='pagination-arrow'>&lt;</span>
      <span className='pagination-current'>{currentPage}</span>
      <span className='pagination-arrow'>&gt;</span>
      <span className='pagination-separator'>of</span>
      <span className='pagination-total'>{totalPages}</span>
    </div>
  )
}

Pagination.propTypes = PaginationPropTypes

export default Pagination
