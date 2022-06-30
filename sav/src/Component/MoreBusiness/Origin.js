import React from "react";
import { Component } from "react";
import {
    Card
} from "react-bootstrap";
import "../../App.css";

export class Origin extends Component {
    render() {
        return(
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
        );
    }
}