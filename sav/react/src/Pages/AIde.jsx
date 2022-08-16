import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import { Support } from "../Component/Help/Support";
import { Contact } from "../Component/MoreBusiness/Contact";
import { Footer } from "../Component/Footer";
import { FormSupport } from "../Component/Help/FormSupport";
import { SecurityPaiement } from "../Component/Help/SecurityPaiement";
import { SecurSticky } from "../Component/MoreBusiness/SecurSticky";
import { TestSupport } from "../Component/Help/TestSupport";

export class Aide extends Component {
    render() {
        return(
            <div>
                <Navigate/>
                <Support/>
                {/*<FormSupport/>*/}
                <TestSupport/>
                <SecurityPaiement/>
                <Contact/>
                <Footer/>
                <SecurSticky/>
            </div>
        );
    }
}