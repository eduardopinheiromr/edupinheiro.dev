import Image from "next/image";
import Link from "next/link";
import { imgBase64 } from "@utils/imgBase64";

import * as S from "./styled";

const Social = () => {
  const links = [
    {
      href: "https://github.com/eduardopinheiromr",
      class: "fab fa-github h1 text-white",
    },
    {
      href: "https://www.linkedin.com/in/eduardopinheiromr/",
      class: "fab fa-linkedin h1 text-primary",
    },
    {
      href: "mailto:eduardo@novahera.com.br",
      class: "fas fa-at h1 text-warning",
    },
  ];
  return (
    <S.Social>
      <div className="buttons">
        {links.map((link, key) => (
          <Link key={key} href={link.href}>
            <a target="_blank" rel="noreferrer">
              <i className={link.class} />
            </a>
          </Link>
        ))}
      </div>
    </S.Social>
  );
};

export default Social;
