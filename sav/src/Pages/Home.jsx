import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import { Body } from "../Component/Body";
import { Footer } from "../Component/Footer";
import '../App.css';

export class Home extends Component {
    render() {
        return(
            <div id="Home">
                <Navigate/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}