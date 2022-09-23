import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import ContentFile from "@modules/shared/components/ContentFile";
import { Link } from "@modules/shared/components/Link";
import PageLayout from "@modules/shared/components/PageLayout";
import SideMenu from "@modules/shared/components/SideMenu";
import { technologies } from "@modules/shared/constants/technologies";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTabStore } from "@modules/shared/stores/useTabStore";

export default function ProjectsPage() {
  const router = useRouter();
  const { tabsOpened, set } = useTabStore();
  useEffect(() => {
    if (!router.asPath.includes("#")) {
      router.replace("#react");
    }
    set({ tabsOpened: ["react"] });
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
              onClick={() => {
                const hasTab = tabsOpened.includes(technology.name);
                set({
                  tabsOpened: hasTab
                    ? tabsOpened
                    : [...tabsOpened, technology.name],
                });
              }}
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
        {router.asPath.includes("#") && <ContentFile>Já já</ContentFile>}
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
