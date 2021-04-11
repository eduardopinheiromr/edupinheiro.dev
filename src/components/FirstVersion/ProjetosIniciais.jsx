import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const SlidesContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  .slick-slider {
    width: 600px;
  }
`;

const ProjetosIniciais = () => {
  let projetosIniciais = [
    {
      imgPath: "/images/projetos-iniciais/1.png",
      github:
        "https://github.com/eduardopinheiromr/resilia/tree/master/tarefa-modulo1.4",
    },
    {
      imgPath: "/images/projetos-iniciais/2.png",
      github:
        "https://github.com/eduardopinheiromr/resilia/tree/master/Blog-Tarefas",
    },
    {
      imgPath: "/images/projetos-iniciais/3.png",
      github:
        "https://github.com/eduardopinheiromr/resilia/tree/master/tarefa-modulo1.6",
    },
    {
      imgPath: "/images/projetos-iniciais/4.png",
      github: "https://github.com/eduardopinheiromr/resilia.js",
    },
    {
      imgPath: "/images/projetos-iniciais/5.png",
      github:
        "https://github.com/eduardopinheiromr/pequenos-projetos/tree/master/calculadora",
    },
    {
      imgPath: "/images/projetos-iniciais/6.png",
      github:
        "https://github.com/eduardopinheiromr/pequenos-projetos/tree/master/Coletor-de-email",
    },
    {
      imgPath: "/images/projetos-iniciais/7.png",
      github: "https://github.com/eduardopinheiromr/github-project",
    },
    {
      imgPath: "/images/projetos-iniciais/8.png",
      github: "https://github.com/eduardopinheiromr/projeto-resilia",
    },
    {
      imgPath: "/images/projetos-iniciais/9.png",
      github: "https://github.com/eduardopinheiromr/primezilla",
    },
    {
      imgPath: "/images/projetos-iniciais/10.png",
      github: "https://github.com/eduardopinheiromr/wal-vidros",
    },
  ];

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
  return (
    <SlidesContainer>
      <Slider {...settings}>
        {projetosIniciais.map((projeto, id) => {
          const { imgPath, github } = projeto;
          return (
            <a href={github} target="_blank" key={"inicio" + id}>
              <div>
                <Image
                  src={imgPath}
                  width={500}
                  height={300}
                  layout="responsive"
                />
              </div>
            </a>
          );
        })}
      </Slider>
    </SlidesContainer>
  );
};

export default ProjetosIniciais;
