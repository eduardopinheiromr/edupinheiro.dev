import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Image,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  Badge,
  Button,
} from "@chakra-ui/react";
import { Link } from "@modules/shared/components/Link";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedProject: Project;
};

export default function ProjectModal({
  isOpen,
  onClose,
  selectedProject,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent bg="darkblue">
        <ModalHeader
          color="blue"
          textAlign="center"
          fontSize="32px"
          animation="pulseOnlyGradient 7s infinite"
        >
          {selectedProject?.name}
        </ModalHeader>
        <ModalCloseButton color="text" />
        <ModalBody>
          <Flex direction="column" gap={8} pb={4}>
            <Image
              src={selectedProject?.imageString}
              alt={selectedProject?.name}
              objectFit="contain"
              width="100%"
              height="400px"
              loading="lazy"
            />
            <Text color="white">{selectedProject?.description}</Text>

            <Flex flexWrap="wrap" gap={4}>
              {selectedProject?.links?.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  _hover={{ textDecor: "none" }}
                >
                  <Button
                    color="white"
                    bg="blue"
                    py={2}
                    px={4}
                    borderRadius="lg"
                    cursor="pointer"
                    _hover={{
                      filter: "brightness(1.3)",
                    }}
                  >
                    {name}
                  </Button>
                </Link>
              ))}
            </Flex>
            <Text color="white" fontSize="32px" fontWeight="bold">
              # Tecnologias
            </Text>
            <Flex flexWrap="wrap" gap={4}>
              {selectedProject?.technologies.map(technology => (
                <Badge
                  key={technology}
                  color="blue"
                  bg="black"
                  p={4}
                  rounded="lg"
                  cursor="pointer"
                  transition=".5s"
                  _hover={{
                    bg: "darkblue",
                    animation: "pulseOnlyGradient 3s infinite",
                    shadow: "md",
                  }}
                >
                  {technology}
                </Badge>
              ))}
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
