import ContentLayout from "@modules/about/components/ContentLayout";

export const apiDevelopment: Content = {
  render: () => {
    return (
      <ContentLayout title="Boas práticas no desenvolvimento de APIs">
        Em breve conteúdo sobre SOLID, Clean Architecture, TDD, Repository
        Pattern, libs como Prisma, Nest.js, Fastify, Passport.js, entre outras.
      </ContentLayout>
    );
  },
};
