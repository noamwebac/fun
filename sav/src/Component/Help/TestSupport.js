import React from "react";
import {
    Accordion,
    Form,
    Card,
    Button
} from "react-bootstrap";

export function TestSupport() {
    return(
        <div>
            <Card style={{ width: '600px', marginRight: 'auto', marginLeft: 'auto', marginTop: '100px',marginBottom: '100px'}}>
                <Card.Header>Un soucis sur une commande ou une livraison vous pouvez nous contactez</Card.Header>
            </Card>
            <Accordion>
                <Accordion.Item style={{ width: '500px', marginRight: 'auto', marginLeft: 'auto'}} eventKey="0">
                    <Accordion.Header>Un soucis sur une commande ou une livraison vous pouvez nous contactez</Accordion.Header>
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
                                    <Form.Label>Référence de la commande:</Form.Label>
                                    <Form.Control type="text" placeholder="Password"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Référence de la pièce:</Form.Label>
                                    <Form.Control type="text" placeholder="Password"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Date de la commande:</Form.Label>
                                    <Form.Control type="date"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Explication de votre soucis:</Form.Label>
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
    );
}