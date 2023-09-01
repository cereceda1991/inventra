import Swal from 'sweetalert2';
const showDialog = (title, text,icon) => {
    return Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonColor: '#2969e3',
        cancelButtonColor: '#0009',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            return true; 
        } else {
            return false;
        }
    });
};

export default showDialog;
