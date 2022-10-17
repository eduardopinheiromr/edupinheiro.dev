import {  Text } from "@chakra-ui/react";
import ContentLayout from "@modules/about/components/ContentLayout";
import { ChakraCodeBlock } from "@modules/shared/components/DynamicCodeBlock/ChakraCodeBlock";

export const apiConsumeOnFront = {
  render: () => {
    const snippet = `
    import axios, { AxiosRequestConfig } from "axios";
    import { useAuthStore } from "@auth/stores/useAuthStore";
    
    const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE,
    });
    
    const requestHandler = async (req: AxiosRequestConfig) => {
      if (typeof window !== "undefined") {
        const { token, session } = useAuthStore.getState();
    
        const needsAuthentication = !req?.url?.includes("/auth/");
    
        if (needsAuthentication && (!token || Date.now() > session.expiration)) {
          localStorage.clear();
          window.location.href = "/";
          throw new axios.Cancel("No token found");
        }
    
        if (token && req.headers) {
          req.headers.Authorization = "Bearer " + token;
        }
      }
    
      return req;
    };
    
    api.interceptors.request.use((request) => requestHandler(request));`;
    return (
      <ContentLayout title="Como consumo APIs no front end">
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
        <ChakraCodeBlock mt={8} language="javascript" snippet={snippet} />
      </ContentLayout>
    );
  },
};
