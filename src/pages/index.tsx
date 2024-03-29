import { Flex, Stack, Text } from "@chakra-ui/react";
import PageLayout from "@modules/shared/components/PageLayout";
import { socialLinks } from "@modules/about/constants/socialLinks";
import Variable from "@modules/shared/components/Variable";
import Image from "next/image";
import profilePicture from "@assets/images/profile.webp";

export default function HomePage() {
  return (
    <PageLayout animation="fadeIn 3s" position="relative" display="flex">
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        mx="auto"
        p={{ base: 4, md: 0 }}
        gap={{ base: 4, sm: 8 }}
      >
        <Flex
          direction="column"
          px={{ base: 0, md: 8 }}
          h={{ base: undefined, md: "full" }}
        >
          <Text color="white" pl={1} fontSize="xl">
            Olá, me chamo
          </Text>
          <Text
            lineHeight={1}
            color="orange"
            fontSize={{ base: "2xl", sm: "5xl", md: "6xl" }}
            animation="pulseOnlyGradient 15s infinite"
          >
            Eduardo Pinheiro
          </Text>

          <Text
            mt={2}
            lineHeight={1}
            color="blue"
            fontSize={{ base: "lg", md: "3xl" }}
          >
            &gt; Desenvolvedor Front-end
          </Text>

          <Stack
            mt={8}
            fontSize={{ base: 12, sm: 14, xl: 18 }}
            whiteSpace={{ base: "unset", md: "nowrap" }}
            gap={4}
          >
            <Variable name="linkedin" link={socialLinks.linkedin.href} />
            <Variable name="github" link={socialLinks.github.href} />
            <Variable name="email" link={socialLinks.email.href} />
          </Stack>
        </Flex>
        <Flex
          top={0}
          right={0}
          maxW="60%"
          mx="auto"
          justify="center"
          position="relative"
        >
          <Flex>
            <Flex
              position="absolute"
              w="30vw"
              h="30vw"
              maxW="300px"
              maxH="300px"
              bg="#43D9AD"
              rounded="full"
              left="0"
              top="0"
              animation="translateRotatingToRight 10s linear infinite"
              filter="blur(80px)"
            />
          </Flex>
          <Flex
            position="absolute"
            w="30vw"
            h="30vw"
            maxW="300px"
            maxH="300px"
            bg="#4D5BCE"
            rounded="full"
            right="0"
            bottom="0"
            animation="translateRotatingToRight 10s linear infinite"
            filter="blur(80px)"
          />
          <Flex maxW="80%" shadow="0px 10px 100px black" rounded="full">
            <Image
              placeholder="blur"
              draggable={false}
              alt="Foto de perfil de Eduardo Pinheiro"
              src={profilePicture}
              objectFit="contain"
              height="400px"
              width="400px"
            />
          </Flex>
        </Flex>
      </Flex>
    </PageLayout>
  );
}
