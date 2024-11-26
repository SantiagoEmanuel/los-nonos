import Alert from "@/lib/toast";
import CheckContactData from "@/schema/contact";
import { ToastContainer } from "react-toastify";

// Import CSS
import "./form.css";

const Form = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        const data = {
          name,
          email,
          message,
        };

        const dataCheck = CheckContactData(data);

        if (dataCheck.success) {
          fetch(
            `/api/${import.meta.env.DEV ? "test-send-email" : "send-email"}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(dataCheck.data),
            }
          )
            .then((r) => r.json())
            .then((response) => {
              if (response.success) {
                if (message == "") {
                  Alert({
                    type: "info",
                    message:
                      "Se enviara el correo electrónico sin un mensaje personalizado",
                  });
                }
                Alert({ type: "success", message: response.response });
              } else {
                Alert({ type: "error", message: response.response });
              }
            })
            .catch((err) => {
              Alert({ type: "error", message: err.message });
            });
        } else {
          Alert({
            type: "warning",
            message: "Se han ingresado datos inválidos",
          });
        }
      }}
      className="space-y-4 flex flex-col"
    >
      <input
        className="p-2 outline-offset-1 rounded-md"
        type="text"
        name="name"
        placeholder="Nombre completo"
        required
        minLength={5}
        maxLength={64}
      />
      <input
        className="p-2 outline-offset-1 rounded-md"
        type="email"
        name="email"
        placeholder="Correo electrónico"
        required
      />
      <textarea
        className="p-2 outline-offset-1 rounded-md resize-none min-h-40"
        name="message"
        minLength={10}
        maxLength={600}
        placeholder="Escribe tu mensaje personalizado"
        defaultValue={`Preguntas que quieras hacer:
- 
- 
- 

Otra información de contacto que quieras agregar como por ejemplo tu número`}
      ></textarea>

      <button className="text-white font-semibold w-full bg-green-600 hover:bg-green-700 p-2 rounded-md">
        Enviar Mensaje
      </button>
      <ToastContainer />
    </form>
  );
};

export default Form;
