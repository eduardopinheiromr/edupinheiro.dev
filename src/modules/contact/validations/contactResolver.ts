import * as Yup from "yup";

const { yupResolver } = require("@hookform/resolvers/yup");

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Informe seu nome"),
  email: Yup.string()
    .email("Informe um e-mail válido")
    .required("Informe seu e-mail"),
  message: Yup.string().required("Informe sua mensagem"),
});

export default yupResolver(validationSchema);
