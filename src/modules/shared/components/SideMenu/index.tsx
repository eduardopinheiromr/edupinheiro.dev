import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

export default function SideMenu({ label, children }) {
  const [isSideMenuOpen, setSideMenuOpen] = useState(true);

  return (
    <Flex
      direction="column"
      w="full"
      maxW={{ base: "full", lg: "25%" }}
      // minW={{ base: "60px", md: "195.02" }}
    >
      <Flex
        direction="column"
        justify="flex-start"
        borderRight="1px solid"
        borderTop={{ base: "1px solid", md: "none" }}
        borderColor="blackline"
        h="full"
      >
        <Flex
          borderBottom="1px solid"
          borderColor="blackline"
          w="full"
          transition=".3s"
          color="white"
          align="center"
          px={4}
          py={2}
          gap={2}
          onClick={() => setSideMenuOpen(!isSideMenuOpen)}
          as="button"

          // maxW={{ base: "60px", md: "195.02" }}
          // display={{ base: "none", md: "flex" }}
        >
          <Icon
            transition=".3s"
            transform={isSideMenuOpen ? "rotate(90deg)" : "none"}
            as={ChevronRightIcon}
          />
          <Icon as={isSideMenuOpen ? FaFolderOpen : FaFolder} />
          <Text whiteSpace="nowrap">{label}</Text>
        </Flex>
        <Flex
          direction="column"
          // borderBottom="1px solid"
          borderColor="blackline"
          animation={"growHeight .3s ease-in-out"}
          transition=".3s"
          // hidden={!isSideMenuOpen}
          opacity={isSideMenuOpen ? 1 : 0}
          height={isSideMenuOpen ? "auto" : 0}
          overflowY="auto"
          maxH="78vh"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
