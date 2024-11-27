import type { AlertTypes } from "@/types/alert";
import { toast } from "react-toastify";

const Alert = ({ type, message }: AlertTypes) => {
  switch (type) {
    case "error":
      toast.error(message, {
        theme: "light",
        position: "bottom-right",
        closeOnClick: true,
        pauseOnHover: false,
        autoClose: 3000,
      });
      break;
    case "success":
      toast.success(message, {
        theme: "light",
        position: "bottom-right",
        closeOnClick: true,
        pauseOnHover: false,
        autoClose: 3000,
      });
      break;
    case "warning":
      toast.warning(message, {
        theme: "light",
        position: "bottom-right",
        closeOnClick: true,
        pauseOnHover: false,
        autoClose: 3000,
      });
      break;
    case "info":
      toast.info(message, {
        theme: "light",
        position: "bottom-right",
        closeOnClick: true,
        pauseOnHover: false,
        autoClose: 3000,
      });
      break;
  }
};

export default Alert;
