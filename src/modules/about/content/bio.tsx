/* eslint-disable @next/next/no-html-link-for-pages */
import { Flex, Image, Text } from "@chakra-ui/react";
import ContentLayout from "../components/ContentLayout";

export const bio: Content = {
  render: () => {
    const isDesktop =
      typeof window !== "undefined" ? window.innerWidth > 991 : 0;
    return (
      <ContentLayout title="Sobre mim">
        <Text>
          Sou apaixonado por tecnologia, movido pela curiosidade e desafios.
          <br />
          <br />
          Tive muitos interesses profissionais antes de encontrar meu lugar na
          programação.
          <br />
          <br />
          No meu último trabalho antes de conhecer o universo digital,
          empreendia vendendo doces e sanduíches na rua, em que eu mesmo criava
          as receitas, produzia e vendia. Fiz as redes sociais e também, criava
          os posts para divulgar minha marca.
          <br />
          <br />
          Minha veia empreendedora foi forjada na dificuldade, e sou eternamente
          grato a toda minha jornada. Tudo que aprendi, contribuiu para meu
          desenvolvimento. Me apaixonei por resolver problemas criando soluções
          escaláveis.
          <br />
          <br />
          Comecei a carreira focado em desenvolvimento Front End, mas logo me
          interessei por desenvolvimento Back End e DevOps.
          <br />
          <br />
          Dou muito valor às soft skills. Acredito muito no potencial
          individual/coletivo quando tomamos consciência de nossa humanidade e
          agimos a favor dela, tornando ambientes profissionais muito mais
          seguros e confortáveis a qualquer pessoa.
          <br />
          <br />
          Atuei em projetos de diversos tamanhos e em diferentes setores, como
          varejo, infantil, imobiliário, seguros, etc...
          <br />
          <br />
          Saiba mais sobre minha experiência e habilidades nos links{" "}
          {isDesktop ? "ao lado" : "acima"}.
        </Text>
        <Flex h="100px" />
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
      </ContentLayout>
    );
  },
};
