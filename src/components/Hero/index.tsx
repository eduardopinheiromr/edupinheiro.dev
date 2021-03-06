import Link from "next/link";
import Image from "next/image";

import Greeting from "./Greeting";
import Social from "./Social";

import { imgBase64 } from "@utils/imgBase64";
import heroImage from "@assets/images/hero.svg";

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
                  <Link href="/curriculo.pdf">
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
            <div className="col-md-12 col-lg-6 d-flex align-items-center justify-content-center developer">
              <div>
                <Image
                  draggable={false}
                  placeholder="blur"
                  blurDataURL={imgBase64}
                  alt="Animação de homem flutuando com seu notebook em contexto de programação"
                  src={heroImage}
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </S.Hero>
  );
};

export default Hero;
