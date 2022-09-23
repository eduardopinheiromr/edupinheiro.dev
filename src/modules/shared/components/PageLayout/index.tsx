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
    <Flex
      bg="black"
      minH="100vh"
      p={{ base: 0, md: "32px" }}
      position="relative"
      overflow="hidden"
    >
      <PageTags title={"ep.dev_" + title?.label} description={title?.label} />
      <Container
        zIndex={99}
        shadow="xl"
        px={0}
        bg="darkblue"
        minH={{ base: "100vh", md: "calc(100vh - 64px)" }}
        rounded="md"
        border="1px solid #1E2D3D"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        overflow="hidden"
      >
        <Header />
        <Box
          as="main"
          animation="fadeIn .5s"
          position="relative"
          display="flex"
          flex="1"
          {...props}
        >
          {children}
        </Box>
        <Footer />
      </Container>
    </Flex>
  );
}
