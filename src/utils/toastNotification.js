import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export const ToastNotification = withReactContent(
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    customClass: {
      container: "toast-container",
    },
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  })
);
