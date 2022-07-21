import React from "react";
import { Component } from "react";
import {
    Card
} from "react-bootstrap";
import { ReactPlayer } from "react-player/youtube";
import { GoLightBulb } from "react-icons/go";


export class SecurityPaiement extends Component {
    render() {
        return(
            <div>
                <Card id="paiement">
                    <Card.Header>Paiement sur la boutique en ligne</Card.Header>
                    <Card.Body>
                        <h1>Paiement en ligne: La double authentification devient la règle</h1>
                        <Card.Text>
                        Afin de sécuriser davantage les transaction via internet, la double authentification se généralise lors du paiement par carte bancaire, au moment de la validation d'une commande.<br/>
                        Depuis le 12 juin 2021, l'ensemble des paiements est soumis à une double authentification, dite aussi authentification forte.<br/>
                        Des exceptions sont toutefois autorisées.<br/> 
                        Cela concerne notamment les transactions sur internet de moins de 30€, qui peuvent déroger à ce principe d'authentification forte. 
                        </Card.Text>
                    <img src="https://www.laplateforme.com/cms/i?o=%2Fsites%2Fdefault%2Ffiles%2Finline-images%2F3d-secure.jpg"/>
                    </Card.Body>
                </Card>
                    <GoLightBulb style={{ width: '400px', height: '500px', color: 'grey'}}/>
                <Card style={{ marginTop: '60px'}}>
                    <Card.Header><h2>Une authentification supplémentaire</h2></Card.Header>   
                        <Card.Text>
                        L'authentification forte requiert la combinaision de 2 facteurs d'authentification pour vérifier l'identité du payeur.<br/>
                        Ces facteurs sont classés en 3 catégories:<br/>
                        -Connaissance (quelque chose que seul l'utilisateur connaît) : un mot de passe , un code secret...<br/>
                        -Possession (quelque chose que seul l'utilisateur possède) : un téléphone, un ordinateur, un boitier founi par la banque...<br/>
                        -Inhérence (quelque chose que seul l'utilisateur est) : empreinte digitale, reconnaissance faciale...<br/>
                        Pour les achats en ligne, cela signifie que le seul code ç usage unqieu reçu par SMS ne suffit plus.<br/>
                        Pour répondre ç cette nouvelle obligation , les banques ont majoritairement orienté leurs cliens vers un service disponible via leurs application mobile bancaire:<br/>
                        pour s'authentifier, une notification est envoyée sur l'application de la banque du titulaire de la carte.<br/>
                        Cette notification invite alors le client à saisir un code secret (connaissance), soit une empreinte biométrique (Inhérence).<br/>
                        Le second facteur est vérifié de fait par l'appareil sur lequel est reçu la notification (possession).
                        </Card.Text>
                        </Card>
                <div id="bonsavoir" className="d-flex justify-content-around">    
                    <Card style={{ height: '320px', width: '500px'}}>
                        <Card.Header><h3>Bon à savoir</h3></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Au Crédit Agricole, bénéficiez gratuitement du service d’authentification forte « SécuriPass » en installant l’application « Ma Banque » sur votre appareil mobile.<br/>
                            Si vous n’utilisez pas encore « SécuriPass », le Crédit Agricole vous transmettra un nouveau code personnel et confidentiel appelé « SécuriCode ».<br/>
                            Découvrez dans le guide « Cybersécurité et lutte contre la fraude », tous les conseils et services du Crédit Agricole afin d’utiliser, en toute sécurité, vos moyens de paiement et réaliser sereinement vos opérations en ligne.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/*<ReactPlayer url="https://www.youtube.com/embed/Pz-IWic5QbA"/>
                     
                     * 
                     * 
                     * 
                     * 
                     <div>
                         <iframe style={{ height: '400px', width: '600px'}} src={"https://www.youtube.com/embed/Pz-IWic5QbA"}></iframe>
                     </div>
                     * 
                    */}
                </div>
                <Card>
                    <Card.Header><h2>Lutte contre la fraude sur internet</h2></Card.Header>
                    <Card.Body>
                        <Card.Body>
                            <Card.Text>
                            SAV03 s'engage avec le Crédit Agricole dans la lutte des cyber attaques via sa boutique en ligne.
                            <Card.Img src="https://sav03.fr/wa_images/credit-agricole-embleme.jpg?v=1go82ff"></Card.Img>
                            </Card.Text>
                        </Card.Body>
                    </Card.Body>
                </Card>
 
            </div>
        );
    }
}