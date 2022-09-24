import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function ProjectCard({
  index,
  name,
  image,
  description,
  technologies,
  link,
  onViewProject,
}) {
  return (
    <Flex
      id={name}
      direction="column"
      gap={4}
      maxW="300px"
      transition=".3s"
      _hover={{
        transform: "scale(1.025)",
        "& > a": {
          animation: "pulseGradient 3s infinite",
        },
      }}
    >
      <Heading
        cursor="pointer"
        fontSize="16px"
        color="blue"
        onClick={onViewProject}
      >
        Projeto {index + 1}{" "}
        <Text as="span" color="text">
          {"//"} {name}
        </Text>
      </Heading>

      <Flex direction="column" gap={4} rounded="lg" shadow="xl">
        <Image src={image} alt={name} />
        <Flex direction="column" gap={4} p={4}>
          <Text color="text" fontSize="14px">
            {description}
          </Text>
          <Button variant="primary" onClick={onViewProject}>
            ver projeto
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
