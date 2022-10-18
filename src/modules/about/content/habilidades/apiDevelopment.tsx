import { Heading, Stack, Text, UnorderedList } from "@chakra-ui/react";
import ContentLayout from "@modules/about/components/ContentLayout";

export const apiDevelopment: Content = {
  render: () => {
    return (
      <ContentLayout title="Boas práticas no desenvolvimento de APIs">
        <Stack gap={{ base: 8, lg: 16 }} pb={16}>
          <Stack>
            <Heading>SOLID</Heading>
            <Text>
              O SOLID é um acrônimo que representa cinco princípios de
              programação orientada a objetos e design de código. Os princípios
              são:
              <br />
              <br />
              <UnorderedList>
                <li>
                  <strong style={{ fontSize: 20 }}>S</strong> - Single
                  Responsability Principle
                </li>
                <li>
                  <strong style={{ fontSize: 20 }}>O</strong> - Open-Closed
                  Principle
                </li>
                <li>
                  <strong style={{ fontSize: 20 }}>L</strong> - Liskov
                  Substitution Principle
                </li>
                <li>
                  <strong style={{ fontSize: 20 }}>I</strong> - Interface
                  Segregation Principle
                </li>
                <li>
                  <strong style={{ fontSize: 20 }}>D</strong> - Dependency
                  Inversion Principle
                </li>
              </UnorderedList>
              <br />
              <br />
              Sempre aplico esses princípios no desenvolvimento de APIs, pois
              acredito que são fundamentais para um código limpo e de fácil
              manutenção.
              <br />
              <br />
              Costumo separar as responsabilidades de cada classe em arquivos
              diferentes, como Controllers, Services, Repository, Entities, etc,
              para que cada arquivo tenha apenas uma responsabilidade.
              <br />
              <br />
              Também costumo criar interfaces para cada classe, para que a
              classe possa ser substituída por outra que implemente a mesma
              interface.
              <br />
              <br />
              Na inicialização da aplicação, costumo injetar as dependências de
              cada classe, para que a classe não precise se preocupar com a
              inicialização de suas dependências e garantir que só haja uma
              instância de cada classe.
            </Text>
          </Stack>
          <Stack>
            <Heading>Nest.js</Heading>
            <Text>
              Em projetos mais profissionais, que precisam de uma estrutura mais
              robusta, costumo utilizar o Nest.js, que é um framework Node.js
              baseado em TypeScript.
              <br />
              <br />
              O Nest.js é um framework que utiliza conceitos como Injeção de
              Dependência, Inversão de Controle, Inversão de Dependência, etc,
              padrões de projeto que visam aumentar a flexibilidade e
              reutilização de código, diminuindo o acoplamento entre as classes.
              <br />
              <br />O framework também facilita a conexão com integrações muito
              bem aplicadas em diversas soluções com bibliotecas famosas do
              universo javascript.
            </Text>
          </Stack>
          <Stack>
            <Heading>Repository Pattern</Heading>
            <Text>
              O Repository Pattern é um padrão de projeto que visa isolar a
              lógica de acesso a dados, como banco de dados, de outras partes da
              aplicação, como Controllers, Services, etc.
              <br />
              <br />
              Gosto de utilizar o Repository Pattern para isolar a lógica de
              acesso a dados, pois assim, caso eu precise trocar o banco de
              dados, ou o ORM, não há acoplamento entre a camada mais externa
              com a de domínio da aplicação.
            </Text>
          </Stack>
          <Stack>
            <Heading>Fastify</Heading>
            <Text>
              O Fastify é uma biblioteca de roteamento e servidor HTTP, que é
              muito mais performática e eficiente que o Express.js.
              <br />
              <br />
              Já fiz diversas APIs utilizando o Express.js, mas sempre que
              possível utilizo o Fastify, por sua velocidade superior e por ser
              uma biblioteca mais leve.
            </Text>
          </Stack>
          <Stack>
            <Heading>Passport.js</Heading>
            <Text>
              O Passport.js é uma biblioteca de autenticação para Node.js, que
              permite a autenticação de usuários utilizando diversos meios, como
              OAuth, JWT, etc.
              <br />
              <br />
              Já utilizei o Passport.js em diversas APIs, e sempre que possível
              utilizo-o, pois é uma biblioteca muito bem documentada e que
              facilita muito a autenticação de usuários.
            </Text>
          </Stack>
          <Stack>
            <Heading>Swagger</Heading>
            <Text>
              O Swagger é uma ferramenta que permite documentar e testar APIs
              RESTful.
              <br />
              <br />
              Já utilizei o Swagger em diversas APIs, e sempre que possível
              utilizo-o, pois é uma ferramenta que facilita a criação de
              documentação e testes de APIs.
            </Text>
          </Stack>

          <Stack>
            <Heading>Prisma</Heading>
            <Text>
              O Prisma é um ORM que permite a conexão com diversos bancos de
              dados, como MySQL, PostgreSQL, MongoDB, etc.
              <br />
              <br />
              O Prisma conta com diversas features que facilitam a criação de
              queries, como o Type-Safe Database Access, que permite a criação
              de queries utilizando o TypeScript.
              <br />
              <br />
              Além de fenomenal como ORM, ainda possui generators que permitem
              por exemplo, a criação de Diagramas de Relacionamento de Entidades
              automaticamente, baseado no schema definido.
            </Text>
          </Stack>
        </Stack>
      </ContentLayout>
    );
  },
};
