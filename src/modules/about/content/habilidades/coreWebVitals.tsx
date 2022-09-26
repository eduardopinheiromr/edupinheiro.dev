import { Heading, Stack, Text } from "@chakra-ui/react";
import DynamicCodeBlock from "@modules/shared/components/DynamicCodeBlock";

export const coreWebVitals: Content = {
  render: () => {
    return (
      <Stack gap={4} p={4} w="100%">
        <Heading color="blue" animation="pulseOnlyGradient 10s infinite">
          Como melhoro a performance e boas práticas para subir as notas no Core
          Web Vitals
        </Heading>
        <Text>Em breve</Text>
      </Stack>
    );
  },
};
