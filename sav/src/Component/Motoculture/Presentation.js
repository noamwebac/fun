import React from "react";
import { Component } from "react";
import {
    Card
} from "react-bootstrap";

export class Presentation extends Component {
    render() {
        return(
            <div>
                <Card>
                    <div className="d-flex justify-content-around">
                        <Card style={{ borderStyle: 'none', marginTop: '150px'}}>
                            <img style={{ width: '400px', height: '200px'}} src="https://www.sav03.shop/img/sav03-logo-1650785360.jpg"/>
                        </Card>
                        <Card style={{ width: '700px', marginBottom: '100px', marginTop: '100px'}}>
                            <Card.Title><h1>Présentation :</h1></Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    La société a été fondée en 2013 par un associé unique sous le nom "SAV03.fr"' à SOUVIGNY dans l'ALLIER à 10km de Moulins.<br/>
                                    En collaboration avec la société GRIZZLY Tools, SAV03 réalise le service après-vente et la vente des pièces détachées des appareils vendu en magasin LIDL au niveau national.<br/>
                                    L'entreprise réalise également le support technique et la réparation sous garantie et hors garantie des appareils de jardinage et outillage pour les grandes distribution telles que Mr BRICOLAGE, Brico marché, Brico Dépôt, Castorama, E.LECLERC grâce à plus de 30 agréments des plus grandes marques.<br/>
                                    L'entreprise réalise enfin des prestations informatique avec un engagement important pour le reconditionné, le meilleur rapport qualité/prix.<br/> 
                                    Une entreprise dynamique qui performe chaque jour avec une équipe dynamique.<br/> 
                                    Il existe un accueil Client au comptoir pour les désireux de venir chercher des pièces ou des appareils. Venez visiter !<br/>                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Card>
            </div>
        );
    }
}