import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import { Support } from "../Component/Help/Support";

export class Aide extends Component {
    render() {
        return(
            <div>
                <Navigate/>
                <Support/>
            </div>
        );
    }
}