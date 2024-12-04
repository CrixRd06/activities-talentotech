import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const AppNavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="s">Pokemon Crud</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};