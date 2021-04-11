import React from "react";
import Screen from "./Screen";
import ProjetosIniciais from "./ProjetosIniciais";

const PrimeiraFase = () => {
  return (
    <div>
      <Screen>
        <div className="text-center">
          <h2 className="title">Projetos - HTML, CSS, JavaScript</h2>
          <div className="row my-5">
            <div className="col-lg-6 col-md-12 d-flex justify-content-center">
              <div className="mob-mx-auto">
                <p className="w-75">
                  Muito conteúdo para absorver e muito esforço pra dar conta.
                  Toda exposição valeu a pena.
                </p>
                <ul className="aprendizados">
                  <li>Git</li>
                  <li>HTML semântico</li>
                  <li>Arquitetura CSS(BEM e Atomic)</li>
                  <li>Flexbox</li>
                  <li>Bootstrap</li>
                  <li>
                    Consumir dados de APIs REST no front end via fetch
                    API(AJAX).
                  </li>
                  <li>Manipulação de DOM</li>
                  <li>Performance na Web(HTTP1 e HTTP2)</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
              <div>
                <ProjetosIniciais />
              </div>
            </div>
          </div>
        </div>
      </Screen>
    </div>
  );
};

export default PrimeiraFase;
