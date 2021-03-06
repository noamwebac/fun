import React from "react";
import { Component } from "react";
import {
    Card
} from "react-bootstrap";

export class Agrement extends Component {
    render() {
        return(
            <div>
                <div id="agre">
                </div>
                <div>
                    <Card id="agrement">
                        <Card.Header><h4 id="title-partenaire">Profitez de nos 38 agréments et trouvez la réponse à votre problématique</h4></Card.Header>
                        <Card.Body>
                            <Card.Text style={{ fontSize: '15px', textAlign: 'center'}}>Nous travaillons exclusivement avec des professionnels et également avec de la pièce d'origine constructeur.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="d-flex justify-content-around">
                    <Card id="card-partenaire">
                        <Card.Header><h3>Clients professionnels:</h3></Card.Header>
                        <Card.Body>
                            <Card.Text>Externalisez votre service après-vente Motoculture grâce à notre équipe et notre expérience, contactez nous pour plus d'informations.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card id="card-partenaire">
                        <Card.Header><h3>Clients particuliers:</h3></Card.Header>
                        <Card.Body>
                            <Card.Text>Vous recherchez une pièce détachée pour un appareil acheté chez nos partenaires, contactez nous et nous vous guiderons dans cette démarche.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ textAlign: 'center', marginTop: '100px', marginBottom: '200px'}}>
                    <img style={{ width: '1000px'}} src="https://sav03.fr/wa_files/image2.jpg"></img>
                </div>
            </div>
        );
    }
}