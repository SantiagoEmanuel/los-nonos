export const Form = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        })
          .then((response) => {
            console.log(response.success);
          })
          .catch((err) => {
            console.log(err);
          });
      }}
      className="space-y-4 flex flex-col"
    >
      <input
        className="p-2 outline-offset-1 rounded-md"
        type="text"
        name="name"
        placeholder="Nombre completo"
      />
      <input
        className="p-2 outline-offset-1 rounded-md"
        type="email"
        name="email"
        placeholder="Correo electrónico"
      />
      <textarea
        className="p-2 outline-offset-1 rounded-md resize-none h-20"
        name="message"
        placeholder="Escriba su mensaje"
      ></textarea>

      <button className="text-white font-semibold w-full bg-green-600 hover:bg-green-700 p-2 rounded-md">
        Enviar Mensaje
      </button>
    </form>
  );
};
