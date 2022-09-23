import { Flex, Icon, Text } from "@chakra-ui/react";
import { useTabStore } from "@modules/shared/stores/useTabStore";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

export default function ContentFile({ children }) {
  const router = useRouter();
  const { tabsOpened, set } = useTabStore();

  const currentTab = decodeURI(router.asPath.split("#")[1]);

  useEffect(() => {
    if (router.asPath.includes("#") && tabsOpened.length === 0) {
      set({ tabsOpened: [currentTab] });
    }
  }, [router.asPath]);

  const handleCloseTab = async (closedTab: string) => {
    const filteredTabs = tabsOpened.filter(tab => tab !== closedTab);
    const newAnchor = filteredTabs.length > 0 ? `#${filteredTabs.at(-1)}` : "";

    set({ tabsOpened: filteredTabs });
    await router.push(router.pathname + newAnchor);
  };

  // const handleOpenTab = async (openedTab: string) => {

  return (
    <Flex
      direction="column"
      justify="flex-start"
      borderRight="1px solid"
      borderColor="blackline"
      flex="1"
    >
      <Flex
        direction="column"
        borderRight="1px solid"
        borderColor="blackline"
        w="fit-content"
      >
        <Flex
          overflowX="scroll"
          maxW="100vw"
          css={{
            "&::-webkit-scrollbar": {
              height: 1,
            },
          }}
        >
          {tabsOpened.map(tab => (
            <Flex
              key={tab}
              cursor="pointer"
              align="center"
              color="white"
              justify="space-between"
              bg={currentTab === tab && "#222"}
              // animation="fadeIn .3s"
              _hover={{ bg: "rgba(255,255,255,0.1)" }}
            >
              <Text
                onClick={() => router.push(router.pathname + "#" + tab)}
                transition=".3s"
                px={4}
                py={2}
              >
                {tab}
              </Text>
              <Flex
                as="button"
                onClick={() => handleCloseTab(tab)}
                align="center"
                justify="center"
                transition=".3s"
                _hover={{ bg: "#111" }}
                h="full"
                w="40px"
              >
                <Icon as={IoMdClose} />
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex
        borderWidth="1px 0 0 0"
        borderColor="blackline"
        overflowY="scroll"
        p={{ base: 1, md: 4 }}
        color="text"
        flex="1"
        // maxW={{ base: "calc(100vw - 42px)", md: "calc(100vw - 173px)" }}
        css={{
          wordWrap: "break-word",
          "&::-webkit-scrollbar": {
            height: 2,
          },
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
}
