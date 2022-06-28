import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import { Body } from "../Component/Body";
import { Footer } from "../Component/Footer";

export class Home extends Component {
    render() {
        return(
            <div>
                <Navigate/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}