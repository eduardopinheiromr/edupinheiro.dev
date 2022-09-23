import NextLink, { LinkProps } from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

type Props = ChakraLinkProps & LinkProps;

export function Link({ href, ...props }: Props) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...props}>{props.children}</ChakraLink>
    </NextLink>
  );
}
