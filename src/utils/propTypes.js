import PropTypes from 'prop-types';

export const NavbarPropTypes = {
    userImage: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userRole: PropTypes.string.isRequired
};

export const InventoryTablePropTypes = {
    data: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleIn: PropTypes.func.isRequired
};

export const PaginationPropTypes = {
    currentPage: PropTypes.string.isRequired,
    totalPages: PropTypes.string.isRequired,
}
export const ProductOptionsPropTypes = {
    productCount: PropTypes.string.isRequired,
}