import React from "react";
import Screen from "./Screen";
import Image from "next/image";
import ProjetosNode from "./ProjetosNode";

const SegundaFase = () => {
  return (
    <div>
      <Screen>
        <div className="text-center">
          <h2 className="title">Olá backend, tudo bom?</h2>
          <div className="d-flex justify-content-between w-75 mx-auto mb-5">
            <Image src="/images/node.png" height={100} width={200} />
            <Image src="/images/mongo.png" height={100} width={150} />
            <Image src="/images/mysql.png" height={100} width={200} />
          </div>
          <p>
            Conheci bancos de dados SQL e NoSQL no Resilia, exercitei ativamente
            no módulo Node. <br />
            Construí APIs REST com Express JS, fiz meu próprio sistema para
            mockar dados no banco e realizar os testes unitários com Mocha e
            Chai.
            <br />
            Fiz meu primeiro deploy no Heroku e conheci os webhooks do GitHub.
          </p>
          <br />
          <p>
            O Node Js abriu minha perspectiva de como seria trabalhar com
            programação. Conheci muitas bibliotecas e entendi o poder da
            comunidade. Não precisar reinventar a roda, e sim focar mais no que
            gerava bons resultados.
          </p>
        </div>
      </Screen>
      <Screen bg="whitesmoke">
        <div className="text-center">
          <h2 className="title">Projetos - Node e Banco de Dados</h2>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p className="w-75 mx-auto">
                Conteúdo denso, porém a base JavaScript suavizou o processo.
                Enxergar o backend me fez perceber a gama infinita de
                possibilidades.
              </p>
              <ul className="aprendizados node">
                <li>Criação de APIs REST do zero com Express</li>
                <li>
                  Consultas básicas e intermediárias em bancos relacionais
                </li>
                <li>
                  Montar uma máquina virtual Linux Server e utilizar o Metabase
                  como ferramenta de BI em um projeto
                </li>
                <li>Encriptação com hash para segurança de senhas(bcrypt)</li>
                <li>JavaScript moderno</li>
                <li>
                  Manutenção no front end de ecommerces grandes(clientes da
                  empresa que trabalho)
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
              <div>
                <ProjetosNode />
              </div>
            </div>
          </div>
        </div>
      </Screen>
    </div>
  );
};

export default SegundaFase;
