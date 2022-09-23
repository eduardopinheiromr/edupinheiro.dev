import { Text } from "@chakra-ui/react";
import { Link } from "../Link";

export default function Variable({ name, link }) {
  return (
    <Text>
      <Text as="span" color="blue">
        const
      </Text>{" "}
      <Text as="span" color="constant">
        {name}
      </Text>{" "}
      <Text as="span" color="white">
        =
      </Text>{" "}
      <Link href={link} target="_blank">
        <Text
          as="span"
          color="string"
          _hover={{ borderBottom: "1px solid", filter: "brightness(.7)" }}
        >
          &quot;{link.replace("https://", "")}&quot;
        </Text>
      </Link>
    </Text>
  );
}
