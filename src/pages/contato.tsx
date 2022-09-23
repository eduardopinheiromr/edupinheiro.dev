import { Flex, Icon, Text } from "@chakra-ui/react";
import { Link } from "@modules/shared/components/Link";
import PageLayout from "@modules/shared/components/PageLayout";
import SideMenu from "@modules/shared/components/SideMenu";
import { anchors } from "@modules/shared/constants/anchors";
import { useRouter } from "next/router";
import { FaMarkdown } from "react-icons/fa";

export default function ContactPage() {
  const router = useRouter();
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
      </Flex>
    </PageLayout>
  );
}
