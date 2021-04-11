import React from "react";
import Screen from "./Screen";
import Image from "next/image";
import Link from "next/link";
const Destaque1 = () => {
  return (
    <div>
      <Screen bg="whitesmoke">
        <p className="proj-destaque">Projeto Destaque #1</p>
        <Link href="https://adoteumrobo.vercel.app/">
          <a>
            <h2 className="titulo-projeto">Adote um robô</h2>
          </a>
        </Link>
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
            <p>
              Liderei a equipe do front end e tive que converter um template
              react SPA para estático no NextJS.
              <br />
              <br />
              Nenhum dos meus colegas conhecia o framework e precisei ensinar o
              mínimo conseguirmos entregar.
              <br />
              <br />
              Utilizamos serverless functions para capturar leads em um cluster
              do MongoDB. A página tem uma feature de chamar no banco as últimas
              notícias de um determinado nicho.
              <br />
              <br />
              O banco é alimentado com um scrapper em node js(puppeteer) que
              aciona de 30 em 30 minutos, raspando sites de notícias e salvando
              no banco.
              <br />
              <br />
              Fiz a integração com um scheduller para chamar infinitamente a
              API. O objetivo era diminuir a carga de requests a API, limitando
              a 48 chamadas diárias, podendo entregar em larga escala com uma
              chamada expressa no banco de dados. Empresa SmarThis.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div>
              <Image
                src="/images/projetos-react/adote-um-robo.png"
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
