import { Box, BoxProps, Container, Flex } from "@chakra-ui/react";
import Footer from "../Footer";
import Header from "../Header";
import PageTags from "../PageTags";
import { navigation } from "@modules/shared/constants/navigation";
import { useRouter } from "next/router";

type Props = BoxProps;

export default function PageLayout({ children, ...props }: Props) {
  const router = useRouter();
  const title = [...navigation, { label: "contato", path: "/contato" }].find(
    n => n.path.split("#")[0] === router.pathname
  );

  return (
    <>
      <PageTags title={"ep.dev_" + title?.label} />
      <Flex
        bg="black"
        h="full"
        minH="100vh"
        p={{ base: 0, lg: 4, xl: 8 }}
        position="relative"
        overflow="hidden"
      >
        <Container
          zIndex={99}
          shadow="xl"
          px={0}
          bg="darkblue"
          // maxH={{ base: "100vh", md: "calc(100vh - 64px)" }}
          rounded="md"
          border="1px solid #1E2D3D"
          display="flex"
          flexDirection="column"
          justifyContent={{ base: "flex-start", md: "space-between" }}
          overflow="hidden"
          // maxH="100vh"
          // h="100vh"
          position="relative"
        >
          <Header />
          <Flex
            as="main"
            animation="fadeIn .5s"
            position="relative"
            // minH="calc(100vh - 53px - 83px)"
            // flex="1"
            // h={{
            //   base: "calc(100% - 82px - 53px - 100px)",
            //   md: "calc(100vh - 64px)",
            // }}
            {...props}
          >
            {children}
          </Flex>
          <Footer />
        </Container>
      </Flex>
    </>
  );
}
