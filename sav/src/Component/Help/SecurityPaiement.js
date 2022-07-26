import React from "react";
import { Component } from "react";
import {
    Card
} from "react-bootstrap"
import { TbNumber1 } from "react-icons/tb";
import { TbNumber2 } from "react-icons/tb";
import { TbNumber3 } from "react-icons/tb";
import { TbNumber4 } from "react-icons/tb";
import { TbNumber5 } from "react-icons/tb";
import { ImWarning } from "react-icons/im";
import { MdSecurity } from "react-icons/md";

export class SecurityPaiement extends Component {
    render() {
        return(
            <div>
                <Card id="paiement">
                    <Card.Header>Paiement sur la boutique en ligne</Card.Header>
                    <Card.Body>
                        <h2>Paiement en ligne: La double authentification devient la règle</h2>
                        <Card.Text>
                        Afin de sécuriser davantage les transaction via internet, la double authentification se généralise lors du paiement par carte bancaire, au moment de la validation d'une commande.<br/>
                        Depuis le 12 juin 2021, l'ensemble des paiements est soumis à une double authentification, dite aussi authentification forte.<br/>
                        Des exceptions sont toutefois autorisées.<br/> 
                        Cela concerne notamment les transactions sur internet de moins de 30€, qui peuvent déroger à ce principe d'authentification forte. 
                        </Card.Text>
                    <img src="https://www.laplateforme.com/cms/i?o=%2Fsites%2Fdefault%2Ffiles%2Finline-images%2F3d-secure.jpg"/>
                    </Card.Body>
                </Card>
                <Card id="authentification">
                    <Card.Header><h2><MdSecurity size={70} style={{ marginRight: '50px'}}/>Une authentification supplémentaire</h2></Card.Header>
                    <div className="d-flex justify-content-between">                        
                        <Card style={{ borderStyle: 'none', height: '40px', marginTop: '40px', marginLeft: '150px', marginRight: '30px'}}>
                            <TbNumber1 size={30}/>
                        </Card>
                        <Card style={{ marginTop: '30px'}} id="card-security">
                            <Card.Text>
                                L'authentification forte requiert la combinaision de 2 facteurs d'authentification pour vérifier l'identité du payeur.<br/>
                            </Card.Text>
                        </Card>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Card style={{ borderStyle: 'none', height: '40px', marginTop: '20px', marginLeft: '150px', marginRight: '30px'}}>
                            <TbNumber2 size={30}/>
                        </Card>
                        <Card id="card-security">
                            <Card.Text>
                                Ces facteurs sont classés en 3 catégories:
                            </Card.Text>
                        </Card>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Card style={{ borderStyle: 'none', height: '40px', marginTop: '20px', marginLeft: '150px', marginRight: '30px'}}>
                            <TbNumber3 size={30}/>
                        </Card>
                        <Card id="card-security">
                            <Card.Text>
                                -Connaissance (quelque chose que seul l'utilisateur connaît) : un mot de passe , un code secret...   
                            </Card.Text>
                        </Card>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Card style={{ borderStyle: 'none', height: '40px', marginTop: '20px', marginLeft: '150px', marginRight: '30px'}}>
                            <TbNumber4 size={30}/>
                        </Card>
                        <Card id="card-security">
                            <Card.Text>
                                -Possession (quelque chose que seul l'utilisateur possède) : un téléphone, un ordinateur, un boitier founi par la banque...
                            </Card.Text>
                        </Card>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Card style={{ borderStyle: 'none', height: '40px', marginTop: '20px', marginLeft: '150px', marginRight: '30px'}}>
                            <TbNumber5 size={30}/>
                        </Card>
                        <Card id="card-security">
                            <Card.Text>  
                                -Inhérence (quelque chose que seul l'utilisateur est) : empreinte digitale, reconnaissance faciale...
                            </Card.Text>
                        </Card>   
                    </div>
                    <div>
                        <Card style={{ marginTop: '100px', width: '700px', marginRight: 'auto', marginLeft: 'auto'}}>
                            <ImWarning color="red" size={50}/>
                            <Card.Text>
                                Pour les achats en ligne, cela signifie que le seul code ç usage unqieu reçu par SMS ne suffit plus.<br/>
                                Pour répondre ç cette nouvelle obligation , les banques ont majoritairement orienté leurs cliens vers un service disponible via leurs application mobile bancaire:<br/>
                                pour s'authentifier, une notification est envoyée sur l'application de la banque du titulaire de la carte.<br/>
                                Cette notification invite alors le client à saisir un code secret (connaissance), soit une empreinte biométrique (Inhérence).<br/>
                                Le second facteur est vérifié de fait par l'appareil sur lequel est reçu la notification (possession).     
                            </Card.Text>
                        </Card>
                        {/*<Card>
                            Pour les achats en ligne, cela signifie que le seul code ç usage unqieu reçu par SMS ne suffit plus.<br/>
                            Pour répondre ç cette nouvelle obligation , les banques ont majoritairement orienté leurs cliens vers un service disponible via leurs application mobile bancaire:<br/>
                            pour s'authentifier, une notification est envoyée sur l'application de la banque du titulaire de la carte.<br/>
                            Cette notification invite alors le client à saisir un code secret (connaissance), soit une empreinte biométrique (Inhérence).<br/>
                            Le second facteur est vérifié de fait par l'appareil sur lequel est reçu la notification (possession).
        </Card>*/}
                    </div>
                        <Card.Text>
                        </Card.Text>
                </Card>
                <div id="bonsavoir" className="d-flex justify-content-around">
                    <Card style={{ width: '500px'}}>
                        <Card.Header><h3>Bon à savoir</h3></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Au Crédit Agricole, bénéficiez gratuitement du service d’authentification forte « SécuriPass ».<br/>
                            En installant l’application « Ma Banque » sur votre appareil mobile.<br/>
                            Si vous n’utilisez pas encore « SécuriPass ».<br/>
                            Le Crédit Agricole vous transmettra un nouveau code personnel et confidentiel appelé « SécuriCode ».<br/>
                            Découvrez dans le guide « Cybersécurité et lutte contre la fraude », tous les conseils et services du Crédit Agricole.<br/> 
                            Afin d’utiliser, en toute sécurité, vos moyens de paiement et réaliser sereinement vos opérations en ligne.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div>
                        <iframe width="600" height="400" src="https://www.youtube.com/embed/Pz-IWic5QbA" title="TUTO : Comment activer votre service Securipass sur Ma Banque ?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <Card id="agricole">
                    <Card.Header><h2>Lutte contre la fraude sur internet</h2></Card.Header>
                    <Card.Body className="d-flex justify-content-around">
                        <Card.Text style={{ marginTop: '150px'}}>
                        SAV03 s'engage avec le Crédit Agricole dans la lutte des cyber attaques via sa boutique en ligne.
                        </Card.Text>
                        <Card.Img style={{ width: '500px', height: '300px'}} src="https://sav03.fr/wa_images/credit-agricole-embleme.jpg?v=1go82ff"></Card.Img>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}