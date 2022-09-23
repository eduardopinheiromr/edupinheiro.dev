import PageLayout from "@modules/shared/components/PageLayout";
import { Flex, Heading, Icon, Spinner, Text } from "@chakra-ui/react";
import { FaMarkdown } from "react-icons/fa";

import { useRouter } from "next/router";
import { Link } from "@modules/shared/components/Link";
import { useEffect, useRef, useState } from "react";
import SideMenu from "@modules/shared/components/SideMenu";
import { anchors } from "@modules/shared/constants/anchors";
import ContentFile from "@modules/shared/components/ContentFile";

export default function AboutMe() {
  const router = useRouter();

  const [markdown, setMarkdown] = useState<string>(undefined);

  useEffect(() => {
    if (!router.asPath.includes("#")) {
      router.replace("#bio");
    }
  }, [router.isReady]);

  useEffect(() => {
    if (router.asPath.includes("#")) {
      const markdownPath = `/content/${decodeURI(
        router.asPath.split("#")[1]
      )}.md`.toLowerCase();

      fetch(markdownPath)
        .then(res => res.text())
        .then(text => setMarkdown(text));
    }
  }, [router.asPath]);

  return (
    <PageLayout>
      <Flex flex="1">
        <SideMenu label="dados-pessoais">
          {anchors.map(anchor => (
            <Link
              display="flex"
              key={anchor}
              href={`#${anchor}`}
              transition=".3s"
              bg={
                decodeURI(router.asPath).includes("#" + anchor)
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent"
              }
              color={
                decodeURI(router.asPath).includes("#" + anchor)
                  ? "white"
                  : "text"
              }
              px={4}
              py={2}
              alignItems="center"
              gap={2}
              _hover={{
                textDecor: "none",
                bg: decodeURI(router.asPath).includes("#" + anchor)
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(255, 255, 255, 0.1)",
              }}
            >
              <Icon as={FaMarkdown} /> <Text>{anchor}.md</Text>
            </Link>
          ))}
        </SideMenu>

        {router.asPath.includes("#") && (
          <ContentFile
            filename={`${decodeURI(router.asPath.split("#")[1])}.md`}
          >
            <Flex whiteSpace="pre" gap={8} px={4}>
              <Flex direction="column">
                {markdown
                  ?.split("\n")
                  .slice(1)
                  .map((_, index) => (
                    <Text key={index}>{index + 1}</Text>
                  ))}
              </Flex>
              <article
                dangerouslySetInnerHTML={{ __html: router.isReady && markdown }}
              />

              {!markdown && <Spinner />}
            </Flex>
          </ContentFile>
        )}

        {!router.asPath.includes("#") && (
          <Flex direction="column" flex="1" textAlign="center">
            <Heading color="white" mt={{ base: 16, lg: 48 }}>
              Obrigado por visitar meu site =)
            </Heading>
            <Text color="text" mt={8}>
              Para saber mais sobre mim, clique em um dos arquivos ao lado.
            </Text>
          </Flex>
        )}
      </Flex>
    </PageLayout>
  );
}
