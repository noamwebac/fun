import React from "react";
import { Component } from "react";
import { Picture } from "../Component/Lidl/Picture";
import { Navigate } from "../Component/Navigate";
import { Test } from "../Component/Lidl/Test";

export class Lidl extends Component {
    render() {
        return(
            <div>
                <Navigate/>
                <Picture/>
                <Test/>
            </div>
        );
    }
}