import React from "react";
import { Component } from "react";
import {
    Card
}  from "react-bootstrap";

export class Partenaire extends Component {
    render() {
        return(
            <div>
                <div>
                    <div style={{ textAlign: 'center', marginBottom: '50px', marginTop: '100px'}}>
                        <h1>Nos partenaires</h1>
                    </div>
                    <div className="d-flex justify-content-around">    
                        <Card id="icon-partenaire">
                            <Card.Img id="part-image" src="https://sav03.fr/wa_images/000143880_2_mobile.jpg?v=1go4q90"></Card.Img>
                        </Card>
                        <Card id="icon-partenaire">
                            <Card.Img id="part-image" src="https://www.batiactu.com/images/auto/1200-900-m/20161221_105951_castorama.jpeg"></Card.Img>
                        </Card>
                        <Card id="icon-partenaire">
                            <Card.Img id="part-image" src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/Logo_Carrefour.svg/958px-Logo_Carrefour.svg.png"></Card.Img>
                        </Card>
                    </div>
                    <div className="d-flex justify-content-around" style={{ marginTop: '50px', marginBottom: '100px'}}>
                        <Card id="icon-partenaire">
                            <Card.Img id="part-image" src="https://sav03.fr/wa_images/logo-Leclerc-1170x946.jpg?v=1go4q90"></Card.Img>
                        </Card>
                        <Card id="icon-partenaire">
                            <Card.Img style={{ width: '300px'}} src="https://www.dreamjob.ma/wp-content/uploads/2021/06/Mr.-Bricolage-Emploi-Recrutement.png"></Card.Img>
                        </Card>
                        <Card id="icon-partenaire">
                            <Card.Img style={{ width: '300px', marginTop: '50px'}} src="https://upload.wikimedia.org/wikipedia/fr/archive/2/22/20100107092431%21Bricomarch%C3%A9_logo_2009.png"></Card.Img>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}