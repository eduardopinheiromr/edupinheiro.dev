import { Avatar, Flex, Text } from "@chakra-ui/react";
import Brand from "../Brand";
import NavigationDrawer from "../NavigationDrawer";
import { navigation } from "@modules/shared/constants/navigation";
import { Link } from "../Link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log();
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      minH="52px"
      borderBottom="1px solid"
      borderColor="blackline"
      color="text"
      display={{ base: "none", lg: "flex" }}
    >
      <Flex>
        <Flex
          w="30vw"
          maxW="300px"
          borderRight="1px solid"
          borderColor="blackline"
          h="52px"
          align="center"
        >
          <Link
            href="/"
            display="flex"
            alignItems="center"
            h="52px"
            w="full"
            _hover={{
              textDecor: "none",
              bg: "rgba(255,255,255, 0.1)",
              color: "white",
            }}
          >
            <Text pl={4} w="full">
              eduardo-pinheiro
            </Text>
          </Link>
        </Flex>
        <Flex>
          {navigation.map(item => (
            <Link
              key={item.label}
              href={item.path}
              display="flex"
              alignItems="center"
              h="52px"
              borderRight="1px solid"
              borderColor="blackline"
              bg={
                router.asPath.split("#")[0] === item.path.split("#")[0]
                  ? "rgba(255,255,255, 0.15)"
                  : "none"
              }
              _hover={{
                textDecor: "none",
                bg: "rgba(255,255,255, 0.1)",
                color: "white",
              }}
              color={
                router.asPath.split("#")[0] === item.path.split("#")[0]
                  ? "white"
                  : "text"
              }
            >
              <Text px={4}>_{item.label}</Text>
            </Link>
          ))}
        </Flex>
      </Flex>
      <Link
        href="/contato"
        display="flex"
        alignItems="center"
        h="52px"
        borderLeft="1px solid"
        borderColor="blackline"
        bg={
          router.asPath.split("#")[0] === "/contato".split("#")[0]
            ? "rgba(255,255,255, 0.15)"
            : "none"
        }
        _hover={{
          textDecor: "none",
          bg: "rgba(255,255,255, 0.1)",
          color: "white",
        }}
        color={router.asPath.split("#")[0] === "/contato" ? "white" : "text"}
      >
        <Text px={4}>_contato</Text>
      </Link>
    </Flex>
  );
}
