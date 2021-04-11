import React from "react";
import Screen from "./Screen";
import Image from "next/image";

const Destaque1 = () => {
  return (
    <div>
      <Screen>
        <p className="proj-destaque">Projeto Destaque #4</p>
        <h2 className="titulo-projeto">Meu Consultório</h2>
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
            <p>
              Este projeto é um software de gestão de consultório/clínica e
              começará com este nicho, por decisão estratégica. Mas será
              facilmente convertido para gestão de outros negócios, como
              esteticistas, dentistas e até personal trainers(versões futuras).
              <br />
              <br />
              Estou desenvolvendo sozinho com NextJs e Electron(desktop
              multiplataforma), porém como a base é feita no Next, também
              funciona como sistema web.
              <br />
              <br />
              Os dados trafegam via API GraphQL, possibilitando integrações
              performáticas. Essa estrutura me dá facilidade de integrar
              futuramente com um app em React Native.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div>
              <Image
                src="/images/projetos-react/meuconsultorio.png"
                height={300}
                width={400}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </Screen>
    </div>
  );
};

export default Destaque1;
