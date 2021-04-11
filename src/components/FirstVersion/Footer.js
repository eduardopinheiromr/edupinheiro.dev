import React from "react";
import Screen from "./Screen";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <Screen bg="#000">
        <div className="text-center">
          <Image src="/images/achievement.png" height={300} width={400} />
        </div>
        <h2 className="obrigado">Muito obrigado!</h2>
      </Screen>
    </div>
  );
};

export default Footer;
