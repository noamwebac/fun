import React from "react";
import { Component } from "react";
 export class CarouselProduct extends Component {
    render() {
        return(
            <div id="product-carousel">
                <Card style={{ border: 'none'}}>
                    <Card.Header id="card-title"><h1>Nos produits phare</h1></Card.Header>
                </Card>
                <Carousel variant="dark" id="car">
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            <Card id="card-produits" style={{ marginLeft: '150px'}}>
                                <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pls%203000%20a1.jpg"/>
                                <Card.Body>
                                    <Card.Title id="title-carousel">Card Title</Card.Title>
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
                                    <Card.Title id="title-carousel">Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title-carousel-carousel and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Détails</Button>
                                </Card.Body>
                            </Card>
                            <Card id="card-produits" style={{ marginRight: '150px'}}>
                                <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/phsa%2020-li%20a1-%20311706.jpg"/>
                                <Card.Body>
                                    <Card.Title id="title-carousel">Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title-carousel and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Détails</Button>
                                </Card.Body>
                            </Card>
                        </div>            
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            <Card id="card-produits" style={{ marginLeft: '150px'}}>
                                <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/phs%20600%20a1.jpg"/>
                                <Card.Body>
                                    <Card.Title id="title-carousel">Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title-carousel and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Détails</Button>
                                </Card.Body>
                            </Card>
                            <Card id="card-produits">
                                <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/phsl.jpg"/>
                                <Card.Body>
                                    <Card.Title id="title-carousel">Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title-carousel and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Détails</Button>
                                </Card.Body>
                            </Card>
                            <Card id="card-produits" style={{ marginRight: '150px'}}>
                                <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/fbs.jpg"/>
                                <Card.Body>
                                    <Card.Title id="title-carousel">Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title-carousel and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Détails</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            <Card id="card-produits" style={{ marginLeft: '150px'}}>
                                <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pkga%2040-li%20a1.jpg"/>
                                <Card.Body>
                                    <Card.Title id="title-carousel">Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title-carousel and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Détails</Button>
                                </Card.Body>
                            </Card>
                            <Card id="card-produits">
                                <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pwsa%2012%20b1%20-%20ian%20312027.jpg"/>
                                <Card.Body>
                                    <Card.Title id="title-carousel">Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title-carousel and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Détails</Button>
                                </Card.Body>
                            </Card>
                            <Card id="card-produits" style={{ marginRight: '150px'}}>
                                <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/plka%204%20a1.jpg"/>
                                <Card.Body>
                                    <Card.Title id="title-carousel">Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title-carousel and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Détails</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            <Card id="card-produits" style={{ marginLeft: '150px'}}>
                                <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/prma%2040%20li%20a1%20-%20311518.jpg"/>
                                <Card.Body>
                                    <Card.Title id="title-carousel">Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title-carousel and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Détails</Button>
                                </Card.Body>
                            </Card>
                            <Card id="card-produits">
                                <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pbsa%2012%20c2.jpg"/>
                                <Card.Body>
                                    <Card.Title id="title-carousel">Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title-carousel and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Détails</Button>
                                </Card.Body>
                            </Card>
                            <Card id="card-produits" style={{ marginRight: '150px'}}>
                                <Card.Img id="card-image" variant="top" src="https://sav03.fr/wa_p_albums/p_album_k0xj3q3h0/k0xj2swn6c24l4/pha%2012%20a1%20-%20312203.jpg"/>
                                <Card.Body>
                                    <Card.Title id="title-carousel">Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title-carousel and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="success">Détails</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>     
                </Carousel>
            </div>
        );
    }
 }