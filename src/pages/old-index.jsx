import React from "react";
import styled from "styled-components";
import Hero from "../components/FirstVersion/Hero";
import Proposito from "../components/FirstVersion/Proposito";
import Inicio from "../components/FirstVersion/Inicio";
import PrimeiraFase from "../components/FirstVersion/PrimeiraFase";
import Gama from "../components/FirstVersion/Gama";
import SegundaFase from "../components/FirstVersion/SegundaFase";
import TerceiraFase from "../components/FirstVersion/TerceiraFase";
import Destaques from "../components/FirstVersion/Destaques";
import Footer from "../components/FirstVersion/Footer";

const Home = styled.main`
  max-width: 100vw;
  overflow-x: hidden;
  .hero-bg-black,
  .hero-bg-white {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 500px;
    height: 50vh;
    width: 100vw;
    h3 {
      margin-top: 10px;
      font-size: 18px;
      padding: 0 30px;
    }
  }
  .hero-bg-black {
    background: #000;
    align-items: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 64px;
      margin-bottom: 30px;
    }
    .profile {
      display: flex;
      .gradient-black {
        margin-top: 200px;
        height: 100px;
        width: 250px;
        position: absolute;
        z-index: 2;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1)
        );
      }
    }
  }
  .hero-bg-white {
    h2 {
      font-size: 48px;
      margin-top: 30px;
    }
  }
  .title {
    font-size: 48px;
    padding-bottom: 50px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
  }
  .vh-100 {
    height: 100vh;
  }

  .obrigado {
    color: #fff;
    font-size: 64px;
    margin-bottom: 30px;
    text-align: center;
  }
  .proj-destaque {
    font-size: 16px;
    margin: 0;
    font-weight: bold;
  }
  .titulo-projeto {
    font-size: 48px;
    font-weight: bold;
  }
  .aprendizados {
    height: 100%;
    max-height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      font-size: 18px;
      font-weight: bold;
      list-style: square;
      width: 75%;
      text-align: left;
    }
  }
  .texto-gama {
    width: 90%;
    text-align: left;
  }

  @media (max-width: 480px) {
    .aprendizados {
      align-items: center;
      padding: 0;
      li {
        text-align: center !important;
        list-style: none;
      }
    }
    .hero-bg-black,
    .hero-bg-white,
    .texto-gama,
    .destaque-gama {
      text-align: center;
    }
    .texto-gama {
      margin: 0 auto;
    }
    .destaque-gama {
      padding: 0 8rem;
    }

    .title {
      margin: 30px 0;
    }

    .mob-mx-auto {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .aprendizados.node {
      margin-bottom: 60px;
    }
    iframe {
      width: 320px;
      margin: 30px 0;
    }
    .aprendizados.react {
      margin-bottom: 90px;
    }
  }
`;

const index = () => {
  return (
    <Home>
      <div className="container-fluid p-0">
        <Hero />
        <Proposito />
        <Inicio />
        <PrimeiraFase />
        <Gama />
        <SegundaFase />
        <TerceiraFase />
        <Destaques />
        <Footer />
      </div>
    </Home>
  );
};

export default index;
