import React from "react";
import styled from "styled-components";
const GreetingContainer = styled.div`
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
const Greeting = () => {
  return (
    <GreetingContainer className="text-md-left text-center">
      <span className="text">Oi, eu sou o Edu</span>{" "}
      <span className="wave-emoji">👋</span>
    </GreetingContainer>
  );
};

export default Greeting;
