import React from "react";
import { Component } from "react";
import {
    Carousel,
    Accordion,
    Card,
    Button
} from "react-bootstrap";
import '../App.css';

export class Body extends Component {
    render() {
        return(
            <div>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src="https://images.pexels.com/photos/47313/tulips-bloom-blossom-colorful-47313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ height: '500px'}} alt="First slide"/>
                            <Carousel.Caption>
                            <h3>Une autre vision du Service Après-Vente</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="d-block w-100" src="https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ height: '500px'}} alt="First slide"/>
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="d-block w-100" src="https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ height: '500px'}} alt="First slide"/>
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div>
                    <Accordion id="accordion-text">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h1>La qualité par l'expérience à votre service</h1></Accordion.Header>
                            <Accordion.Body>
                            <h2>Une expérience de tous les jours</h2>
                            Bienvenue sur le site Internet d'SAV03, vous retrouverez nos secteurs de compétances.
                            <br/>
                            Vous trouverez également un nouvel outil pour les Clients LIDL.
                            <br/>
                            Vous avez acheté un appareil fabriqué par la société GRIZZLY Tools dans un magain LIDL en France,
                            <br/>
                            rendez-vous sur notre nouvel outil (menu LIDL) pour trouver les pièces détachées et accessoires. N'attendez plus!
                            <br/>
                            Vous changez, SAV03 aussi.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div>
                <Carousel id="carousel">
                        <Carousel.Item id="item">
                            <Card style={{ width: '400px'}}>
                                <Card.Img variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pls%203000%20a1.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card style={{ width: '400px' }}>
                                <Card.Img variant="top" src="https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card style={{ width: '400px' }}>
                                <Card.Img variant="top" src="https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    </Carousel>      
                </div>
            </div>
        );
    }
}