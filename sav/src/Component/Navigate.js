import React from "react";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    NavDropdown,
    Container,
    Navbar,
    Nav,
    Button,
} from 'react-bootstrap';

export class Navigate extends Component {
    render() {
        return(
            <div>
                <Navbar bg="dark" style={{ height: '150px'}}>
                    <Container>
                        <Navbar.Brand href="#home" className="text-white"><h1>SAV 03</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className="text-white"><h1>Accueil</h1></Nav.Link>
                                <NavDropdown title="dropdown"  className="dropdown-lg" menuVariant="dark" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link" className="text-white"><h1>Lidl</h1></Nav.Link>
                                <NavDropdown title="dropdown"  className="dropdown-lg" menuVariant="dark" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" className="text-white"><h3>Erreur de paiement en ligne ? suivez notre guide.</h3></Nav.Link>
                                <Nav className="text-white"><h1>TEL: 04 70 48 13 20</h1></Nav>
                                <Button variant="success"><h4>email</h4></Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}