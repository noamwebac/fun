import React from "react";
import { Component } from "react";
import {
    Card
} from "react-bootstrap";

export class Picture extends Component {
    render() {
        return(
            <div>
                <Card>
                    <Card.Img style={{ height: '700px'}} src="https://images.pexels.com/photos/4503823/pexels-photo-4503823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </Card>
                <Card>
                    <Card.Title style={{ textAlign: 'center'}}><h1>Votre demande concerne LIDL</h1></Card.Title>
                </Card>
            </div>
        );
    }
}