import Swal from 'sweetalert2';

const showDialog = async (title, text, icon, confirmButtonColor) => {
    const result = await Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonColor: confirmButtonColor || '#3a78f2',
        cancelButtonColor: '#0009',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        background: 'var(--background-color)',
        color: 'var(--text-color)',
    });

    return result.isConfirmed;
};

export default showDialog;
