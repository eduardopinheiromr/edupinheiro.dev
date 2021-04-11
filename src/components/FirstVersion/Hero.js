import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div className="hero-bg-black">
        <div className="profile">
          <div className="gradient-black">&nbsp;</div>
          <Image src="/images/edu.png" height={300} width={250} />
        </div>

        <h1>Eduardo Pinheiro</h1>
      </div>
      <div className="hero-bg-white">
        <h2>Desenvolvedor Front End</h2>
        <h3>
          HTML, CSS, JS | SQL e NoSQL | React(NextJS) | NodeJS | APIs REST e
          GraphQL
        </h3>
        <div className="mt-5 pt-5">
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_97pwxonr.json"
            background="transparent"
            speed={1}
            style={{ width: 100, height: 100 }}
            loop
            autoPlay
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
