import PropTypes from 'prop-types'

export const NavbarPropTypes = {
  userImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired
}

export const InventoryTablePropTypes = {
  data: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleIn: PropTypes.func.isRequired
}

export const PaginationPropTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
}
export const ProductOptionsPropTypes = {
  productCount: PropTypes.string.isRequired
}

export const UserOptionsPropTypes = {
  userCount: PropTypes.string.isRequired,
  options: PropTypes.shape({
    sortBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.element.isRequired,
        label: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}

export const UsersTablePropTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired,
      actions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    })
  ).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}