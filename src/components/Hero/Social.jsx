import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const SocialContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;

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
`;

const Social = () => {
  return (
    <SocialContainer>
      <Link href="https://github.com/eduardopinheiromr">
        <a target="_blank">
          <Image src="/social/github.svg" alt="github" width={50} height={50} />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/eduardopinheiromr/">
        <a target="_blank">
          <Image
            src="/social/linkedin.svg"
            alt="linkedin"
            width={50}
            height={50}
          />
        </a>
      </Link>
      <Link href="mailto:eduardo@novahera.com.br">
        <a target="_blank">
          <Image src="/social/gmail.svg" alt="gmail" width={50} height={50} />
        </a>
      </Link>
    </SocialContainer>
  );
};

export default Social;
