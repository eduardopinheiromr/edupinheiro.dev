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

const ProjetosGama = () => {
  let projetosGama = [
    {
      imgPath: "/images/gama/9storm.png",
      url: "https://9storm.vercel.com",
    },
    {
      imgPath: "/images/gama/aprendendo-do-sofa.png",
      url: "https://aprendendodosofa.com.br/",
    },
    {
      imgPath: "/images/gama/bem-me-vi.png",
      url: "https://bemmevi.netlify.app",
    },
    {
      imgPath: "/images/gama/flor-da-pele.png",
      url:
        "https://www.figma.com/proto/GlQxfrkzacKhfbnZf55qjG/Prot%C3%B3tipo-Flor-da-Pele?node-id=125%3A0",
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
        {projetosGama.map((projeto, id) => {
          const { imgPath, url } = projeto;
          return (
            <a href={url} target="_blank" key={"gama" + id}>
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

export default ProjetosGama;
