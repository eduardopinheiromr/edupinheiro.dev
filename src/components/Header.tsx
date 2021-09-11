import { useState } from "react";

const navItems = [
  {
    id: "habilidades",
    label: "Habilidades",
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
    id: "projetos",
    label: "Projetos",
  },
  {
    id: "contato",
    label: "Contato",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="shadow-xl">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-xl">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="logo">&lt; EduPinheiro /&gt;</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item, key) => (
                <li className="nav-item" key={key}>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={"#" + item.id}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
