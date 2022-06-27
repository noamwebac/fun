import React from "react";
import { Component } from "react";
import { Navigate } from "../Component/Navigate";
import { Body } from "../Component/Body";

export class Home extends Component {
    render() {
        return(
            <div>
                <Navigate/>
                <Body/>
            </div>
        );
    }
}