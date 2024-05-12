import Swal from "sweetalert2";

export const confirm = (message, msg) => {
    return Swal.fire({
        title: message,
        text: msg,
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
    });
};

export const success = (message) => {
    return Swal.fire({
        position: "center",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
}


