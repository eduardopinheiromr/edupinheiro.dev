import PageLayout from "@modules/shared/components/PageLayout";
import { Flex, Heading, Icon, Skeleton, Text } from "@chakra-ui/react";
import { FaMarkdown } from "react-icons/fa";
import { GetStaticProps } from "next";

import { useRouter } from "next/router";
import { Link } from "@modules/shared/components/Link";
import { useEffect, useState } from "react";
import SideMenu from "@modules/shared/components/SideMenu";
import { anchors } from "@modules/shared/constants/anchors";
import dynamic from "next/dynamic";
import { useTabStore } from "@modules/shared/stores/useTabStore";

const ContentFile = dynamic(
  () => import("@modules/shared/components/ContentFile"),
  { ssr: false }
);
const ThankYou = dynamic(() => import("@modules/about/components/ThankYou"), {
  ssr: false,
});

export default function AboutMe({ content }) {
  const { tabsOpened, set } = useTabStore();

  const router = useRouter();

  const decodedURI = decodeURI(router.asPath.split("#")[1]);
  const anchorName = decodedURI === "undefined" ? undefined : decodedURI;

  useEffect(() => {
    set({ tabsOpened: ["bio"] });
  }, [router.isReady]);

  return (
    <PageLayout h="full">
      <Flex flex="1" direction={{ base: "column", md: "row" }}>
        <SideMenu label="dados-pessoais">
          {anchors.map(anchor => (
            <Link
              display="flex"
              onClick={() => {
                const hasTab = tabsOpened.includes(anchor);
                set({
                  tabsOpened: hasTab ? tabsOpened : [...tabsOpened, anchor],
                });
              }}
              key={anchor}
              href={`#${anchor}`}
              transition=".3s"
              bg={
                anchorName === anchor
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent"
              }
              color={anchorName === anchor ? "white" : "text"}
              px={4}
              py={2}
              alignItems="center"
              gap={2}
              _hover={{
                textDecor: "none",
                bg:
                  anchorName === anchor
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(255, 255, 255, 0.1)",
              }}
            >
              <Icon as={FaMarkdown} /> <Text>{anchor}.md</Text>
            </Link>
          ))}
        </SideMenu>

        {anchorName && (
          <ContentFile>
            <Flex
              whiteSpace={{ base: "pre-line", md: "pre" }}
              gap={{ base: 2, md: 8 }}
              px={{ base: 1, md: 4 }}
              fontSize={{ base: "14px", md: "18px" }}
            >
              <Flex direction="column">
                {content[anchorName]
                  ?.split("\n")
                  .slice(1)
                  .map((_, index) => (
                    <Text key={index}>{index + 1}</Text>
                  ))}
              </Flex>
              <Flex
                as="article"
                dangerouslySetInnerHTML={{
                  __html: content[anchorName],
                }}
              />
            </Flex>
          </ContentFile>
        )}
        {!anchorName && <ThankYou />}
      </Flex>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const mdFiles = ["bio", "educação", "experiência", "habilidades"];
  const markdownPaths = mdFiles.map(
    name => `${process.env.NEXT_PUBLIC_CONTENT_FOLDER}${name}.md`
  );

  const content = await Promise.all(
    markdownPaths.map(async (path, index) => {
      const res = await fetch(path);
      const text = await res.text();

      return { [mdFiles[index]]: text };
    })
  ).then(content => content.reduce((acc, curr) => ({ ...acc, ...curr }), {}));
  // transform content in object

  return {
    props: {
      content,
    },
  };
};
