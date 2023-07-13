import { useState } from "react";
import { Nav, NavItem, Navbar, Collapse, NavbarToggler, NavbarBrand } from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";
// import LoginModal from "./loginModal";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className="rounded custom-navbar"  expand="md" sticky="top">
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/" style={{color:"white"}}>
              <i className="fa fa-home fa-lg" /> Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/about" style={{color:"white"}}>
              <i className="fa fa-info fa-lg" /> About
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/contact" style={{color:"white"}}>
              <i className="fa fa-address-card fa-lg" /> Contact
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/services" style={{color:"white"}}>
              <i className="fa-solid fa-screwdriver-wrench fa-lg" /> services
            </Link>
          </NavItem>
          
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;