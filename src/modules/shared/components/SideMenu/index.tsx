import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { VscFiles } from "react-icons/vsc";

export default function SideMenu({ label, children }) {
  const [isFilesOpened, setFilesOpened] = useState(false);

  return (
    <Flex direction="column">
      <Flex
        direction="column"
        justify="flex-start"
        borderRight="1px solid"
        borderColor="blackline"
      >
        <IconButton
          w="40px"
          rounded="none"
          aria-label="Abrir navegação"
          icon={<VscFiles />}
          bg={isFilesOpened && "rgba(255, 255, 255, 0.2)"}
          onClick={() => setFilesOpened(!isFilesOpened)}
          color="white"
          fontSize="24px"
          display={{ base: "flex", md: "none" }}
        />
      </Flex>
      <Flex
        direction="column"
        justify="flex-start"
        borderRight="1px solid"
        borderTop={{ base: "1px solid", md: "none" }}
        borderColor="blackline"
        h="full"
      >
        <Flex
          direction="column"
          borderBottom="1px solid"
          borderColor="blackline"
          w="full"
          transition=".3s"
          maxW={{ base: "60px", md: "179px" }}
          display={{ base: "none", md: "flex" }}
        >
          <Text color="white" px={4} py={2}>
            {label}
          </Text>
        </Flex>
        <Flex
          display={isFilesOpened ? "flex" : { base: "none", md: "flex" }}
          direction="column"
          borderBottom="1px solid"
          borderColor="blackline"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
