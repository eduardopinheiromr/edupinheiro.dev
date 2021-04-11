import React from "react";
import Screen from "./Screen";
import Image from "next/image";
import Link from "next/link";
const Destaque1 = () => {
  return (
    <div>
      <Screen>
        <p className="proj-destaque">Projeto Destaque #2</p>
        <Link href="https://investflex.com.br/">
          <a>
            <h2 className="titulo-projeto">InvestFlex</h2>
          </a>
        </Link>
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
            <p>
              O meu primeiro cliente startup! Fiz uma proposta de entrega super
              expressa do site, em apenas 10 dias!
              <br />
              <br />
              O prazo seria cumprido, mas por decisão da diretoria, foi decidido
              que deveria ser tudo feito no wordpress. Tive que converter o
              projeto em React(Next) para um tema de wordpress, e achei
              interessante como haviam similaridades e features em comum, como
              fallback e file system routing.
              <br />
              <br />O tema está na reta final de ser 100% finalizado, mas já se
              encontra em produção.(iniciado no meio de novembro)
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div>
              <Image
                src="/images/projetos-react/investflex-vercel.png"
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
