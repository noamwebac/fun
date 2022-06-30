import React from "react";
import { Component } from "react";

export class Map extends Component {
    render() {
        return(
            <div>
                <Card>
                    <Card.Header style={{ textAlign: 'center'}}><h1>Informations</h1></Card.Header>
                    <Card.Body>
                        <Card.Text style={{ textAlign: 'center'}}>
                        Nous vous accueillons du Lundi au Vendredi à partir de 8h30 jusqu'à 18h sans interruption.
                        Vous pouvez vous rendre à notre accueil  à l'entreprise à l'adresse suivante: Zone d'activité de la Verrerie - 03210 SOUVIGNY
                        Saisissez 3 route de cosne, 03210 souvigny sur votre GPS
                        </Card.Text>
                        <div style={{ textAlign: 'center'}} dangerouslySetInnerHTML={{__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d87798.59814999712!2d3.1814791637598634!3d46.55349856694695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Zone%20d&#39;activit%C3%A9%20de%20la%20Verrerie%20-%2003210%20SOUVIGNY!5e0!3m2!1sfr!2sfr!4v1656420138268!5m2!1sfr!2sfr" width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'}}/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}