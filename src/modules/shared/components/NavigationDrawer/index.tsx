import {
  Drawer,
  DrawerBody,
  IconButton,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Icon,
  Text,
  Stack,
  Avatar,
  Divider,
} from "@chakra-ui/react";
// import { navigation } from "@modules/shared/constants/navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { FiLogOut, FiMenu } from "react-icons/fi";

export default function NavigationDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const btnRef = useRef(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        bg="none"
        _hover={{ bg: "none" }}
        shadow="none"
        color="darkgray"
        fontSize="28px"
        onClick={onOpen}
        aria-label="Abrir menu de navegação"
        icon={<FiMenu />}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent roundedRight="70px" bg="light" color="darkgray">
          <DrawerCloseButton top="57px" right="30px" fontSize="18px" />

          <DrawerBody py={14}>
            <Stack mb={8}>
              <Avatar name="Fulano de Tal" bg="purple" color="white" />
              <Text color="purple" fontWeight="bold" fontSize="18px">
                Olá Fulano,
              </Text>
            </Stack>
            <Divider maxW="20px" mb={8} />
            <Stack gap={4}>
              {/* {navigation.map(({ icon, label, path }) => (
                <Link passHref href={path} key={path}>
                  <Flex
                    as="a"
                    onClick={onClose}
                    align="center"
                    gap={4}
                    fontSize="18px"
                    fontWeight="bold"
                    color={router.pathname === path ? "purple" : "darkgray"}
                  >
                    <Icon as={icon} />
                    <Text>{label}</Text>
                  </Flex>
                </Link>
              ))} */}
            </Stack>
            <Divider maxW="20px" my={8} />

            <Flex
              as="a"
              onClick={onClose}
              align="center"
              mt="70px"
              gap={4}
              fontSize="18px"
              fontWeight="bold"
            >
              <Icon as={FiLogOut} />
              <Text>Sair</Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
