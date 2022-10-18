import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "@config/nodemailer";

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const mailData = {
    from: process.env.SMTP_EMAIL,
    to: "3dup1n@gmail.com",
    subject: `${req.body.subject ?? ""} Contato de ${req.body.name}`,
    text: req.body.message,
    html: `<div>
        <h1>${req.body.name}</h1>
        <p>${req.body.email}</p>
        Mensagem: 
        ${req.body.message}
        </div>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log({ err });

      return res.status(500).send({
        message:
          "There is a problem with the mail service. Please, try other way of contact.",
      });
    } else res.status(200).send({ message: "Email sended." });
  });
};

export default contactHandler;
