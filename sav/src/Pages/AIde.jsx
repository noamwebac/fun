import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import { Support } from "../Component/Help/Support";
import { Contact } from "../Component/MoreBusiness/Contact";
import { Footer } from "../Component/Footer";
import { FormSupport } from "../Component/Help/FormSupport";
import { SecurityPaiement } from "../Component/Help/SecurityPaiement";
import { SecurSticky } from "../Component/MoreBusiness/SecurSticky";

export class Aide extends Component {
    render() {
        return(
            <div>
                <Navigate/>
                <Support/>
                <FormSupport/>
                <SecurityPaiement/>
                <Contact/>
                <Footer/>
                <SecurSticky/>
            </div>
        );
    }
}