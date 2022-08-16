import React from "react";
import { Component } from "react";
import {
    Card
} from "react-bootstrap";

export class Experience extends Component {
    render() {
        return (
             <div className="d-flex justify-content-around">
                <Card id="card-structure">
                    <Card.Header><h2>Une structure dédiée</h2></Card.Header>
                    <Card.Body>
                        <Card.Text>SAV03 possède un atelier complet et dédié avec tout le nécessaire pour réaliser l'ensemble des prestations.<br/> 
                                    Notre service technique reste au fait des nouveautés via les formations proposées par les plus grandes marques.</Card.Text>
                    </Card.Body>
                </Card>
                <Card id="card-structure">
                    <Card.Header><h2>Des prestations uniques</h2></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            * Société de sercice après-vente pour GRIZZLY Tools,<br/>
                            * Prestations motoculture avec plus de 30 agréments,<br/>
                            * Nous réalisons des prises en charge sous et hors garantie pour les grandes distributions,<br/>
                            * Prestations informatiques éco-responsable (appareils reconditionnés),<br/>
                            * Disponible chaque jours de la semaine hors jours férié uniquement.<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card id="card-structure">
                    <Card.Header><h3 style={{ fontSize: '1.9rem'}}>Une expérience évolutive</h3></Card.Header>
                    <Card.Body>
                        <Card.Text>Soucieux de la qualité de prestation, nous travaillons chaque jour à améliorer nos prestations. Vos feedbacks nous permettent d'être au plus près de vos besoins.</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}