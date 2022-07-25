import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import { Agrement } from "../Component/Motoculture/Agrement";
import { Footer } from "../Component/Footer";
import { Partenaire } from "../Component/Motoculture/Partenaire";
import { Experience } from "../Component/Motoculture/Experience";
import { Respect } from "../Component/Motoculture/Respect";
import { Presentation } from "../Component/Motoculture/Presentation";
import { Swap } from "../Component/Motoculture/Swap";

export class Motoculture extends Component {
    render() {
        return(
            <div>
                <Navigate/>
                <Agrement/>
                <Partenaire/>
                <Experience/>
                <Respect/>
                <Presentation/>
                <Swap/>
                <Footer/>
            </div>
        );
    }
}