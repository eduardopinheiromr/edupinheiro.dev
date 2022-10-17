import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  children: React.ReactNode;
  extraChildren?: React.ReactNode;
};

export default function ContentLayout({
  title,
  children,
  extraChildren,
}: Props) {
  return (
    <Stack gap={4} p={4} w="100%" position="relative">
      <div key={window.location.hash} style={{ animation: "blur .7s" }}>
        <Heading
          color="blue"
          animation="pulseOnlyGradient 10s infinite"
          fontSize={{ base: 28, md: 32, lg: 36 }}
        >
          {title}
        </Heading>
      </div>
      <Text>{children}</Text>
      {extraChildren}
    </Stack>
  );
}
