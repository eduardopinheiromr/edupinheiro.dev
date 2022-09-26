import { Heading, Stack, Text } from "@chakra-ui/react";
import DynamicCodeBlock from "@modules/shared/components/DynamicCodeBlock";

export const apiConsumeOnFront = {
  render: () => {
    const snippet = `
    import { getLocalValue } from "@shared/utils/localStorageManager";
    import axios, { AxiosRequestConfig } from "axios";
    
    const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE,
    });
    
    const requestHandler = async (req: AxiosRequestConfig) => {
      if (typeof window !== "undefined") {
        const { token } = getLocalValue("token");
    
        if (token && req.headers) {
          req.headers.Authorization = "Bearer " + token;
        }
      }
    
      return req;
    };
    
    api.interceptors.request.use((request) => requestHandler(request));`;
    return (
      <Stack gap={4} p={4} w="100%">
        <Heading color="blue" animation="pulseOnlyGradient 10s infinite">
          Como consumo APIs no front end
        </Heading>
        <Text>
          É comum consumirmos APIs no front end, seja para buscar ou enviar
          dados para o back end.
          <br />
          <br />
          Para isso, utilizamos o fetch, que é uma API nativa do JavaScript.
          <br />
          <br />
          Em projetos com necessidade de consumir muitos endpoints, utilizo o
          axios para criar a instância do adaptador da API.
          <br />
          <br />
          O axios traz facilidade também para implementar interceptors, que são
          funções que são executadas antes ou depois de uma requisição.
          <br />
          <br />
          Um exemplo de interceptor que utilizo é para adicionar o token de
          autenticação no header da requisição.
        </Text>
        <DynamicCodeBlock language="javascript" snippet={snippet} />
      </Stack>
    );
  },
};
