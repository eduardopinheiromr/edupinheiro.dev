import React from "react";
import softwareSkills from "./skills";
import DisplayLottie from "../DisplayLottie";
import developing from "../../assets/lottie/developing.json";

import * as S from "./styled";

const MySkills = () => {
  const skills = [
    "Otimizações de SEO",
    "Criação e consumo de APIs REST/GraphQL",
    "Criação de websites de alta performance e 100% responsivos",
  ];

  return (
    <S.Root>
      <a className="anchor" id="habilidades"></a>
      <div className="container min-height-80">
        <div className="row">
          <div className="col-lg-6 col-md-12ç developer">
            <DisplayLottie animationData={developing} />
          </div>
          <div className="col-lg-6 col-md-12ç">
            <h2 className="section-title">O que eu faço</h2>
            <p>
              Atualmente empreendo na carreira de TI, focado em dominar o
              framework Next Js para fazer entregas expressas, de alta qualidade
              e performance, 100% SEO-friendly, de baixíssimo(ou zero) custo
              para meus clientes, utilizando as tecnologias mais modernas da
              atualidade.
            </p>
            <ul className="all-skills">
              {softwareSkills.map((skill, index) => (
                <li className={"skill-icon " + skill.skillName} key={index}>
                  <div className={skill.fontAwesomeClassname}></div>
                  <span>{skill.skillName}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-3 pl-0">
              {skills.map((skill, key) => (
                <li key={key}>
                  <div>
                    {" "}
                    <span className="text-warning">⚡</span> {skill}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </S.Root>
  );
};

export default MySkills;
