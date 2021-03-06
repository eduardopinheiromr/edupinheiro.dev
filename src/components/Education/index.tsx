import Image from "next/image";
import Link from "next/link";
import gamaLogo from "@assets/images/gama.webp";
import resiliaLogo from "@assets/images/resilia.webp";

const resilia = {
  description:
    "Formação intensiva de mais de 450 horas de Desenvolvimento Web e habilidades soft, e mentoria com empresas da área.",
  hardskills: [
    "Desenvolvimento front end: HTML5, CSS3, React.js",
    "Desenvolvimento back end: Node.js, Express, Restful APIs",
    "Modelagem e gerenciamento de infraestrutura de dados: SQL(MySQL) e No SQL (MongoDB)",
    "Engenharia de software: versionamento de código, metodologias ágeis e padrões de projeto",
  ],
  softskills: [
    "Desenvolvimento de produto: ferramentas de criatividade, mapa de empatia, design thinking, design sprint",
    "Desenvolvimento pessoal: Gestão de tempo, produtividade, relacionamento interpessoal, trabalho em equipe e comunicação",
    "Foco em carreira: visão de negócios, postura profissional.",
  ],
};

const gama = {
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

const Education = () => {
  return (
    <>
      <a className="anchor" id="educacao"></a>
      <div className="container min-height-80">
        <h2 className="section-title">Educação</h2>
        <div className="row">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0 d-flex justify-content-start align-items-center flex-column px-5">
            <Link href="https://www.resilia.com.br/">
              <a target="_blank" rel="noreferrer">
                <Image
                  draggable={false}
                  alt="Logo da startup de educação Resilia"
                  src={resiliaLogo}
                  width={300}
                  height={50}
                  placeholder="blur"
                />
              </a>
            </Link>
            <div className="mt-5">
              <p>{resilia.description}</p>
              <p className="h5">Hard skills trabalhadas:</p>
              <ul>
                {resilia.hardskills.map((skill, key) => (
                  <li key={key}>{skill}</li>
                ))}
              </ul>

              <p className="h5">Soft skills trabalhadas:</p>
              <ul>
                {resilia.softskills.map((skill, key) => (
                  <li key={key}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-start align-items-center flex-column px-5">
            <Link href="https://www.gama.academy/">
              <a target="_blank" rel="noreferrer">
                <Image
                  draggable={false}
                  alt="Logo da startup de educação Gama Academy"
                  src={gamaLogo}
                  width={300}
                  height={75}
                  placeholder="blur"
                />
              </a>
            </Link>
            <div className="mt-4">
              <p>{gama.description}</p>
              <p className="h5">Skills trabalhadas</p>
              <ul>
                {gama.skills.map((skill, key) => (
                  <li key={key}>
                    <p>{skill}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
