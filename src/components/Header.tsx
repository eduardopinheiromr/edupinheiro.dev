import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

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
    <header>
      <Navbar dark className="bg-black" expand="lg">
        <div className="container">
          <NavbarBrand href="#">
            <span className="logo">&lt; EduPinheiro /&gt;</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              {navItems.map((item, key) => (
                <NavItem key={key}>
                  <NavLink href={"#" + item.id}>{item.label}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
