import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import ContentLayout from "../components/ContentLayout";
import Experience from "../components/Experience";

export const educacao: Content = {
  render: () => {
    const resilia = {
      description:
        "Formação intensiva de mais de 450 horas de Desenvolvimento Web e habilidades soft, e mentoria com empresas da área.",
      hardSkills: [
        "Desenvolvimento front end: HTML5, CSS3, React.js",
        "Desenvolvimento back end: Node.js, Express, Restful APIs",
        "Modelagem e gerenciamento de infraestrutura de dados: SQL(MySQL) e No SQL (MongoDB)",
        "Engenharia de software: versionamento de código, metodologias ágeis e padrões de projeto",
      ],
      softSkills: [
        "Desenvolvimento de produto: ferramentas de criatividade, mapa de empatia, design thinking, design sprint",
        "Desenvolvimento pessoal: Gestão de tempo, produtividade, relacionamento interpessoal, trabalho em equipe e comunicação",
        "Foco em carreira: visão de negócios, postura profissional.",
      ],
    };

    const gamaAcademy = {
      description:
        "Curso extremamente acelerado que prepara os alunos para ambientes dinâmicos de startups.",
      skills: [
        "Landing pages, sites institucionais, projetos, transformação digital em ONGs, colaboração.",
        "Desenvolvi landing pages utilizando o task runner Gulp e pré processador de CSS(SASS).",
        "Fiz deploy de arquivos via Git e FTP(Netlify e Filezilla).",
        "Aprofundei conhecimentos em Bootstrap e JavaScript.",
        "Experiência altamente imersiva em trabalho em equipe, desenvolvimento colaborativo e agilidade nas entregas.",
      ],
    };
    return (
      <ContentLayout title="Educação">
        <Flex gap={8} direction={{ base: "column", xl: "row" }}>
          <Stack gap={4} alignItems="flex-start">
            <Image
              h="40px"
              objectFit="contain"
              src="/images/resilia.webp"
              alt="Resilia"
            />
            <Text>{resilia.description}</Text>
            <Heading as="h3" fontSize={{ base: 20, lg: 28 }}>
              Hard skills trabalhadas:
            </Heading>
            <UnorderedList pl={6}>
              {resilia.hardSkills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </UnorderedList>
            <Heading as="h3" fontSize={{ base: 20, lg: 28 }}>
              Soft skills trabalhadas:
            </Heading>
            <UnorderedList pl={6}>
              {resilia.softSkills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </UnorderedList>
          </Stack>

          <Stack gap={4} alignItems="flex-start">
            <Image
              h="60px"
              objectFit="contain"
              src="/images/gama.webp"
              alt="Gama Academy"
            />

            <Text>{gamaAcademy.description}</Text>
            <Heading as="h3" fontSize={{ base: 20, lg: 28 }}>
              Skills trabalhadas:
            </Heading>
            <UnorderedList pl={6}>
              {gamaAcademy.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </UnorderedList>
          </Stack>
        </Flex>
      </ContentLayout>
    );
  },
};
