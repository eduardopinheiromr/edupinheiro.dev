import { Text } from "@chakra-ui/react";
import ContentLayout from "@modules/about/components/ContentLayout";
import { ChakraCodeBlock } from "@modules/shared/components/DynamicCodeBlock/ChakraCodeBlock";

export const projectStructure: Content = {
  render: () => {
    const structureSnippet = `  # exemplo de estrutura de projeto

  src/
  |  pages/index.tsx | **/\*.tsx
  |  modules/
  |     |  shared/
  |     |    |  types/global.d.ts | **/_.d,ts
  |     |    |  utils/_.ts
  |     |    |  constants/_.ts
  |     |    |  services/api.ts && _.ts
  |     |    |  components/ComponentName/index.tsx && index.test.tsx && \*_/_.ts | \*.tsx
  |  theme/
  |    | index.ts
  |    | fonts.ts
  |    | breakpoints.ts
  |    | colors.ts
  |    | components.ts
  |    | styles.ts
    `;
    return (
      <ContentLayout title="Como estruturo meus projetos">
        <Text>
          Para estruturar meus projetos, é preciso entender primeiro se ele
          receberá muitas atualizações, ou se será pequeno, que após entregue,
          não receberá mais atualizações.
          <br />
          <br />
          Se for receber muitas atualizações, é importante estruturar de forma
          que seja fácil de entender e manter.
          <br />
          <br />
          Para isso, separo os grupos de componentes, serviços, etc em módulos,
          que são pastas que contém todos os arquivos relacionados a um grupo de
          componentes, serviços, etc.
          <br />
          <br />
        </Text>
        <ChakraCodeBlock language="text" snippet={structureSnippet} />
      </ContentLayout>
    );
  },
};
