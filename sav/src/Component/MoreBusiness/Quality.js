import React from "react";
import { Component } from "react";
import {
    Card
} from "react-bootstrap";
import "../../App.css";

export class Quality extends Component {
    render() {
        return(
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
        );
    }
}