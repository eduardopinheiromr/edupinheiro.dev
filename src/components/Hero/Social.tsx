import Image from "next/image";
import Link from "next/link";
import { imgBase64 } from "@utils/imgBase64";

import * as S from "./styled";

const Social = () => {
  return (
    <S.Social>
      <div className="buttons">
        <Link href="https://github.com/eduardopinheiromr">
          <a target="_blank">
            <i className="fab fa-github h1" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/eduardopinheiromr/">
          <a target="_blank">
            <i className="fab fa-linkedin h1 text-primary" />
          </a>
        </Link>
        <Link href="mailto:eduardo@novahera.com.br">
          <a target="_blank">
            <i className="fas fa-at h1 text-warning" />
          </a>
        </Link>
      </div>
    </S.Social>
  );
};

export default Social;
