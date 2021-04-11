import React from "react";
import Screen from "./Screen";

const TerceiraFase = () => {
  return (
    <div>
      <Screen>
        <div className="text-center">
          <h2 className="title">Hoje - React, React Native, Frameworks, CMS</h2>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p>
                No último módulo do Resilia (React) botei como meta aprender
                React pra dobrar meu salário em 3 meses, e caí pra dentro de
                novo.
                <br />
                <br />
                Participei do Hacking Rio 2020 no Cluster de Saúde com colegas
                do Resilia e foi transformador. Trabalhamos exaustivamente.
                Aprendi a me virar com React Native de um dia pro outro para
                construir o protótipo.
                <br />
                <br />
                Ganhei a confiança que precisava para acreditar que consigo
                aprender qualquer coisa se estiver firme na minha fé e
                determinação.
              </p>
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/h1KbaaKyrYs"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <p>
                Usei exaustivamente o NPM e conheci muitas bibliotecas,
                pesquisei por frameworks e no meio dessa bagunça, conheci o Next
                JS e me apaixonei.
                <br />
                <br />
                Consegui meus primeiros clientes e propondo sites em react, não
                dobrei meu salário, mas dobrei meu faturamento (meta batida na
                metade do tempo)
              </p>
              <ul className="aprendizados react">
                <li>Reactstrap, Tailwind CSS, Bulma, etc</li>
                <li>Muito uso de Styled Components</li>
                <li>Uso frequente de hooks</li>
                <li>
                  Consertei bugs de um app em React Native de um cliente no meu
                  emprego
                </li>
                <li>
                  Agilizei alguns processos no trabalho com ferramentas que
                  constantemente busco para me atualizar
                </li>
                <li>Testei alguns CMS Headless como Ghost, Strapi e Netlify</li>
                <li>Compreendi o uso do Redux(gerenciar um estado global)</li>
                <li>Vivenciei meus primeiros freelas</li>
                <li>Imersão Next JS</li>
              </ul>
            </div>
          </div>
        </div>
      </Screen>
    </div>
  );
};

export default TerceiraFase;
