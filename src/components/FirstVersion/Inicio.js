import React from "react";
import Screen from "./Screen";
import Image from "next/image";

const Inicio = () => {
  return (
    <div>
      <Screen bg="whitesmoke">
        <div className="text-center">
          <h2 className="title">O início</h2>
          <div className="d-flex justify-content-between w-75 mx-auto">
            <Image src="/images/html.png" height={200} width={150} />
            <Image src="/images/css.png" height={200} width={150} />
            <Image src="/images/js.png" height={200} width={150} />
          </div>
          <p className="mt-5">
            Minha primeira meta era me dedicar 100% do tempo a capacitação, para
            conseguir meu primeiro emprego em 6 meses.
          </p>
          <p>Inicio no curso que mudou minha vida:</p>
          <div className="my-5">
            <Image src="/images/resilia.webp" height={50} width={300} />
          </div>
          <p>
            Iniciei meus estudos com HTML, CSS e JavaScript, acompanhado de
            dinâmicas diárias de soft skills, facilitadas por uma psicóloga
            fantástica do curso.
          </p>
          <p>
            O curso tinha intenção de nivelar os conhecimentos de todos, porém
            eu estudava muito por conta própria, sempre adiantando as materias e
            ouvindo podcasts, vídeos de grandes canais de programação, para
            saber sobre o que era valorizado atualmente.
          </p>
          <p>
            Eu praticava todos os dias, no mínimo 6 horas diárias, fiz muitos
            projetos pessoais, porém ainda tinha um árduo caminho para me sentir
            seguro tecnicamente. Entrei em 2 outros cursos simultaneamente,
            Desenvolvimento Fullstack no IGTI e Hacker no Gama Academy(que me
            acelerou demais).
          </p>
        </div>
      </Screen>
    </div>
  );
};

export default Inicio;
