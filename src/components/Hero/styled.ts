import styled from "styled-components";

export const Hero = styled.section`
  padding: 3rem 0;
  overflow-x: hidden;
  .jumbotron {
    background: #181d29;
    color: #fff;
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

export const Greeting = styled.div`
  .text {
    font-size: 8vw;
    font-weight: bold;
  }
  .wave-emoji {
    font-size: 8vw;
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-name: wave;
    display: inline-block;
    transform-origin: 70% 70%;
  }
  @media (min-width: 656px) {
    .text,
    .wave-emoji {
      font-size: 7vw;
    }
  }
  @media (min-width: 991px) {
    .text {
      font-size: 3.5vw;
    }
    .wave-emoji {
      font-size: 4vw;
    }
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const Social = styled.div`
  width: 180px;
  margin: 0 auto;
  .buttons {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    a {
      transition: 0.3s;
    }
    a div {
      position: absolute;
      height: 50px;
      width: 50px;
      border-radius: 100%;
      top: 0;
      z-index: 100;
      box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.7);
    }
    img {
    }
    a:hover {
      transform: scale(1.1);
    }
  }

  @media (min-width: 766px) {
    margin: 0;
  }
`;
