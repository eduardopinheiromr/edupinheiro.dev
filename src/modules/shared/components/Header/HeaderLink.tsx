import { Text } from "@chakra-ui/react";
import { Link } from "../Link";

type Props = {
  isMobileMenuOpen: boolean;
  onClose: () => void;
  item: { path: string; label: string };
  isMobile?: boolean;
  isSelected: boolean;
};

export default function HeaderLink({
  isMobileMenuOpen,
  isSelected,
  onClose,
  item,
  isMobile,
}: Props) {
  return (
    <Link
      {...(isMobile && {
        opacity: isMobileMenuOpen ? 1 : 0,
        height: isMobileMenuOpen ? 52 : "0px",
        animation: isMobileMenuOpen
          ? "growHeight .3s ease-in-out"
          : "shrinkHeight .3s ease-in-out",
      })}
      whiteSpace="nowrap"
      w="full"
      href={item.path}
      display="flex"
      alignItems="center"
      h="52px"
      borderRight="1px solid"
      borderColor="blackline"
      bg={isSelected ? "rgba(255,255,255, 0.15)" : "none"}
      _hover={{
        textDecor: "none",
        bg: "rgba(255,255,255, 0.1)",
        color: "white",
      }}
      color={isSelected ? "white" : "text"}
      onClick={onClose}
    >
      <Text px={4} lineHeight={isMobile && !isMobileMenuOpen && 0}>
        _{item.label}
      </Text>
    </Link>
  );
}
