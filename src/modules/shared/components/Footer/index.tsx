import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { socialLinks } from "@modules/about/constants/socialLinks";
import { navigation } from "@modules/shared/constants/navigation";
import { Link } from "@modules/shared/components/Link";

export default function Footer() {
  const icons = Object.values(socialLinks).slice(1);
  const names = Object.keys(socialLinks).slice(1);

  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      minH="40px"
      borderTop="1px solid"
      borderColor="blackline"
      color="text"
      direction={{ base: "column", sm: "row" }}
      position={{ base: "fixed", md: "unset" }}
      bottom={0}
      w="full"
      bg="darkblue"
    >
      <Flex w="full" display={{ base: "none", md: "flex" }}>
        <Flex
          h="40px"
          px={4}
          borderRight="1px solid"
          borderColor="blackline"
          align="center"
        >
          <Text fontSize={{ sm: 14, md: 18 }}>me encontre no:</Text>
        </Flex>
        <Flex align="center">
          {icons.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              _hover={{ color: "white", bg: "rgba(255,255,255,0.1)" }}
              transition=".3s"
              h="40px"
              px={4}
              borderRight={"1px solid"}
              borderColor="blackline"
              display="flex"
              alignItems="center"
              aria-label={names[index].toUpperCase()}
              rel="noopener noreferrer"
            >
              <IconButton aria-label={names[index]} icon={<item.icon />} />
            </Link>
          ))}
        </Flex>
      </Flex>
      <Flex
        borderTop={{ base: "1px solid", sm: "none" }}
        borderColor="blackline"
        w={{ base: "full", sm: "unset" }}
        justify={{ base: "space-between", md: "center" }}
      >
        <Flex display={{ base: "flex", md: "none" }} align="center">
          {icons.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              _hover={{ color: "white", bg: "rgba(255,255,255,0.1)" }}
              transition=".3s"
              h="40px"
              px={4}
              borderRight={"1px solid"}
              borderColor="blackline"
              display="flex"
              alignItems="center"
              aria-label={names[index].toUpperCase()}
            >
              <IconButton aria-label={names[index]} icon={<item.icon />} />
            </Link>
          ))}
        </Flex>
        <Link
          key={socialLinks.github.href}
          href={socialLinks.github.href}
          target="_blank"
        >
          <Flex
            _hover={{ color: "white", bg: "rgba(255,255,255,0.1)" }}
            transition=".3s"
            h="40px"
            px={4}
            gap={2}
            borderLeft={{ base: "none", md: "1px solid #1E2D3D" }}
            align="center"
          >
            <Text>@{socialLinks.github.href.split("/").pop()}</Text>
            <Icon as={socialLinks.github.icon} />
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
}
