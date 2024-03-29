import { Button, Flex, Icon, Text, useToast } from "@chakra-ui/react";
import FormCode from "@modules/about/components/FormCode";
import CustomInput from "@modules/contact/components/CustomInput";
import CustomTextarea from "@modules/contact/components/CustomTextarea";
import contactResolver from "@modules/contact/validations/contactResolver";
import { Link } from "@modules/shared/components/Link";
import PageLayout from "@modules/shared/components/PageLayout";
import SideMenu from "@modules/shared/components/SideMenu";
import Variable from "@modules/shared/components/Variable";
import { contacts } from "@modules/shared/constants/contacts";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FaMarkdown } from "react-icons/fa";

export default function ContactPage() {
  const router = useRouter();
  const toast = useToast();
  const [isLoading, setLoading] = useState(false);

  const methods = useForm({
    resolver: contactResolver,
    mode: "onChange",
  });

  const onValidSubmit = async data => {
    setLoading(true);
    const sendContactMail = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, date: new Date().toISOString() }),
    });

    toast({
      title: "Mensagem enviada com sucesso!",
      position: "top-right",
      status: "success",
      duration: 4000,
      render: () => (
        <Flex
          p={2}
          px={4}
          bg="blue"
          color="white"
          borderRadius="md"
          align="center"
          gap={2}
        >
          <Text fontSize="28px">🎉</Text>
          <Text>Mensagem enviada com sucesso!</Text>
        </Flex>
      ),
    });
    methods.reset();
    setLoading(false);
  };
  return (
    <PageLayout h="full" flex="1">
      <Flex h="100%" flex="1" direction={{ base: "column", lg: "row" }}>
        <SideMenu label="dados-de-contato">
          {contacts.map(({ name, url, icon }) => (
            <Link
              display="flex"
              key={name}
              href={url}
              target="_blank"
              transition=".3s"
              color="text"
              px={4}
              py={2}
              alignItems="center"
              gap={2}
              _hover={{
                textDecor: "none",
                color: "white",
                bg: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <Icon as={icon} /> <Text>{name}</Text>
            </Link>
          ))}
        </SideMenu>
        <FormProvider {...methods}>
          <Flex
            flex="1"
            direction={{ base: "column", lg: "row" }}
            pb={{ base: 20, sm: 8, md: 0 }}
          >
            <Flex flex="1" w="full">
              <Flex
                p={{ base: 4, md: 8 }}
                as="form"
                onSubmit={methods.handleSubmit(onValidSubmit)}
                gap={8}
                direction="column"
                w="full"
                // flex="1"
                // w={{ base: "full", lg: "50%" }}
                borderRight="1px"
              >
                <CustomInput
                  label="_nome:"
                  name="name"
                  placeholder="Seu nome"
                />
                <CustomInput
                  label="_email:"
                  name="email"
                  placeholder="Seu email"
                />
                <CustomTextarea
                  label="_mensagem:"
                  name="message"
                  placeholder="Digite aqui sua mensagem"
                />
                <Button
                  isLoading={isLoading}
                  mt={4}
                  variant="primary"
                  type="submit"
                >
                  enviar mensagem
                </Button>
              </Flex>
            </Flex>
            <FormCode />
          </Flex>
        </FormProvider>
      </Flex>
    </PageLayout>
  );
}
