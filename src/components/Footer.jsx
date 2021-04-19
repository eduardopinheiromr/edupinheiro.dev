import React from "react";
import styled from "styled-components";
import Image from "next/image";

const FooterContainer = styled.div`
  .my-picture {
    border-radius: 100%;
    height: 85%;
    width: 250px;
    background: rgba(0, 0, 0, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 100%;
      height: 300px;
    }
  }
  .black-line {
    text-align: center;
    background: #000;
    padding: 10px 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <h2 className="text-center my-5 font-weight-bold">Muito obrigado!</h2>
        <div className="row">
          {/* <div className="col-md-6">
            <div className="d-flex align-items-center h-100">
              Espero que tenha gostado!
            </div>
          </div> */}
          <div className="col-md-12">
            <div className="my-picture mx-auto">
              <Image height={300} width={300} src="/images/edu.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="black-line">&copy; Eduardo Pinheiro - 2021</div>
    </FooterContainer>
  );
};

export default Footer;
