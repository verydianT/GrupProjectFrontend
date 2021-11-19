import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../page/routes";
import { useCount } from "../context/wishlistContext";

const NaviBar = () => {
    const count = useCount();

    return(
        <Navbar bg="light" expand="lg">
            <Container className="d-flex">
                <Navbar.Brand>
                    <Link to="/home" style={{ textDecoration: "none" ,color: 'black'}}>
                    Baliness
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav 
                    className="me-auto my-2 my-lg-0" 
                    style={{ maxHeight: '100px' }}>
                </Nav>
                <Nav>
                    <NavDropdown title="Wisata" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <Link to="/wisata1" style={{ textDecoration: "none", color: "black" }}>
                        Nusa Penida
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to="/wisata1" style={{ textDecoration: "none", color: "black" }}>
                        Ubud
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to="/wisata1" style={{ textDecoration: "none", color: "black" }}>
                        Kuta
                        </Link>
                    </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Kuliner" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <Link to="/kuliner" style={{ textDecoration: "none", color: "black" }}>
                        Sate Lilit
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to="/kuliner" style={{ textDecoration: "none", color: "black" }}>
                        Nasi Jinggo
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to="/kuliner" style={{ textDecoration: "none", color: "black" }}>
                        Ayam Betutu
                        </Link>
                    </NavDropdown.Item>
                    </NavDropdown>
                    <p style={{ margin: "8px" }}>Wishlist: {count.state.count}</p>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NaviBar;