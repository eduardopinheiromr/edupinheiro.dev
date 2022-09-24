import { Avatar, Flex, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import Brand from "../Brand";
import NavigationDrawer from "../NavigationDrawer";
import { navigation } from "@modules/shared/constants/navigation";
import { Link } from "../Link";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import HeaderLink from "./HeaderLink";

export default function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isDesktop] = useMediaQuery("(min-width: 992px)");

  const onOpen = () => setMobileMenuOpen(true);

  const onClose = () => setMobileMenuOpen(false);

  isDesktop && isMobileMenuOpen && onClose();

  return (
    <div>
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
              <HeaderLink
                item={item}
                isSelected={
                  router.asPath.split("#")[0] === item.path.split("#")[0]
                }
                key={item.path}
                isMobileMenuOpen={isMobileMenuOpen}
                onClose={onClose}
              />
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
      {!isDesktop && (
        <Flex
          direction="column"
          borderBottom={isMobileMenuOpen && "1px solid"}
          borderColor="blackline"
          transition=".3s"
          height={isMobileMenuOpen ? 52 * (navigation.length + 1) : "0px"}
        >
          {[...navigation, { label: "entre em contato", path: "/contato" }].map(
            (item, index) => (
              <HeaderLink
                isMobile
                item={item}
                isSelected={
                  router.asPath.split("#")[0] === item.path.split("#")[0]
                }
                key={item.path}
                isMobileMenuOpen={isMobileMenuOpen}
                onClose={onClose}
              />
            )
          )}
        </Flex>
      )}
    </div>
  );
}
