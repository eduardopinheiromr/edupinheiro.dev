import React from "react";
import Screen from "./Screen";
import Image from "next/image";
import ProjetosGama from "./ProjetosGama";

const Gama = () => {
  return (
    <div>
      <Screen bg="whitesmoke">
        <div className="text-center">
          <Image src="/images/gama.png" height={300} width={700} />
        </div>
        <div className="row mb-5 pb-5">
          <div className="col-lg-6 col-md-12 d-flex">
            <div className="texto-gama">
              <p>
                Ganhei uma bolsa 100% no Gama Academy XP34, um curso totalmente
                fora do normal. A grade era Front End(HTML, CSS, JS, Git, React
                e soft skills).
                <br />
                <br />
                Tive 4 tarefas de lançamentos, 1 por semana com um grupo
                multidisciplinar de Marketing, UX/UI, Inside Sales e Devs.
              </p>
              <a href="https://9storm.vercel.app/">
                <h3>Lançamento #1 - 9storm</h3>
              </a>
              <p>Conheci o SASS, Gulp, FTPs e muito trabalho em equipe.</p>
              <a href="https://aprendendodosofa.com.br/">
                <h3>Lançamento #2 - Aprendendo Do Sofá</h3>
              </a>
              <p>Conheci o WordPress e Elementor</p>
              <a href="https://bemmevi.netlify.app/">
                <h3>Lançamento #3 - ONG Bem Me Vi</h3>
              </a>
              <p>
                Aprendi muito sobre transformação digital e como é possível
                mudar a vida das pessoas com a internet.
              </p>
              <a href="https://www.figma.com/proto/GlQxfrkzacKhfbnZf55qjG/Prot%C3%B3tipo-Flor-da-Pele?node-id=125%3A0">
                <h3>Lançamento #4 - Flor da Pele</h3>
              </a>
              <p>Vivenciei o nascimento de uma startup.</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
            <div>
              <p className="destaque-gama">
                Fui orador por votação dos Hackers e fiz um discurso surpresa no
                encerramento. Ao fim do curso participei de uma feira de
                contratações e consegui meu primeiro emprego como desenvolver
                front end Jr. Bati minha meta na metade do tempo(3 meses).
              </p>
              <br />
              <br />
              <ProjetosGama />
            </div>
          </div>
        </div>
      </Screen>
    </div>
  );
};

export default Gama;
