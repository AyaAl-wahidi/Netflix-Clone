import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import "./Navbar.css"; 

function Navbar() {
  return (
    <BootstrapNavbar>
      <Nav>
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/favorites">Favorites</Link>
        </Nav.Item>
      </Nav>
    </BootstrapNavbar>
  );
}

export default Navbar;
