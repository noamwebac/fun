import React from "react";
import { Component } from "react";
import {
    Carousel,
    Accordion,
    Card,
    Button,
    CardGroup
} from "react-bootstrap";
import '../App.css';

export class Body extends Component {
    render() {
        return(
            <div>
                {/*Carousel présentation picture*/}
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
                {/*Card présentation boutique*/}
                <div id="container-card">
                    <Card id="card">
                        <Card.Header><h1>La qualité par l'expérience à votre service</h1></Card.Header>
                        <Card.Body>
                            <h2>Une expérience de tous les jours</h2>
                            Bienvenue sur le site Internet d'SAV03, vous retrouverez nos secteurs de compétances.
                            <br/>
                            Vous trouverez également un nouvel outil pour les Clients LIDL.<br/>
                            <br/>
                            Vous avez acheté un appareil fabriqué par la société GRIZZLY Tools,
                            <br/>
                            dans un magain LIDL en France,
                            <br/>
                            rendez-vous sur notre nouvel outil (menu LIDL) pour trouver les pièces détachées et accessoires. N'attendez plus!
                            <br/>
                            <h3>Vous changez, SAV03 aussi</h3>
                        </Card.Body>
                    </Card>
                </div>
                {/*Carousel produits*/}
                <div>
                <Carousel id="carousel">
                        <Carousel.Item id="item">
                            <Card id="card-carousel">
                                <Card.Img id="image-carousel" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pls%203000%20a1.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card id="card-carousel">
                                <Card.Img id="image-carousel" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/e7c3803795b6037556d07193a4244f4c.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card id="card-carousel">
                                <Card.Img id="image-carousel"  variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/phsa%2020-li%20a1-%20311706.jpg"/>
                                <Card.Body>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card id="card-carousel">
                                <Card.Img id="image-carousel" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/phs%20600%20a1.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card id="card-carousel">
                                <Card.Img id="image-carousel" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/phsl.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card id="card-carousel">
                                <Card.Img id="image-carousel" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/fbs.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card id="card-carousel">
                                <Card.Img id="image-carousel" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pkga%2040-li%20a1.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card id="card-carousel">
                                <Card.Img id="image-carousel" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pwsa%2012%20b1%20-%20ian%20312027.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card id="card-carousel">
                                <Card.Img id="image-carousel" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/plka%204%20a1.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card id="card-carousel">
                                <Card.Img id="image-carousel" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/prma%2040%20li%20a1%20-%20311518.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card id="card-carousel">
                                <Card.Img id="image-carousel" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pbsa%2012%20c2.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card id="card-carousel">
                                <Card.Img id="image-carousel" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pha%2012%20a1%20-%20312203.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    </Carousel>      
                </div>
                {/*Card présentation entreprise*/}
                <div id="card-text" className="d-flex justify-content-between">
                        <Card id="cardgroup">
                            <Card.Header id="card-header"><h3>Une structure dédiée</h3></Card.Header>
                            <Card.Body id="card-body">
                            SAV03 gère le service après-vente des appareils fabriqués par la société GRIZZLY Tools pour la France.<br/>
                            <br/>
                            Pour servir au mieux nos Clients, nous avons notre propre centre d'appels, service de préparation de commandes mais aussi un service technique.
                            </Card.Body>
                        </Card>
                        <Card id="cardgroup">
                            <Card.Header id="card-header"><h3>Des prestations uniques</h3></Card.Header>
                            <Card.Body id="card-body">
                            * Société de sercice après-vente pour GRIZZLY Tools,
                            <br/>
                            * Prestations motoculture avec plus de 30 agréments,
                            <br/>
                            * Nous réalisons des prises en charge sous et hors garantie pour les grandes distributions,
                            <br/>
                            * Prestations informatiques éco-responsable (appareils reconditionnés),
                            <br/>
                            * Disponible chaque jours de la semaine hors jours férié uniquement.
                            </Card.Body>
                        </Card>
                        <Card id="cardgroup">
                            <Card.Header id="card-header"><h3>Une expérience évolutive</h3></Card.Header>
                            <Card.Body id="card-body">
                            Soucieux de la qualité de prestation, nous travaillons chaque jour à améliorer nos prestations. Vos feedbacks nous permettent d'être au plus près de vos besoins.
                            </Card.Body>
                        </Card>
                </div>
            </div>
        );
    }
}