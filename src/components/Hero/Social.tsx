import Image from "next/image";
import Link from "next/link";

import * as S from "./styled";

const Social = () => {
  return (
    <S.Social>
      <div className="buttons">
        <Link href="https://github.com/eduardopinheiromr">
          <a target="_blank">
            <Image
              src="/social/github.svg"
              alt="github"
              width={50}
              height={50}
            />
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
      </div>
    </S.Social>
  );
};

export default Social;
