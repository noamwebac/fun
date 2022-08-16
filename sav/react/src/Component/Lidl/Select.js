import React from "react";
import { Component } from "react";
import {
    Card
} from "react-bootstrap";

export class Select extends Component {
    render() {
        return(
            <div>
                <Card>
                    <Card.Title><h2>Selectionnez la raison de votre demande.</h2></Card.Title>
                    <Title>Choisissez votre type d'appareil dans la liste ci-dessous.</Title>
                    <Card.Body>
                        <Card.Text>
                            Vous trouverez via cette page l'accès aux pièces détachées, aux manuels, aux tests des appareils ainsi qu'à la FAQ de LIDL. C'est un annuaire de liens utiles pour vous guider.
                            Pour trouvez les informations que vous désirez, munissez vous du numéro IAN à 6 chiffres permettant de définir un article précis, il est indiqué sur le ticket de caisse à la ligne du produit ou bien sur l'étiquette signalétique de chaque appareil,
                            Avec ce numéro vous trouverez alors toutes les informations qu'il vous faut!
                            Cet outil est évolutif et ne stock aucune information vous concernant.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}