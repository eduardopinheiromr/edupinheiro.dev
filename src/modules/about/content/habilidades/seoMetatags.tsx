import { Heading, Stack, Text } from "@chakra-ui/react";
import ContentLayout from "@modules/about/components/ContentLayout";
import { metatagsAndDescriptions } from "@modules/about/constants/metatagsAndDescriptions";
import { Link } from "@modules/shared/components/Link";

export const seoMetatags: Content = {
  render: () => {
    let common = [];
    let facebookTags = [];
    let twitterTags = [];

    metatagsAndDescriptions.forEach(tag => {
      if (tag.name.startsWith("og:")) {
        facebookTags.push(tag);
        return;
      }
      if (tag.name.startsWith("twitter:")) {
        twitterTags.push(tag);
        return;
      }
      common.push(tag);
    });
    return (
      <ContentLayout title="Quais as principais tags de SEO utilizo nos projetos indexados para buscadores">
        <Text>
          Para o favicon, gosto de utilizar o site{" "}
          <Link
            color="blue"
            target="_blank"
            rel="noopener noreferrer"
            href="https://realfavicongenerator.net/"
          >
            RealFaviconGenerator.net
          </Link>
          , que gera todos os arquivos e tags necessários para os principais
          navegadores e dispositivos.
          <br />
          <br />
          Para as mídias sociais, há também uma excelente ferramenta gratuita no
          site{" "}
          <Link
            color="blue"
            target="_blank"
            rel="noopener noreferrer"
            href="https://metatags.io/"
          >
            metatags.io
          </Link>
          , que gera as tags necessárias para o Facebook, Twitter, Google,
          Linkedin, Pinterest e Slack.
          <br />
          <br />
        </Text>
        <Stack gap={8}>
          <Stack spacing={4}>
            <Heading color="green">Tags comuns:</Heading>
            {common.map(({ name, description }) => (
              <Text key={name}>
                <strong>{name}</strong>: {description}
              </Text>
            ))}
          </Stack>
          <Stack spacing={4}>
            <Heading color="green">Facebook:</Heading>
            {facebookTags.map(({ name, description }) => (
              <Text key={name}>
                <strong>{name}</strong>: {description}
              </Text>
            ))}
          </Stack>
          <Stack spacing={4}>
            <Heading color="green">Twitter:</Heading>
            {twitterTags.map(({ name, description }) => (
              <Text key={name}>
                <strong>{name}</strong>: {description}
              </Text>
            ))}
          </Stack>
        </Stack>
      </ContentLayout>
    );
  },
};
