import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import ContentFile from "@modules/shared/components/ContentFile";
import { Link } from "@modules/shared/components/Link";
import PageLayout from "@modules/shared/components/PageLayout";
import SideMenu from "@modules/shared/components/SideMenu";
import { technologies } from "@modules/shared/constants/technologies";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProjectsPage() {
  const router = useRouter();

  useEffect(() => {
    if (!router.asPath.includes("#")) {
      router.replace("#react");
    }
  }, [router.isReady]);
  return (
    <PageLayout title={router.pathname}>
      <Flex flex="1">
        <SideMenu label="tecnologias">
          {technologies.map(technology => (
            <Link
              display="flex"
              key={technology.name}
              href={`#${technology.name}`}
              transition=".3s"
              bg={
                decodeURI(router.asPath).includes("#" + technology.name)
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent"
              }
              color={
                decodeURI(router.asPath).includes("#" + technology.name)
                  ? "white"
                  : "text"
              }
              px={4}
              py={2}
              alignItems="center"
              gap={2}
              _hover={{
                textDecor: "none",
                bg: decodeURI(router.asPath).includes("#" + technology.name)
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(255, 255, 255, 0.1)",
              }}
            >
              <Icon as={technology.icon} /> <Text>{technology.name}</Text>
            </Link>
          ))}
        </SideMenu>
        {router.asPath.includes("#") && (
          <ContentFile
            filename={
              <Flex align="center">
                <Icon
                  as={
                    technologies.find(
                      technology =>
                        decodeURI(router.asPath).split("#")[1] ===
                        technology.name
                    )?.icon
                  }
                />
                <Text ml={2}>{decodeURI(router.asPath).split("#")[1]}</Text>
              </Flex>
            }
          >
            Já já
          </ContentFile>
        )}
        {!router.asPath.includes("#") && (
          <Flex direction="column" flex="1" textAlign="center">
            <Heading color="white" mt={{ base: 16, lg: 48 }}>
              Obrigado por visitar meu site =)
            </Heading>
            <Text color="text" mt={8}>
              Conheça alguns dos meus projetos clicando nas categorias ao lado.
            </Text>
          </Flex>
        )}
      </Flex>
    </PageLayout>
  );
}
