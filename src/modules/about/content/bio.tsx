/* eslint-disable @next/next/no-html-link-for-pages */
import { Flex, Image } from "@chakra-ui/react";
import ContentLayout from "../components/ContentLayout";

export const bio: Content = {
  render: () => {
    const isDesktop =
      typeof window !== "undefined" ? window.innerWidth > 991 : 0;
    return (
      <ContentLayout
        title="Sobre mim"
        extraChildren={
          <Image
            alt="cat"
            title="meow"
            draggable="false"
            position="absolute"
            bottom={{ base: "-24px", md: "-16px" }}
            right={{ base: "-36px", lg: "-29px" }}
            height="140px"
            width="140px"
            objectFit="contain"
            src="/gifs/cat.gif"
          />
        }
      >
        Sou apaixonado por tecnologia, movido pela curiosidade e desafios.
        <br />
        <br />
        Comecei a carreira focado em desenvolvimento Front End, mas logo me
        interessei por desenvolvimento Back End e DevOps.
        <br />
        <br />
        Atuei em projetos de diversos tamanhos e em diferentes setores, como
        varejo, infantil, imobiliário, seguros, etc...
        <br />
        <br />
        Saiba mais sobre minha experiência e habilidades nos links{" "}
        {isDesktop ? "ao lado" : "acima"}.
        <Flex h="100px" />
      </ContentLayout>
    );
  },
};
