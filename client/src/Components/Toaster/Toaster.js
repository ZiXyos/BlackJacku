import Swal from "sweetalert2";

const makeToast = Swal.mixin({

    toast: true,
    position: 'top-end',
    showConfirmButton: true,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {

        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});

export default makeToast;