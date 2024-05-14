import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return (
        <Nav>
            <Nav.Item>
                <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/favorites">Favorites</Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;
