import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    id: "habilidades",
    label: "Habilidades",
  },
  {
    id: "projetos",
    label: "Projetos",
  },
  {
    id: "historia",
    label: "Minha história",
  },
  {
    id: "experiencia",
    label: "Experiência",
  },
  {
    id: "educacao",
    label: "Educação",
  },
  {
    id: "contato",
    label: "Contato",
  },
];

const Header = () => {
  return (
    <header className="shadow-xl">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-xl">
        <div className="container">
          <Link href="/" passHref>
            <a className="navbar-brand">
              <span className="logo">&lt; EduPinheiro /&gt;</span>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto text-center">
              {navItems.map((item, key) => (
                <div className="nav-item" key={key}>
                  <a
                    className="nav-link"
                    aria-current="page"
                    href={"#" + item.id}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
