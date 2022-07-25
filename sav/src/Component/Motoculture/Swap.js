import React from "react";
import { Component } from "react";
import {
    Card
} from "react-bootstrap";

export class Swap extends Component {
    render() {
        return(
            <div>
                <Card style={{ borderStyle: 'none', marginTop: '100px', marginBottom: '200px', alignItems: 'center'}}>
                    <img style={{ width: '1000px', height: '300px'}} src="https://sav03.fr/wa_images/logo-swap-nouvelle-charte.png?v=1go4qci"/>
                </Card>
            </div>
        );
    }
}