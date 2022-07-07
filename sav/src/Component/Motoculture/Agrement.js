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
                <Card>
                    <Card.Header><h2>Profitez de nos 38 agréments et trouvez la réponse à votre problématique</h2></Card.Header>
                    <Card.Body>
                        <Card.Text>Nous travaillons exclusivement avec des professionnels et également avec de la pièce d'origine constructeur.</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h3>Clients professionnels:</h3></Card.Header>
                    <Card.Body>
                        <Card.Text>Externalisez votre service après-vente Motoculture grâce à notre équipe et notre expérience, contactez nous pour plus d'informations.</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h3>Clients particuliers:</h3></Card.Header>
                    <Card.Body>
                        <Card.Text>Vous recherchez une pièce détachée pour un appareil acheté chez nos partenaires, contactez nous et nous vous guiderons dans cette démarche.</Card.Text>
                    </Card.Body>
                </Card>
                <img src="https://sav03.fr/wa_files/image2.jpg"></img>
                <div>
                    <Card>
                        <Card.Img src="https://sav03.fr/wa_images/000143880_2_mobile.jpg?v=1go4q90"></Card.Img>
                        <Card.Img src="https://sav03.fr/wa_images/castorama-logo-1.png.jpg?v=1go4q90"></Card.Img>
                        <Card.Img src="https://sav03.fr/wa_images/logo-carrefour.jpg?v=1go4q90"></Card.Img>
                        <Card.Img src="https://sav03.fr/wa_images/logo-Leclerc-1170x946.jpg?v=1go4q90"></Card.Img>
                        <Card.Img src="https://sav03.fr/wa_images/mrb.jpg?v=1go4q90"></Card.Img>
                        <Card.Img src="https://sav03.fr/wa_images/p-b7ggYQ_400x400.jpg?v=1go4q90"></Card.Img>
                    </Card>
                </div>
                <Card>
                    <Card.Header><h2>Une structure dédiée</h2></Card.Header>
                    <Card.Body>
                        <Card.Text>SAV03 possède un atelier complet et dédié avec tout le nécessaire pour réaliser l'ensemble des prestations, notre service technique reste au fait des nouveautés via les formations proposées par les plus grandes marques.</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h2>Des prestations uniques</h2></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            * Société de sercice après-vente pour GRIZZLY Tools,
                            * Prestations motoculture avec plus de 30 agréments,
                            * Nous réalisons des prises en charge sous et hors garantie pour les grandes distributions,
                            * Prestations informatiques éco-responsable (appareils reconditionnés),
                            * Disponible chaque jours de la semaine hors jours férié uniquement.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h2>Une expérience évolutive</h2></Card.Header>
                    <Card.Body>
                        <Card.Text>Soucieux de la qualité de prestation, nous travaillons chaque jour à améliorer nos prestations. Vos feedbacks nous permettent d'être au plus près de vos besoins.</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}