import Mailjet from "node-mailjet";

export const mail = Mailjet.apiConnect(
  import.meta.env.PUBLIC_KEY,
  import.meta.env.PUBLIC_SECRET
);
