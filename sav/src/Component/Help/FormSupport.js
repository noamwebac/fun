import React from "react";
import { Component } from "react";
import {
    Card,
    Accordion,
    Form,
    Button
} from "react-bootstrap";
import { DiAptana } from "react-icons/di";
import { BsCartXFill } from "react-icons/bs";
import { BsFillBagXFill } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { TbPackageOff } from "react-icons/tb";

export class FormSupport extends Component {
    render() {
        return(
            <div>
                <div style={{ marginTop: '100px'}}>
                    <h2 id="title-accordion-help">Pièces sur la boutique en ligne</h2>
                    <div className="d-flex justify-content-around">
                        <Accordion>
                            <Accordion.Item id="first-accordion" eventKey="0">
                                <Accordion.Header><DiAptana style={{ marginRight: '20px'}} size={40}/>Plus d'informations sur une pièce ?</Accordion.Header>
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
                            <Accordion.Item id="first-accordion" eventKey="0">
                                <Accordion.Header><BsCartXFill style={{ marginRight: '20px'}} size={30}/>Rupture de stock & Réapprovisionnement</Accordion.Header>
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
                <div>
                    <h2 id="title-accordion-help">Commandes sur la boutique en ligne</h2>
                    <div className="d-flex justify-content-around">                   
                        <Accordion>
                            <Accordion.Item id="first-accordion" eventKey="0">
                                <Accordion.Header><BsFillBagXFill style={{ marginRight: '20px'}} size={30}/>Commande erronée ou incomplète</Accordion.Header>
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
                                            <Form.Group>
                                                <Form.Label>Date de la commande:</Form.Label>
                                                <Form.Control type="date"/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Précisions sur votre soucis:</Form.Label>
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
                            <Accordion.Item id="first-accordion" eventKey="0">
                                <Accordion.Header><BsTruck style={{ marginRight: '20px'}} size={40}/>Retour de ma commande</Accordion.Header>
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
                                            <Form.Group>
                                                <Form.Label>Date de la commande:</Form.Label>
                                                <Form.Control type="date"/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Motif de retour:</Form.Label>
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
                    <Accordion>
                        <Accordion.Item id="second-accordion" eventKey="0">
                            <Accordion.Header><TbPackageOff style={{ marginRight: '20px'}} size={40}/>Commande non livrée</Accordion.Header>
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
                                        <Form.Group>
                                            <Form.Label>Date de la commande:</Form.Label>
                                            <Form.Control type="date"/>
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