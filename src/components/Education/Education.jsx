import React from "react";
import Image from "next/image";
import Link from "next/link";
const Education = () => {
  return (
    <>
      <a className="anchor" id="educacao"></a>
      <div className="container min-height-80">
        <h2 className="section-title">Educação</h2>
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-start align-items-center flex-column px-5">
            <Link href="https://www.gama.academy/">
              <a target="_blank">
                <Image src="/images/resilia.webp" width={300} height={50} />
              </a>
            </Link>
            <div className="mt-5">
              <p>
                Formação intensiva de mais de 450 horas de Desenvolvimento Web e
                habilidades soft, e mentoria com empresas da área.
              </p>
              <p>Competências hard trabalhadas</p>
              <ul>
                <li>Desenvolvimento front end: HTML5, CSS3, React.js</li>
                <li>
                  Desenvolvimento back end: Node.js, Express, Restful API's
                </li>
                <li>
                  Modelagem e gerenciamento de infraestrutura de dados: SQL
                  (MySQL) e No SQL (MongoDB)
                </li>
                <li>
                  Engenharia de software: versionamento de código, metodologias
                  ágeis e padrões de projeto
                </li>
              </ul>

              <p>Competências soft trabalhadas</p>
              <ul>
                <li>
                  Desenvolvimento de produto: ferramentas de criatividade, mapa
                  de empatia, design thinking, design sprint
                </li>
                <li>
                  Desenvolvimento pessoal: Gestão de tempo, produtividade,
                  relacionamento interpessoal, trabalho em equipe e comunicação
                </li>
                <li>
                  Foco em carreira: visão de negócios, postura profissional.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-start align-items-center flex-column px-5">
            <Link href="https://www.gama.academy/">
              <a target="_blank">
                <Image src="/images/gama.png" width={300} height={75} />
              </a>
            </Link>
            <div className="mt-5">
              <p>
                Landing pages, sites institucionais, projetos, transformação
                digital em ONGs, colaboração.
              </p>
              <p>
                Desenvolvi landing pages utilizando o task runner Gulp e pré
                processador de CSS(SASS).
              </p>

              <p> Fiz deploy de arquivos via Git e FTP(Netlify e Filezilla).</p>

              <p> Aprofundei conhecimentos em Bootstrap e JavaScript.</p>

              <p>
                Experiência altamente imersiva em trabalho em equipe,
                desenvolvimento colaborativo e agilidade nas entregas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
