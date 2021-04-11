import React from "react";
import Screen from "./Screen";
import Image from "next/image";
import Link from "next/link";
const Destaque1 = () => {
  return (
    <div>
      <Screen bg="whitesmoke">
        <p className="proj-destaque">Projeto Destaque #3</p>
        <Link href="https://com-partilha.vercel.app/">
          <a>
            <h2 className="titulo-projeto">Com-Partilha</h2>
          </a>
        </Link>
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
            <p>
              Consegui esse cliente por indicação, ele já tinha o protótipo no
              figma. Este projeto é meu maior desafio até o momento.
              <br />
              <br />
              Será implementado autenticação, sistema de pagamento recorrente,
              newsletter e o CMS usado é o Strapi JS(headless).
              <br />
              <br />
              Usei o NextAuth para autenticação. O projeto ainda encontra-se em
              desenvolvimento(iniciado em dezembro)
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div>
              <Image
                src="/images/projetos-react/compartilha.png"
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
