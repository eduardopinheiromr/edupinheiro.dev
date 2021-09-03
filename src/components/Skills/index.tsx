import React from "react";
import softwareSkills from "./skills";
import DisplayLottie from "../DisplayLottie";
import developing from "../../assets/lottie/developing.json";
import styled from "styled-components";

const SkillsContainer = styled.div`
  ul {
    list-style: none;
  }
  h2 {
    text-align: center;
  }
  .all-skills {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    li {
      display: flex;
      flex-direction: column;
      span {
        text-align: center;
        font-size: 15pt;
      }
    }
  }
  .skill-icon {
    transition: 0.2s;
    margin: 0 10px;
  }
  .skill-icon:hover {
    transform: scale(1.1);
  }
  .HTML5:hover {
    color: red;
  }
  .CSS3:hover {
    color: #254bdd;
  }
  .SASS:hover {
    color: #c66493;
  }
  .JavaScript:hover {
    color: yellow;
  }
  .WordPress:hover {
    color: #007094;
  }
  .ReactJs:hover {
    color: #48cef6;
  }
  .NodeJs:hover {
    color: #77b162;
  }
  .npm:hover {
    color: #cd3738;
  }
  .SQL:hover {
    color: lightgray;
  }

  .skill-icon {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 48pt;
    text-align: center;
    padding: 10px;
  }
  p {
    text-align: center;
  }
  .developer {
    order: 1;
    display: flex;
  }
  @media (min-width: 992px) {
    .developer {
      order: 0;
    }
  }
`;

const MySkills = () => {
  return (
    <SkillsContainer>
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
              <li>
                <div>⚡ Otimizações de SEO</div>
              </li>
              <li>
                <div>⚡ Criação e consumo de APIs REST</div>
              </li>
              <li>
                <div>
                  ⚡ Criação de websites de alta performance e 100% responsivos
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SkillsContainer>
  );
};

export default MySkills;
