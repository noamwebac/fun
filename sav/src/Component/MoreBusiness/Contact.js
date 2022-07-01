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
                <Card>
                    <Card.Header id="card-title"><h4>Contactez-nous pour toute question particulière, nous traiterons votre demande sans délais</h4></Card.Header>
                </Card>
                <Card>
                    <Card.Body>
                        <h4 style={{ marginBottom: '20px'}}>Contactez nous par téléphone au 04 70 48 13 20</h4>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nom et Prénom</Form.Label>
                                <Form.Control id="contact-input" type="text" placeholder="Nom Prénom"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control id="contact-input" type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Numéro de téléphone</Form.Label>
                                <Form.Control id="contact-input" type="phone" placeholder="Numéro de téléphone"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
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
                                <Form.Label>Votre message</Form.Label>
                                <Form.Control style={{ width: '500px', height: '200px'}} type="textarea" placeholder="votre message"/>
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