import type { NextApiRequest, NextApiResponse } from "next";
const Mailjet = require("node-mailjet");

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET,
});

type Data = {
  status: string;
};

const generateHTML = (req: NextApiRequest) => {
  const { name, email, message, date } = req.body;
  return `<div>
          <h3 color="#86FEA9">edupinheiro.dev</h3>
          <h1>Contato via site</h1>

          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong> ${message}</p>
          <p><strong>Data:</strong> ${date}</p>

          </div>`;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "3dup1n@gmail.com",
          Name: "edupinheiro.dev",
        },
        To: [
          {
            Email: "3dup1n@gmail.com",
            Name: "Eduardo Pinheiro",
          },
        ],
        Subject: "Contato via site :D",
        TextPart: "Um email que você tem que abrir",
        HTMLPart: generateHTML(req),
        CustomID: "AppGettingStartedTest",
      },
    ],
  });
  res.status(200).json({ status: "SENT" });
};

export default handler;
