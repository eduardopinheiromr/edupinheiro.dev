import ContentLayout from "@modules/about/components/ContentLayout";
import { ChakraCodeBlock } from "@modules/shared/components/DynamicCodeBlock/ChakraCodeBlock";

export const globalStateManager: Content = {
  render: () => {
    const zustandSnippet = `// Exemplo de uso: store de autenticação 
// com persistência gerenciada pelo middleware

import create from "zustand";
import { persist } from "zustand/middleware";
import jwt_decode from "jwt-decode";
import { authWithCredentials } from "../services/auth";

type AuthStore = {
  session?: TSession;
  token?: string;
  signOut: () => void;
  signIn: (credentials: TCredentials) => Promise<void | any>;
  set: (session: Partial<AuthStore>) => void;
};

const initialState = {
  session: undefined,
  token: undefined,
};

export const useAuthStore = create(
  persist<AuthStore>(
    (set, get) => {
      return {
        ...initialState,
        signIn: async (credentials) => {
          try {
            const { token, ...user } = await authWithCredentials(credentials);
            set({ session: jwt_decode(token), token, ...user });
          } catch (error) {
            return { error };
          }
        },
        signOut: () => {
          set({ ...initialState });
          localStorage.clear();
        },
        set: (data: Partial<AuthStore>) => set({ ...data }),
      };
    },
    {
      name: "auth-storage", // unique name
    }
  )
);`;
    return (
      <ContentLayout title="Gerenciando o estado global com Zustand">
        Quando se trata de gerenciar o estado global de uma aplicação, a
        primeira coisa que vem na cabeça é utilizar o Redux, que é uma
        biblioteca que permite a criação de um store global, que pode ser
        acessado por qualquer componente da aplicação.
        <br />
        <br />
        Com isso, é possível compartilhar o estado entre os componentes, e
        consequentemente, evitar a prop drilling.
        <br />
        <br />
        Porém, o Redux é uma biblioteca muito robusta, que possui muitas
        funcionalidades, e que pode ser um pouco complexa, verbosa e com muito
        código boilerplate.
        <br />
        <br />
        Podemos utilizar o Zustand, que é uma biblioteca muito leve, que possui
        apenas 1.5kb, e que possui as funcionalidades necessárias para gerenciar
        o estado global, além de plugins para persistência automática no
        localStorage.
        <br />
        <br />
        Para utilizar o Zustand, precisamos criar um hook, que é uma função que
        retorna um estado, e uma função para atualizar esse estado.
        <br />
        <br />
        <ChakraCodeBlock
          mt={8}
          language="typescript"
          snippet={zustandSnippet}
        />
      </ContentLayout>
    );
  },
};
