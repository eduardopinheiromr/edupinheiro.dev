import { Heading, Stack, Text } from "@chakra-ui/react";
import DynamicCodeBlock from "@modules/shared/components/DynamicCodeBlock";

export const globalStateManager: Content = {
  render: () => {
    const zustandSnippet = `
    import create from "zustand";
    
    type StoreState = {
      count: number;
      increment: () => void;
      decrement: () => void;
    }

    const useStore = create<StoreState>((set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }));
    
    export default useStore;
                `;
    return (
      <Stack gap={4} p={4} w="100%">
        <Heading color="blue" animation="pulseOnlyGradient 10s infinite">
          Gerenciando o estado global com Zustand
        </Heading>
        <Text>
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
          Podemos utilizar o Zustand, que é uma biblioteca muito leve, que
          possui apenas 1.5kb, e que possui as funcionalidades necessárias para
          gerenciar o estado global, além de plugins para persistência
          automática no localStorage.
          <br />
          <br />
          Para utilizar o Zustand, precisamos criar um hook, que é uma função
          que retorna um estado, e uma função para atualizar esse estado.
          <br />
          <br />
          <DynamicCodeBlock language="typescript" snippet={zustandSnippet} />
        </Text>
      </Stack>
    );
  },
};
