import React from "react";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    NavDropdown,
    Container,
    Navbar,
    Nav,
    Button,
    NavbarBrand,
} from 'react-bootstrap';

export class Navigate extends Component {
    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark" style={{ height: '100px'}}>
                    <Container className="d-flex justify-content-center">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href="/Home" id="title" className="text-grey"><h1>Accueil</h1></Nav.Link>
                            </Nav>
                            <Nav id="menu">
                                <NavDropdown title="Boutique en ligne" className="dropdown" variant="dark" menuVariant="dark" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Aide">Aide & Support</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link" className="text-grey"><h2>Lidl</h2></Nav.Link>
                                <NavDropdown title="Motoculture" variant="light" className="dropdown-lg" menuVariant="dark" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav id="nav-contact">
                                <NavbarBrand id="number" className="text-white"><h4>TEL: 04 70 48 13 20</h4></NavbarBrand>
                                <Button variant="success"><h4>Contact</h4></Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}