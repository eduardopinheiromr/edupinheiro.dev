import { Button, Icon } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";

export default function MobileMenu({ isOpen, onOpen, onClose }) {
  return (
    <Button
      onClick={isOpen ? onClose : onOpen}
      h="52px"
      roundedRight="md"
      roundedLeft="none"
      display={{ base: "flex", lg: "none" }}
      _hover={{ bg: "rgba(255,255,255,0.1)" }}
      fontSize="22px"
    >
      <Icon as={HiMenu} />
    </Button>
  );
}
