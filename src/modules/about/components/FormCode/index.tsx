import { Flex, Text } from "@chakra-ui/react";
import Variable from "@modules/shared/components/Variable";
import { useFormContext } from "react-hook-form";

const TextLikeObjectAttribute = ({ variableName, value }) => {
  return (
    <Text color="text">
      <Text as="span" color="blue">
        {variableName}
      </Text>
      :{" "}
      <Text as="span" color="orange">
        &quot;{value}&quot;,
      </Text>
    </Text>
  );
};

export default function FormCode() {
  const methods = useFormContext();
  return (
    <Flex w={{ base: "full", lg: "50%" }}>
      <Flex
        direction="column"
        p={8}
        pr={0}
        bg="black"
        color="white"
        fontSize="14px"
      >
        <Text>1</Text>
        <Text>2</Text>
        <Flex h={4} />
        <Text>4</Text>
        <Text>5</Text>
        <Text>6</Text>
        <Text>7</Text>
        <Text>8</Text>
        <Text>9</Text>
        <Flex h={4} />
        <Text>10</Text>
        <Text>11</Text>
        <Text>12</Text>
      </Flex>
      <Flex
        flex="1"
        direction="column"
        p={8}
        bg="black"
        fontWeight="bold "
        fontSize="14px"
      >
        <Variable
          name="button"
          isLink={false}
          value={
            <Text color="blue" whiteSpace="unset">
              document.querySelector(
              <Text as="span" color="orange">
                {"'"}#submitButton{"'"}
              </Text>
              );
            </Text>
          }
        />
        <Text color="pink" mt={4}>
          const{" "}
          <Text as="span" color="blue">
            message
          </Text>{" "}
          ={" "}
          <Text as="span" color="text">
            &#123;
          </Text>
        </Text>
        <Flex direction="column" pl={8}>
          <TextLikeObjectAttribute
            variableName="name"
            value={methods.watch("name")}
          />
          <TextLikeObjectAttribute
            variableName="email"
            value={methods.watch("email")}
          />
          <TextLikeObjectAttribute
            variableName="message"
            value={methods.watch("message")}
          />
          <TextLikeObjectAttribute
            variableName="date"
            value={new Date().toLocaleDateString("pt-BR")}
          />
        </Flex>
        <Text as="span" color="text" fontWeight="bold">
          &#125;;
        </Text>
        <Text color="blue" whiteSpace="unset" mt={4}>
          button.addEventListener
          <Text as="span" color="text">
            (
            <Text as="span" color="orange">
              {"'"}click{"'"}
            </Text>
            , () =&gt; &#123;
          </Text>
        </Text>
        <Text pl={8} color="blue" whiteSpace="unset">
          form.send(message)
        </Text>
        <Text color="text" whiteSpace="unset">
          &#125;)
        </Text>
      </Flex>
    </Flex>
  );
}
