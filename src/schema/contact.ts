import z from "astro:schema";

const ContactSchema = z.object({
  name: z.string({
    message: "El nombre debe ser un string",
  }),
  email: z.string().email({
    message: "Debe ser un formato de email valido",
  }),
  message: z.string({
    message: "El mensaje debe ser un string",
  }),
});

export default function CheckContactData(input: unknown) {
  return ContactSchema.safeParse(input);
}
