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

const ProjetosReact = () => {
  let projetosReact = [
    {
      imgPath: "/images/projetos-react/1.png",
      github:
        "https://github.com/eduardopinheiromr/resilia/tree/master/tarefa-modulo1.4",
    },
    {
      imgPath: "/images/projetos-react/2.png",
      github:
        "https://github.com/eduardopinheiromr/resilia/tree/master/Blog-Tarefas",
    },
    {
      imgPath: "/images/projetos-react/3.png",
      github:
        "https://github.com/eduardopinheiromr/resilia/tree/master/tarefa-modulo1.6",
    },
    {
      imgPath: "/images/projetos-react/4.png",
      github: "https://github.com/eduardopinheiromr/resilia.js",
    },
    {
      imgPath: "/images/projetos-react/5.png",
      github:
        "https://github.com/eduardopinheiromr/pequenos-projetos/tree/master/calculadora",
    },
    {
      imgPath: "/images/projetos-react/6.png",
      github:
        "https://github.com/eduardopinheiromr/pequenos-projetos/tree/master/Coletor-de-email",
    },
    {
      imgPath: "/images/projetos-react/7.png",
      github: "https://github.com/eduardopinheiromr/github-project",
    },
    {
      imgPath: "/images/projetos-react/8.png",
      github: "https://github.com/eduardopinheiromr/projeto-resilia",
    },
    {
      imgPath: "/images/projetos-react/9.png",
      github: "https://github.com/eduardopinheiromr/primezilla",
    },
    {
      imgPath: "/images/projetos-react/10.png",
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
        {projetosReact.map((projeto, id) => {
          const { imgPath, github } = projeto;
          return (
            <a href={github} target="_blank">
              <div key={id}>
                <Image src={imgPath} width={600} height={300} />
              </div>
            </a>
          );
        })}
      </Slider>
    </SlidesContainer>
  );
};

export default ProjetosReact;
