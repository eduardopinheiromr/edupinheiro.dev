import DisplayLottie from "../DisplayLottie";
import heroAnimation from "../../assets/lottie/targeting-poky-heads.json";
import Greeting from "./Greeting";
import Social from "./Social";
import Link from "next/link";

import * as S from "./styled";

const Hero = () => {
  return (
    <S.Hero className="fadeIn">
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-6">
              <div className="">
                <h1 className="display-4">
                  <Greeting />
                </h1>
                <p className="lead text-md-start text-center">
                  Um desenvolvedor Full Stack 🚀 com experiência na criação de
                  aplicativos Web com JavaScript / ReactJS / NodeJS / React
                  Native e algumas outras bibliotecas e estruturas
                  interessantes.
                </p>
                <hr className="my-4" />
                <Social />
                <div className="d-flex mt-3 justify-content-center justify-content-md-start">
                  <a href="#contato">
                    <button className="btn btn-black-glass p-3">
                      Entre em contato
                    </button>
                  </a>
                  <Link href="https://drive.google.com/file/d/1EBcUnHGge9SpPGbICDsjVJq3Q6YhyBlY/view?usp=sharing">
                    <a target="_blank">
                      <div className="ms-3">
                        <button className="btn btn-black-glass p-3">
                          Veja meu currículo
                        </button>
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
      </div>
    </S.Hero>
  );
};

export default Hero;
