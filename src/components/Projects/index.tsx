import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "InvestFlex",
      link: "https://investflex.com.br/",
      technologies:
        "HTML, CSS, JavaScript, Wordpress, Bootstrap, Figma, Adobe XD ",
      about:
        "Fiz o projeto prototipado com um UX/UI designer parceiro, que a princípio seria em React e devido a necessidade do cliente, tornou-se um tema WordPress.",
    },
    {
      name: "Sinergis",
      link: "",
      technologies:
        "HTML, CSS, JavaScript, Wordpress, Bootstrap, Figma, Adobe XD",
      about:
        "Foi o segundo projeto com o designer parceiro, onde houve bastante evolução na produtividade, qualidade do código e otimizações. Aguardando a empresa virar a identidade visual para ir ao ar.",
    },
    {
      name: "Com-Partilha",
      link: "",
      technologies:
        "CSS, JavaScript, React, Next.js, Node JS, MongoDB, Firebase(Firestore DB), OAuth2, Stripe, Serverless CMS, Serverless Functions, SEO, Google Search Console, Analytics, Figma",
      about:
        "Meu maior desafio, criar uma plataforma de doações com sistema de login, pagamento, interação social, entre outras funcionalidades. Ainda está em andamento.",
    },
    {
      name: "KPN Safety",
      link: "https://www.kpnsafety.com.br/",
      technologies:
        "CSS, JavaScript, React, Next.js, Serverless CMS, Serverless Functions, SEO, Google Search Console, Analytics, Figma",
      about:
        "Site construido com as tecnologias que mais tenho experiência, atingiu nível máximo de performance, caindo alguns pontos apenas pela instalação do Analytics(script do Google). Este projeto não contou com um protótipo e teve um prazo de entrega de 1 semana.",
    },
    {
      name: "CR Comércio",
      link: "https://www.crtecnologias.com.br/",
      technologies:
        "CSS, JavaScript, React, Next.js, Serverless CMS, Serverless Functions, SEO, Google Search Console, Analytics, Figma",
      about:
        "Similar ao projeto anterior, com pequenas melhorias na arquitetura e funcionalidades. Em produção.",
    },
  ];
  return (
    <>
      <a className="anchor" id="projetos"></a>
      <div className="container min-height-80">
        <h2 className="section-title">Projetos</h2>
        <div className="row">
          {projects.map((project, key) => (
            <div
              className="col-12 col-md-6 text-center text-md-left mb-5"
              key={key}
            >
              <p className="h3 font-weight-bold">{project.name}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.link}
              </a>
              <p style={{ color: "#b6b6b6" }}>{project.technologies}</p>
              <p>{project.about}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
