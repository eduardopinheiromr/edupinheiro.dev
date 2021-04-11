import React from "react";
import { Jumbotron, Button } from "reactstrap";
import DisplayLottie from "../DisplayLottie";
import heroAnimation from "../../assets/lottie/targeting-poky-heads.json";
import Greeting from "./Greeting";
import Social from "./Social";
import Link from "next/link";
import styled from "styled-components";

const HeroContainer = styled.div`
  overflow-x: hidden;
  .jumbotron {
    background: #181d29;
    color: #fff;
    min-height: 80vh;
  }
  .btn-black-glass:hover {
    transform: scale(1.1);
    box-shadow: 5px 10px 30px 0px rgba(0, 0, 255, 0.5);
    background: rgba(0, 0, 55, 0.5);
  }
  .btn-black-glass {
    background: rgba(0, 0, 0, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    border-radius: 10px;
    color: #fff;
    transition: 0.3s;
  }
  .container {
    margin-top: 3vw;
  }
  .lead {
    font-size: 22px;
  }
  @media (min-width: 568px) {
    .lead {
      font-size: 28px;
    }
  }
  .developer {
    margin-top: 28px;
  }
  @media (min-width: 768px) {
    .developer {
      margin-top: 0;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Jumbotron>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-6">
              <div className="">
                <h1 className="display-4">
                  <Greeting />
                </h1>
                <p className="lead">
                  Um desenvolvedor Full Stack 🚀 com experiência na criação de
                  aplicativos Web com JavaScript / ReactJS / NodeJS / React
                  Native e algumas outras bibliotecas e estruturas
                  interessantes.
                </p>
                <hr className="my-4" />
                <Social />
                <div className="d-flex mt-3">
                  <a href="#contato">
                    <Button color="black-glass p-3">Entre em contato</Button>
                  </a>
                  <Link href="https://drive.google.com/file/d/1Be8ZegSGSk4uo20wqVLWYot-Px3N3_J5/view?usp=sharing">
                    <a target="_blank">
                      <div className="ml-3">
                        <Button color="black-glass p-3">
                          Veja meu currículo
                        </Button>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex align-items-center developer">
              <div>
                <DisplayLottie animationData={heroAnimation} />
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </HeroContainer>
  );
};

export default Hero;
