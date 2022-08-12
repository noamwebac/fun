import React from "react";
import { Component } from "react";
import {
    Table
} from "react-bootstrap";

export class TimeTable extends Component {
    render() {
        return(
            <Table style={{ width: '800px', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px', marginBottom: '100px'}} striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Jours</th>
                        <th>Début</th>
                        <th>Fin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Lundi</td>
                        <td>8:30h</td>
                        <td>18h</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mardi</td>
                        <td>8:30h</td>
                        <td>18h</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mercredi</td>
                        <td>8:30h</td>
                        <td>18h</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Jeudi</td>
                        <td>8:30h</td>
                        <td>18h</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Vendrdi</td>
                        <td>8:30h</td>
                        <td>18h</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}