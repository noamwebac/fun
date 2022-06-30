import React from "react";
import { Component } from "react";
import {
    Carousel,
    Accordion,
    Card,
    Button,
    Form
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
                <div id="product-carousel">
                    <Card style={{ border: 'none'}}>
                        <Card.Header id="card-title"><h1>Nos produits phare</h1></Card.Header>
                    </Card>
                    <Carousel variant="dark" id="car">
                        <Carousel.Item>
                            <div className="d-flex justify-content-around">
                                <Card id="card-produits">
                                    <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pls%203000%20a1.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="success">Détails</Button>
                                    </Card.Body>
                                </Card>
                                <Card id="card-produits">
                                    <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/e7c3803795b6037556d07193a4244f4c.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="success">Détails</Button>
                                    </Card.Body>
                                </Card>
                                <Card id="card-produits">
                                        <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/phsa%2020-li%20a1-%20311706.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="success">Détails</Button>
                                    </Card.Body>
                                </Card>
                            </div>            
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex justify-content-around">
                                <Card id="card-produits">
                                    <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/phs%20600%20a1.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="success">Détails</Button>
                                    </Card.Body>
                                </Card>
                                <Card id="card-produits">
                                    <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/phsl.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="success">Détails</Button>
                                    </Card.Body>
                                </Card>
                                <Card id="card-produits">
                                    <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/fbs.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="success">Détails</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex justify-content-around">
                                <Card id="card-produits">
                                    <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pkga%2040-li%20a1.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="success">Détails</Button>
                                    </Card.Body>
                                </Card>
                                <Card id="card-produits">
                                    <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pwsa%2012%20b1%20-%20ian%20312027.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="success">Détails</Button>
                                    </Card.Body>
                                </Card>
                                <Card id="card-produits">
                                    <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/plka%204%20a1.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="success">Détails</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex justify-content-around">
                                <Card id="card-produits">
                                    <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/prma%2040%20li%20a1%20-%20311518.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="success">Détails</Button>
                                    </Card.Body>
                                </Card>
                                <Card id="card-produits">
                                    <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pbsa%2012%20c2.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="success">Détails</Button>
                                    </Card.Body>
                                </Card>
                                <Card id="card-produits">
                                    <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pha%2012%20a1%20-%20312203.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="success">Détails</Button>
                                    </Card.Body>
                                </Card>
                            </div>
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
                {/*card quality*/}
                <div id="card-quality" className="d-flex justify-content-around">
                    <Card>
                        <Card.Header><h1>Des prestations Qualité & Réactivité</h1></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <h2>Un travail de tous les jours</h2>
                                <br/>
                                SAV03 représente la société GRIZZLY Tools et assure le SAV et la vente de pièces détachées pour la France,
                                <br/>
                                Nous vous proposons également la vente des produits finis de marque GRIZZLY Tools dans notre boutique en ligne dont vous avez un aperçu au dessus.
                                <br/>
                                Les appareils sont de très grande qualitées allemande soumis aux plus grandes structures comme GS et TUV. 
                            </Card.Text>
                            <Card.Img variant="footer" src="https://sav03.fr/wa_images/certification-gs_10761%202.jpg?v=1eomk1r"></Card.Img>
                        </Card.Body>
                    </Card>
                </div>
                {/*card grizzly-tools*/}
                <div id="card-grizzly" className="d-flex justify-content-around">
                    <Card>
                        <Card.Body>
                        <Card.Img variant="top" style={{ height: '200px', width: '400px'}} src="https://sav03.fr/wa_images/grizzly%20logo%20mit%20tatze%20transparent_ohne(r)_rgb.jpg?v=1fqkfv7" />
                            <Card.Title style={{ marginTop: '50px'}}>Présentation</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body style={{ textAlign: 'left'}}>
                                    La société a été fondée en 1998 par les associés généraux sous le nom "Grizzly Gartengeräte GmbH & Co. KG" à Groß-Umstadt, dans le sud de la Hesse. En collaboration avec un certain nombre de fabricants italiens de machines de jardinage, il était prévu de fournir au marché allemand du jardinage et des loisirs des outils de jardinage innovants et abordables. La société a depuis lors connu une croissance rapide et figure aujourd'hui parmi les principales entreprises d'importation européennes sur le marché du jardinage et des loisirs. La société change et devient GRIZZLY TOOLS.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </div>
                {/*card nous retrouvez*/}
                <div>
                    <Card>
                        <Card.Header style={{ textAlign: 'center'}}><h1>Informations</h1></Card.Header>
                        <Card.Body>
                            <Card.Text style={{ textAlign: 'center'}}>
                            Nous vous accueillons du Lundi au Vendredi à partir de 8h30 jusqu'à 18h sans interruption.
                            Vous pouvez vous rendre à notre accueil  à l'entreprise à l'adresse suivante: Zone d'activité de la Verrerie - 03210 SOUVIGNY
                            Saisissez 3 route de cosne, 03210 souvigny sur votre GPS
                            </Card.Text>
                            <div style={{ textAlign: 'center'}} dangerouslySetInnerHTML={{__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d87798.59814999712!2d3.1814791637598634!3d46.55349856694695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Zone%20d&#39;activit%C3%A9%20de%20la%20Verrerie%20-%2003210%20SOUVIGNY!5e0!3m2!1sfr!2sfr!4v1656420138268!5m2!1sfr!2sfr" width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'}}/>
                        </Card.Body>
                    </Card>
                </div>
                {/*card contact*/}
                <div>
                    <Card>
                        <Card.Header><h3>Contactez-nous pour toute question particulière, nous traiterons votre demande sans délais</h3></Card.Header>
                        <Card.Body>
                            <h3>Ou contactez nous par téléphone au 04 70 48 13 20</h3>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Nom et Prénom</Form.Label>
                                    <Form.Control type="text" placeholder="Nom Prénom"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Label>Numéro de téléphone</Form.Label>
                                    <Form.Control type="phone" placeholder="Numéro de téléphone"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Select aria-label="Default select example">
                                    <option>Raison de votre demande</option>
                                    <option value="1">SAV LIDL</option>
                                    <option value="2">Motoculture</option>
                                    <option value="3">Informatique</option>
                                    <option value="4">Piece d'étachée</option>
                                    <option value="5">Divers</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button variant="success" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}