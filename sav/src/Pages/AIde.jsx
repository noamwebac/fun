import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import {
    Card,
    Accordion,
    Form,
    Button
} from "react-bootstrap";

export class Aide extends Component {
    render() {
        return(
            <div>
                <Navigate/>
                <div>
                    <Card>
                        <Card.Header><h3> BESOIN D'AIDE & SUPPORT BOUTIQUE EN LIGNE</h3></Card.Header>
                    </Card>
                    <Card>
                        <Card.Header><h2>Selectionnez la raison de votre demande</h2></Card.Header>
                    </Card>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Plus d'informations sur une pièce ?</Accordion.Header>
                            <Accordion.Body>
                                <Card>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Adresse email:</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Nom:</Form.Label>
                                            <Form.Control type="text" placeholder="Password"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Posez votre question:</Form.Label>
                                            <Form.Control id="text-page-aide" as="textarea" type="textarea" placeholder="votre message"/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Card>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Rupture de stock & Réapprovisionnement</Accordion.Header>
                            <Accordion.Body>
                                <Card>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Adresse email:</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Nom:</Form.Label>
                                            <Form.Control type="text" placeholder="Password"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Référence de la pièce:</Form.Label>
                                            <Form.Control type="text" placeholder="Password"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Posez votre question:</Form.Label>
                                            <Form.Control id="text-page-aide" as="textarea" type="textarea" placeholder="votre message"/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Card>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        );
    }
}