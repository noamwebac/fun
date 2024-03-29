import React from "react";
import { Component } from "react";
import {
    Card,
    Form,
    Button
} from "react-bootstrap";

export class Contact extends Component {
    render() {
        return(
            <div id="contact">
                <Card id="card-contact">
                    <Card.Header><h4>Contactez-nous pour toute question particulière, nous traiterons votre demande sans délais</h4></Card.Header>
                </Card>
                <Card id="card-card-contact" style={{ border: 'none'}} className="d-flex justify-content-around">
                    <Card.Body>
                        <h4>Contactez nous par téléphone au 04 70 48 13 20</h4>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nom et Prénom:</Form.Label>
                                <Form.Control id="contact-input" type="text" placeholder="Nom Prénom"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address:</Form.Label>
                                <Form.Control id="contact-input" type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Numéro de téléphone:</Form.Label>
                                <Form.Control id="contact-input" type="phone" placeholder="Numéro de téléphone"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Raison de votre demande</Form.Label>
                                <Form.Select id="contact-input" aria-label="Default select example">
                                <option>Raison de votre demande</option>
                                <option value="1">SAV LIDL</option>
                                <option value="2">Motoculture</option>
                                <option value="3">Informatique</option>
                                <option value="4">Piece d'étachée</option>
                                <option value="5">Divers</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Votre message:</Form.Label>
                                <Form.Control style={{ width: '600px', height: '100px', marginBottom: '30px'}} as="textarea" type="textarea" placeholder="votre message"/>
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>    
        );
    }
}