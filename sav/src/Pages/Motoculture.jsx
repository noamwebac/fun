import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import { Agrement } from "../Component/Motoculture/Agrement";
import { Footer } from "../Component/Footer";
import { Partenaire } from "../Component/Motoculture/Partenaire";
import { Experience } from "../Component/Motoculture/Experience";

export class Motoculture extends Component {
    render() {
        return(
            <div>
                <Navigate/>
                <Agrement/>
                <Partenaire/>
                <Experience/>
                <Footer/>
            </div>
        );
    }
}