import Mailjet from "node-mailjet";

const mail = Mailjet.apiConnect(
  import.meta.env.PUBLIC_KEY,
  import.meta.env.PUBLIC_SECRET
);

export default mail;
