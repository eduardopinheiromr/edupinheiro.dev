import { Heading, Stack, Text } from "@chakra-ui/react";
import DynamicCodeBlock from "@modules/shared/components/DynamicCodeBlock";

export const seoMetatags: Content = {
  render: () => {
    return (
      <Stack gap={4} p={4} w="100%">
        <Heading color="blue" animation="pulseOnlyGradient 10s infinite">
          Quais as principais tags de SEO utilizo nos projetos indexados para
          buscadores
        </Heading>
        <Text>Em breve</Text>
      </Stack>
    );
  },
};
