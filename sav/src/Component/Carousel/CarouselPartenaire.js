import React from "react";
import { Component } from "react";
import {
    Carousel,
    Card
} from "react-bootstrap";

export class CarouselPartenaire extends Component {
    render() {
        return(
            <div>
                <Carousel variant="dark" style={{ marginBottom: '100px', marginTop: '100px'}}>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            <Card id="icon-partenaire">
                                <a href="https://www.bricodepot.fr/catalogue/outillage-quincaillerie/outillage/">
                                    <Card.Img id="part-image" src="https://sav03.fr/wa_images/000143880_2_mobile.jpg?v=1go4q90"></Card.Img>
                                </a>
                            </Card>                
                            <Card id="icon-partenaire">
                                <a href="https://www.castorama.fr/outillage/cat_id_1584.cat">
                                    <Card.Img id="part-image" src="https://www.batiactu.com/images/auto/1200-900-m/20161221_105951_castorama.jpeg"></Card.Img>
                                </a>
                            </Card>
                            <Card id="icon-partenaire">
                                <a href="https://www.carrefour.fr/r/jardin-amenagement-dexterieur/outillage/outillage-motorise">
                                    <Card.Img id="part-image" src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/Logo_Carrefour.svg/958px-Logo_Carrefour.svg.png"></Card.Img>
                                </a>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around">
                            <Card id="icon-partenaire">
                                <a href="https://www.maisonetloisirs.leclerc/outil-jardinage">
                                    <Card.Img id="part-image" src="https://sav03.fr/wa_images/logo-Leclerc-1170x946.jpg?v=1go4q90"></Card.Img>
                                </a>
                            </Card>
                            <Card id="icon-partenaire">
                                <a href="https://www.mr-bricolage.fr/Langeais/jardin/entretenir-le-jardin/tondre-et-couper.html">
                                    <Card.Img style={{ width: '300px'}} src="https://www.dreamjob.ma/wp-content/uploads/2021/06/Mr.-Bricolage-Emploi-Recrutement.png"></Card.Img>
                                </a>
                            </Card>
                            <Card id="icon-partenaire">
                                <a href="https://www.bricomarche.com/c/entretien-du-jardin/outil-motorise-du-jardin/tondeuse-autoportee-et-robot-tondeuse/130257">
                                    <Card.Img style={{ width: '300px', marginTop: '50px'}} src="https://upload.wikimedia.org/wikipedia/fr/archive/2/22/20100107092431%21Bricomarch%C3%A9_logo_2009.png"></Card.Img>
                                </a>
                            </Card>
                        </div>
                    </Carousel.Item>
                </Carousel>    
            </div>
        );
    }
}