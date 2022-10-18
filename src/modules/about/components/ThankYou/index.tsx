import { Flex, Heading, Text } from "@chakra-ui/react";

export default function ThankYou() {
  return (
    <Flex direction="column" flex="1" textAlign="center">
      <Heading color="white" mt={{ base: 16, lg: 48 }}>
        Obrigado por visitar meu site =)
      </Heading>
      <Text color="text" mt={8}>
        Para saber mais sobre mim, clique em um dos arquivos ao lado.
      </Text>
    </Flex>
  );
}
