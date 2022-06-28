import React from "react";
import { Component } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaEbay } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import "../App.css";

export class Footer extends Component {
    render() {
        return(
            <div>
                <div className="container-fluid text-center text-md-left">
                <div className="row d-flex">
                    <div className="col-md-3 mt-md-0 mt-3">
                        <h4>Des services dédiés</h4>
                        <p>L'ensemble de l'équipe est à votre service chaque jour, Chaque département de compétance traite au quotidien vos dificultées.</p>
                    </div>
                    <div className="col-md-3 mt-md-0 mt-3">
                        <h4>Informations légales</h4>
                        <p>Copyright SAV03.FR
                            Tous droits réservés
                            Site réalisé par le service informatique.
                            Site hébergé par OVH en France.
                            Plus d'informations</p>
                    </div>
                    <div className="col-md-3 mt-md-0 mt-3">
                        <h4>Utilisation des cookies</h4>
                        <p>Pour vous assurer une expérience réussie, 
                            ce site utilise des cookies et des traceurs 
                            Google Analytics à des fins statistiques.
                            Pour en savoir plus, cliquez ICI.
                        </p>
                    </div>
                    <div className="col-md-3 mt-md-0 mt-3">
                        <h4>Réseaux sociaux</h4>
                        <p>Pour suivre l'actualité d'SAV03,n'hésitez pas à nous suivre sur les réseaux sociaux</p>
                        <ul className="list-unstyled d-flex justify-content-around">
                            <li><a id="list-icon" href="https://www.facebook.com/www.sav03.fr/"><FaFacebookF size={30}/></a></li>
                            <li><a id="list-icon" href="https://www.google.com/search?q=sav03&oq=sav03&aqs=chrome..69i57j69i60l3j69i65j69i60.1871j0j7&sourceid=chrome&ie=UTF-8"><FaGoogle size={30}/></a></li>
                            <li><a id="list-icon" href="https://www.ebay.fr/usr/sav_zero_trois"><FaEbay size={30}/></a></li>
                            <li><a id="list-icon" href="https://www.amazon.fr/s?i=merchant-items&me=A1YSM2PYI2Y8JE&qid=1566137336&ref=sr_hi_1"><FaAmazon size={30}/></a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}