import { Flex } from "@chakra-ui/react";

export const chakraTradeoff: Content = {
  content: `# sobre mim 

sou desenvolvedor fullstack (frontend/backend)
com experiência na criação de aplicativos Web com
javascript / react.js / node.js / react native
e outras bibliotecas/estruturas interessantes.`,
  render: () => {
    return <Flex whiteSpace="pre">{chakraTradeoff.content}</Flex>;
  },
};
