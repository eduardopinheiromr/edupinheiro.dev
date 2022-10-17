import PageLayout from "@modules/shared/components/PageLayout";
import { Flex } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useEffect } from "react";
import SideMenu from "@modules/shared/components/SideMenu";
import dynamic from "next/dynamic";
import { useTabStore } from "@modules/shared/stores/useTabStore";
import { content } from "@modules/about/content";

const AboutSideMenu = dynamic(
  () => import("@modules/about/components/AboutSideMenu"),
  {
    ssr: false,
  }
);
const ContentFile = dynamic(
  () => import("@modules/shared/components/ContentFile"),
  { ssr: false }
);
const ThankYou = dynamic(() => import("@modules/about/components/ThankYou"), {
  ssr: false,
});

export default function AboutMe() {
  const { set } = useTabStore();

  const router = useRouter();

  const decodedURI = decodeURI(router.asPath.split("#")[1]);
  const anchorName = decodedURI === "undefined" ? undefined : decodedURI;

  useEffect(() => {
    set({ tabsOpened: ["bio"] });
  }, [router.isReady]);

  return (
    <PageLayout h="full">
      <Flex flex="1" direction={{ base: "column", lg: "row" }} w="100%">
        <SideMenu label="dados-pessoais">
          <AboutSideMenu />
        </SideMenu>

        {anchorName && (
          <ContentFile>
            <Flex maxW="100vw">{content[anchorName]?.render()}</Flex>
          </ContentFile>
        )}

        {!anchorName && <ThankYou />}
      </Flex>
    </PageLayout>
  );
}
