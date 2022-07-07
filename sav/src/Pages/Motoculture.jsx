import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import { Agrement } from "../Component/Motoculture/Agrement";

export class Motoculture extends Component {
    render() {
        return(
            <div>
                <Navigate/>
                <Agrement/>
            </div>
        );
    }
}