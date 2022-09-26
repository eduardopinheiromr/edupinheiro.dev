import { Heading, Stack, Text } from "@chakra-ui/react";
import DynamicCodeBlock from "@modules/shared/components/DynamicCodeBlock";

export const apiDevelopment: Content = {
  render: () => {
    return (
      <Stack gap={4} p={4} w="100%">
        <Heading color="blue" animation="pulseOnlyGradient 10s infinite">
          Boas práticas no desenvolvimento de APIs
        </Heading>
        <Text>Em breve</Text>
      </Stack>
    );
  },
};
