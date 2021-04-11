import React from "react";
import Screen from "./Screen";
import Image from "next/image";

const Proposito = () => {
  return (
    <div>
      <Screen bg="whitesmoke">
        <div className="text-center">
          <h2 className="title">Propósito</h2>
          <Image src="/images/innovation.png" height={300} width={400} />
          <p>
            Mergulhar cada vez mais fundo no desenvolvimento com JavaScript,
            explorando ao máximo todas as possibilidades de uso. Me interesso
            muito pelas tecnologias React, React Native, GraphQL, Headless CMS,
            Next Js e Node Js.
          </p>
          <p>
            Busco criar e encontrar oportunidades para exercitar e me aprofundar
            nesta área de interesse, por acreditar no potencial de
            escalabilidade com uma boa experiência de desenvolvimento
          </p>
        </div>
      </Screen>
      <Screen>
        <div className="text-center">
          <h2 className="title">Como cheguei a esse propósito?</h2>
          <Image src="/images/moving_forward.png" height={300} width={400} />
          <p>Através da minha jornada e projetos, ligarei os pontos</p>
        </div>
      </Screen>
    </div>
  );
};

export default Proposito;
