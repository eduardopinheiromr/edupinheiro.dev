import { Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoMdClose } from "react-icons/io";

export default function ContentFile({ filename, children }) {
  const router = useRouter();
  return (
    <Flex
      direction="column"
      justify="flex-start"
      borderRight="1px solid"
      borderColor="blackline"
      flex="1"
      animation="fadeIn .5s"
    >
      <Flex
        direction="column"
        borderRight="1px solid"
        borderColor="blackline"
        w="fit-content"
      >
        <Flex
          cursor="pointer"
          align="center"
          color="white"
          justify="space-between"
        >
          <Text
            transition=".3s"
            px={4}
            py={2}
            _hover={{ bg: "rgba(255,255,255,0.1)" }}
          >
            {filename}
          </Text>
          <Flex
            as="button"
            onClick={() => router.replace(router.asPath.split("#")[0])}
            align="center"
            justify="center"
            transition=".3s"
            _hover={{ bg: "rgba(255,255,255,0.1)" }}
            h="full"
            w="40px"
          >
            <Icon as={IoMdClose} />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        borderWidth="1px 0 0 0"
        borderColor="blackline"
        overflowY="scroll"
        p={4}
        color="text"
        flex="1"
      >
        {children}
      </Flex>
    </Flex>
  );
}
