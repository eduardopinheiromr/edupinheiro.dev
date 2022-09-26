import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

export const chakraTradeoff: Content = {
  render: () => {
    return (
      <Stack gap={4} p={4} w="100%">
        <Heading color="blue" animation="pulseOnlyGradient 10s infinite">
          Chakra UI e seu tradeoff
        </Heading>
        <Text>
          Como principal biblioteca de componentes, utilizo o Chakra UI.
          <br />
          <br />
          Além de ter uma ampla gama de componentes e hooks muito úteis, são de
          <strong>fácil customização</strong> e permite a{" "}
          <strong>criação de temas</strong>, auxiliando na{" "}
          <strong>estruturação de design systems</strong>.
          <br />
          <br />
          Em projetos que o prazo é mais curto, é sempre uma boa pedida, pois
          entrega com muita qualidade e agilidade.
          <br />
          <br />
          Seu tradeoff é que na instalação, não é possível separar suas
          dependências, então{" "}
          <strong>
            mesmo que não estejamos utilizando nenhum componente animado com o
            framer-motion
          </strong>
          , por exemplo, <strong>ele será instalado junto</strong> com o Chakra
          UI.
          <br />
          <br />
          Em projetos que a performance é um fator muito importante e há um
          prazo de entrega compatível, tenho bons resultados com o{" "}
          <strong>Styled Components</strong>, <strong>tailwindcss</strong>, e
          outros que tem menos dependências, consequentemente, menor tamanho do
          bundle final.
        </Text>
      </Stack>
    );
  },
};
