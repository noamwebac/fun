import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import { Agrement } from "../Component/Motoculture/Agrement";
import { Footer } from "../Component/Footer";
import { Experience } from "../Component/Motoculture/Experience";
import { Respect } from "../Component/Motoculture/Respect";
import { Presentation } from "../Component/Motoculture/Presentation";
import { Swap } from "../Component/Motoculture/Swap";
import { Contact } from "../Component/MoreBusiness/Contact";
import { CarouselPartenaire } from "../Component/Carousel/CarouselPartenaire";

export class Motoculture extends Component {
    render() {
        return(
            <div>
                <Navigate/>
                <Agrement/>
                <CarouselPartenaire/>
                <Experience/>
                <Respect/>
                <Presentation/>
                <Swap/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}