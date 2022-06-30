import React from "react";
import { Component } from "react";

export class Presentation extends Component {
    render() {
        return(
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
        );
    }
}