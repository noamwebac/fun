import React from "react";
import { Component } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaEbay } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";

export class Footer extends Component {
    render() {
        return(
            <div id="footer">
                <div className="container-fluid text-center text-md-left">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-3  mt-4">
                        <h4 id="title-footer">Des services dédiés</h4>
                        <p id="text-footer">L'ensemble de l'équipe est à votre service chaque jour.<br/>
                        Chaque département de compétance traite au quotidien vos dificultées.</p>
                    </div>
                    <div className="col-md-3  mt-4">
                        <h4 id="title-footer">Informations légales</h4>
                        <p id="text-footer">Copyright SAV03.FR Tous droits réservés Site réalisé par le service informatique<br/>
                        Site hébergé par OVH en France.</p>
                        <p id="text-footer"><a style={{ textDecoration: 'none', color: 'white' }} href="#">Plus d'informations</a></p>
                    </div>
                    <div className="col-md-3 mt-4">
                        <h4 id="title-footer">Utilisation des cookies</h4>
                        <p id="text-footer">Pour vous assurer une expérience réussie, ce site utilise des cookies.<br/> 
                        Des traceurs Google Analytics à des fins statistiques.</p>
                        <p id="text-footer"><a style={{ textDecoration: 'none', color: 'white' }} href="#">Pour en savoir plus, cliquez ICI.</a></p>
                    </div>
                    <div className="col-md-3 mt-4">
                        <h4 id="title-footer">Réseaux sociaux</h4>
                        <p id="text-footer">Pour suivre l'actualité de SAV03.<br/>
                        <br/>
                        Hésitez pas à nous suivre sur les réseaux sociaux</p>
                        <ul className="list-unstyled d-flex justify-content-around" style={{ marginTop: '50px'}}>
                            <li><a id="list-icon" href="https://www.facebook.com/www.sav03.fr/"><FaFacebookF size={30}/></a></li>
                            <li><a id="list-icon" href="https://www.google.com/search?q=sav03&oq=sav03&aqs=chrome..69i57j69i60l3j69i65j69i60.1871j0j7&sourceid=chrome&ie=UTF-8"><FaGoogle size={30}/></a></li>
                            <li><a id="list-icon" href="https://www.ebay.fr/usr/sav_zero_trois"><FaEbay size={40}/></a></li>
                            <li><a id="list-icon" href="https://www.amazon.fr/s?i=merchant-items&me=A1YSM2PYI2Y8JE&qid=1566137336&ref=sr_hi_1"><FaAmazon size={30}/></a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}