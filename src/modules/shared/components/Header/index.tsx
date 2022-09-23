import { Avatar, Flex, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import Brand from "../Brand";
import NavigationDrawer from "../NavigationDrawer";
import { navigation } from "@modules/shared/constants/navigation";
import { Link } from "../Link";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isDesktop] = useMediaQuery("(min-width: 992px)");

  const onOpen = () => setMobileMenuOpen(true);

  const onClose = () => setMobileMenuOpen(false);

  isDesktop && isMobileMenuOpen && onClose();

  return (
    <>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        minH="52px"
        borderBottom="1px solid"
        borderColor="blackline"
        color="text"
      >
        <Flex>
          <Flex
            w="30vw"
            minW="200px"
            maxW="300px"
            borderRight={{ base: "none", lg: "1px solid #1E2D3D" }}
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
          <Flex display={{ base: "none", lg: "flex" }}>
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
          display={{ base: "none", lg: "flex" }}
          href="/contato"
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
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </Flex>
      <Flex
        direction="column"
        position="relative"
        borderBottom={isMobileMenuOpen && "1px solid"}
        borderColor="blackline"
        transition=".3s"
        height={isMobileMenuOpen ? 52 * navigation.length : "0px"}
      >
        {navigation.map((item, index) => (
          <Link
            opacity={isMobileMenuOpen ? 1 : 0}
            height={isMobileMenuOpen ? 52 : "0px"}
            animation={
              isMobileMenuOpen
                ? "growHeight 0.3s ease-in-out"
                : "shrinkHeight 0.3s ease-in-out"
            }
            w="full"
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
            onClick={onClose}
          >
            <Text px={4}>_{item.label}</Text>
          </Link>
        ))}
      </Flex>
    </>
  );
}
