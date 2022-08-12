import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import { Footer } from "../Component/Footer";
import { CarouselImage } from "../Component/Carousel/CarouselImage";
import { Quality } from "../Component/MoreBusiness/Quality";
import { CarouselProduct } from "../Component/Carousel/CarouselProduct";
import { Presentation } from "../Component/MoreBusiness/Presentation";
import { Origin } from "../Component/MoreBusiness/Origin";
import { Grizzly } from "../Component/MoreBusiness/Grizzly";
import { Map } from "../Component/MoreBusiness/Map";
import { Contact } from "../Component/MoreBusiness/Contact";
import { TimeTable } from "../Component/MoreBusiness/TimeTable";
import "../App.css";
import "../Help.css";

export class Home extends Component {
    render() {
        return(
            <div id="Home">
                <Navigate/>
                <CarouselImage/>
                <Quality/>
                <CarouselProduct/>
                <Presentation/>
                <Origin/>
                <Grizzly/>
                <Map/>
                <TimeTable/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}