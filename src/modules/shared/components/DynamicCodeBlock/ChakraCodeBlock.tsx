import CustomCodeBlock from "./CustomCodeBlock";
import { CodeBlockProps } from ".";
import { Flex, FlexProps } from "@chakra-ui/react";

export const ChakraCodeBlock = ({
  snippet,
  language,
  ...props
}: CodeBlockProps & FlexProps) => {
  const codeBlockProps = { snippet, language };
  return (
    <Flex
      {...props}
      overflowX="scroll"
      css={`
        &::-webkit-scrollbar {
          height: 2px;
        }
      `}
    >
      <CustomCodeBlock {...codeBlockProps} />
    </Flex>
  );
};
