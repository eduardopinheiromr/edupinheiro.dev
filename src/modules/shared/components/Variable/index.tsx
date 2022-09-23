import { Text } from "@chakra-ui/react";
import { Link } from "../Link";

type Props = {
  name: string;
  isLink?: boolean;
  link?: string;
  value?: string | JSX.Element;
};

export default function Variable({ name, isLink, value, link }: Props) {
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
      {isLink ||
        (isLink === undefined && (
          <Link href={link} target="_blank">
            <Text
              as="span"
              color="string"
              _hover={{ borderBottom: "1px solid", filter: "brightness(.7)" }}
            >
              &quot;{link.replace("https://", "")}&quot;
            </Text>
          </Link>
        ))}
      {!isLink && value}
    </Text>
  );
}
