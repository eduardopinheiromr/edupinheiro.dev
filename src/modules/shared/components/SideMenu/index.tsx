import { Flex, Text } from "@chakra-ui/react";

export default function SideMenu({ label, children }) {
  return (
    <Flex
      direction="column"
      justify="flex-start"
      borderRight="1px solid"
      borderColor="blackline"
      minW="179px"
    >
      <Flex direction="column" borderBottom="1px solid" borderColor="blackline">
        <Text color="white" px={4} py={2}>
          {label}
        </Text>
      </Flex>
      <Flex direction="column" borderBottom="1px solid" borderColor="blackline">
        {children}
      </Flex>
    </Flex>
  );
}
