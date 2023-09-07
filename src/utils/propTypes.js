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

export const ButtonGenericPropTypes = {
  buttonContent: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export const SelectOptionsGroupPropTypes = {
  options: PropTypes.array.isRequired
}

export const AddUserFormPropTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleHide: PropTypes.func.isRequired
}

export const CardDashboardPropTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export const DashboardChartPropTypes = {
  chartType: PropTypes.string.isRequired,
  tension: PropTypes.number
}

export const CardDashboardBottomPropTypes = {
  icon: CardDashboardPropTypes.icon,
  title: CardDashboardPropTypes.title,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export const AddProductFormPropTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
}

export const DynamicTablePropTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};