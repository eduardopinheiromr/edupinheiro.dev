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

const ProjetosNode = () => {
  let projetosNode = [
    {
      imgPath: "/images/projetos-node-bd/1.png",
      github:
        "https://github.com/eduardopinheiromr/resilia/tree/master/tarefa-modulo1.4",
    },
    {
      imgPath: "/images/projetos-node-bd/2.png",
      github:
        "https://github.com/eduardopinheiromr/resilia/tree/master/Blog-Tarefas",
    },
    {
      imgPath: "/images/projetos-node-bd/3.png",
      github:
        "https://github.com/eduardopinheiromr/resilia/tree/master/tarefa-modulo1.6",
    },
    {
      imgPath: "/images/projetos-node-bd/4.png",
      github: "https://github.com/eduardopinheiromr/resilia.js",
    },
    {
      imgPath: "/images/projetos-node-bd/5.png",
      github:
        "https://github.com/eduardopinheiromr/pequenos-projetos/tree/master/calculadora",
    },
    {
      imgPath: "/images/projetos-node-bd/6.png",
      github:
        "https://github.com/eduardopinheiromr/pequenos-projetos/tree/master/Coletor-de-email",
    },
    {
      imgPath: "/images/projetos-node-bd/7.png",
      github: "https://github.com/eduardopinheiromr/github-project",
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
        {projetosNode.map((projeto, id) => {
          const { imgPath, github } = projeto;
          return (
            <a href={github} target="_blank" key={"node" + id}>
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

export default ProjetosNode;
