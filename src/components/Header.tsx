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
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#habilidades">Habilidades</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#historia">Minha história</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#experiencia">Experiência</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#educacao">Educação</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projetos">Projetos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contato">Contato</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
