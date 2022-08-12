import React, { useEffect } from "react";
import {
    Card,
    CloseButton
} from "react-bootstrap";
import { useState } from "react";

export function SecurSticky() {
    const [showText, setIsShow] = useState(true);

    return(
        <div>
            {showText ? <Card id="card-sticky">
                <CloseButton onClick={() => setIsShow(!showText)} id="button-close"/>
                <Card.Img id="secur-sticky" src="https://www.laplateforme.com/cms/i?o=%2Fsites%2Fdefault%2Ffiles%2Finline-images%2F3d-secure.jpg"/>
            </Card> : null}
        </div>
    );
}
