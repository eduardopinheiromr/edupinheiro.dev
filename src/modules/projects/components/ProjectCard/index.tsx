import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

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
        #{index + 1}{" "}
        <Text as="span" color="text">
          {name}
        </Text>
      </Heading>

      <Flex direction="column" gap={4} rounded="lg" shadow="xl">
        {/* <Flex
          h="168px"
          w="300px"
          bgPosition="top"
          backgroundImage={image}
          backgroundRepeat="no-repeat"
          bgSize="cover"
          backgroundPosition="top"
        /> */}
        <Image
          height="168px"
          width="300px"
          objectFit="cover"
          src={image}
          alt={name}
        />
        <Flex direction="column" gap={4} px={2} py={4}>
          <Text color="text" fontSize="13px" minH="120px">
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
