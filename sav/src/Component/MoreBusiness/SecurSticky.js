import React from "react";
import { Component } from "react";
import {
    Card,
    CloseButton
} from "react-bootstrap";


export class SecurSticky extends Component {
    render() {
        return(
            <div>
                <Card id="card-sticky">
                    <CloseButton id="button-close"/>
                    <Card.Img id="secur-sticky" src="https://www.laplateforme.com/cms/i?o=%2Fsites%2Fdefault%2Ffiles%2Finline-images%2F3d-secure.jpg"/>
                </Card>
            </div>
        );
    }
}