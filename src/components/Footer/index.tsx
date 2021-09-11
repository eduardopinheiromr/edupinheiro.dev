import Image from "next/image";
import avatarImage from "@assets/images/edu.png";

import * as S from "./styled";

const Footer = () => {
  return (
    <S.Root>
      <div className="container">
        <h2 className="text-center my-5 font-weight-bold">Muito obrigado!</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="my-picture mx-auto">
              <Image
                placeholder="blur"
                alt="Foto de perfil de Eduardo Pinheiro"
                height={300}
                width={300}
                src={avatarImage}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="black-line">&copy; Eduardo Pinheiro - 2021</div>
    </S.Root>
  );
};

export default Footer;
