import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import { Support } from "../Component/Help/Support";
import { Contact } from "../Component/MoreBusiness/Contact";
import { Footer } from "../Component/Footer";

export class Aide extends Component {
    render() {
        return(
            <div>
                <Navigate/>
                <Support/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}