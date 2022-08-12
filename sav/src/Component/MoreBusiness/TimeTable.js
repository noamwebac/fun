import React from "react";
import { Component } from "react";
import {
    Card,
    Table
} from "react-bootstrap";

export class TimeTable extends Component {
    render() {
        return(
            <div>
                <Card>
                    <Card.Header style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}}>Grilles horaires</Card.Header>
                    <Table style={{ width: '800px', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px', marginBottom: '100px'}} striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Jours</th>
                                <th>Ouverture</th>
                                <th>Fermeture</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lundi</td>
                                <td>8:30h</td>
                                <td>18h</td>
                            </tr>
                            <tr>
                                <td>Mardi</td>
                                <td>8:30h</td>
                                <td>18h</td>
                            </tr>
                            <tr>
                                <td>Mercredi</td>
                                <td>8:30h</td>
                                <td>18h</td>
                            </tr>
                            <tr>
                                <td>Jeudi</td>
                                <td>8:30h</td>
                                <td>18h</td>
                            </tr>
                            <tr>
                                <td>Vendrdi</td>
                                <td>8:30h</td>
                                <td>18h</td>
                            </tr>
                            <tr>
                                <td>Samedi</td>
                                <td colSpan={2}>Fermé</td>
                            </tr>
                            <tr>
                                <td>Dimanche</td>
                                <td colSpan={2}>Fermé</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </div>
        );
    }
}