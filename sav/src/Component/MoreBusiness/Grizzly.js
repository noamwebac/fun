import React from "react";
import { Component } from "react";
import {
    Card,
    Accordion
} from "react-bootstrap";

export class Grizzly extends Component {
    render() {
        return(
            <div id="card-grizzly" className="d-flex justify-content-around">
                <Card>
                    <Card.Body>
                    <Card.Img variant="top" style={{ height: '200px', width: '400px'}} src="https://sav03.fr/wa_images/grizzly%20logo%20mit%20tatze%20transparent_ohne(r)_rgb.jpg?v=1fqkfv7" />
                        <Card.Title style={{ marginTop: '50px'}}>Présentation</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Accordion>
                            <Accordion.Item>
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body style={{ textAlign: 'left'}}>
                                La société a été fondée en 1998 par les associés généraux sous le nom "Grizzly Gartengeräte GmbH & Co. KG" à Groß-Umstadt, dans le sud de la Hesse. <br/> 
                                En collaboration avec un certain nombre de fabricants italiens de machines de jardinage, il était prévu de fournir au marché allemand du jardinage et des loisirs des outils de jardinage innovants et abordables. <br/> 
                                La société a depuis lors connu une croissance rapide et figure aujourd'hui parmi les principales entreprises d'importation européennes sur le marché du jardinage et des loisirs.<br/> 
                                La société change et devient GRIZZLY TOOLS.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                </Card>
            </div>    
        );
    }
}