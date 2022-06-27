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
import '../App.css';

export class Navigate extends Component {
    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark" style={{ height: '150px'}} className="justify-content-center">
                    <Container className="justify-content-center">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="justify-content-center">
                                <Nav.Link href="#home" id="title" className="text-white"><h1>Accueil</h1></Nav.Link>
                            </Nav>
                            <Nav id="menu" className="justify-content-center">
                                <NavDropdown title="Boutique en ligne" className="dropdown" variant="dark" menuVariant="dark" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link" className="text-white"><h2>Lidl</h2></Nav.Link>
                                <NavDropdown title="Motoculture" variant="light" className="dropdown-lg" menuVariant="dark" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="justify-content-center" id="nav-contact">
                                <Nav id="number" className="text-white"><h4>TEL: 04 70 48 13 20</h4></Nav>
                                <Button variant="success"><h4>email</h4></Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}