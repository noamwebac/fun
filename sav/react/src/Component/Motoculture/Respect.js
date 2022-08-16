import React from "react";
import { Component } from "react";
import{
    Card
} from "react-bootstrap";

export class Respect extends Component {
    render() {
        return(
            <div>
                <div>
                    <h1 style={{ textAlign: 'center'}}>Respect & Qualité</h1>
                    <h3 style={{ textAlign: 'center', marginTop: '50px'}}>Travailler avec plaisir</h3>
                </div>
                <div>
                    <Card style={{ marginRight: 'auto', marginLeft: 'auto', width: '1200px', marginBottom: '30px', marginTop: '30px'}}>
                        <Card.Body>
                            <Card.Text> 
                                Pour nous permettre une prise en charge rapide et efficace, nous vous demandons quelques conditions indiqué dans la procédure que vous avez reçu par téléphone ou e-mail.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ marginRight: 'auto', marginLeft: 'auto', width: '1200px'}}>
                        <Card.Body>
                            <Card.Text>
                                Nous vous rappelons que les appareils doivent être nettoyer, si nous vous l'indiquons, c'est parce que nous avons encore des cas non respectueux. Pensez à nous!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="d-flex justify-content-around">
                    <Card id="card-respect">
                        <Card.Img style={{ width: '400px', height: '500px'}} src="https://sav03.fr/wa_images/img_4348.jpg?v=1h4ouac"></Card.Img>
                    </Card>
                    <Card id="card-respect">
                        <Card.Img style={{ width: '400px', height: '500px'}} src="https://sav03.fr/wa_images/agrements.jpg?v=1eomk1r"></Card.Img>
                    </Card>
                </div>
            </div>
        );
    }
}