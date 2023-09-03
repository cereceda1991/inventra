import Swal from 'sweetalert2';
const showDialog = (title, text,icon) => {
    return Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonColor: '#3a78f2',
        cancelButtonColor: '#0009',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        background: 'var(--background-color)',
        color:'var(--text-color)',
    }).then((result) => {
        if (result.isConfirmed) {
            return true; 
        } else {
            return false;
        }
    });
};

export default showDialog;
