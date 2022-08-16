import React from "react";
import {
    Form,
    Card,
    Button
} from "react-bootstrap";
import { BsFillBagXFill } from "react-icons/bs";
import { TbPackageOff } from "react-icons/tb";

export function TestSupport() {
    return(
        <div className="d-flex justify-content-around">
            <Card style={{ width: '500px', marginTop: '100px', marginBottom: '100px', boderStyle: 'none'}}>
                <Form style={{ width: '400px', marginRight: 'auto', marginLeft: 'auto'}}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nom:</Form.Label>
                        <Form.Control type="text" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Adresse email:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Référence de la commande:</Form.Label>
                        <Form.Control type="text" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Référence de la pièce:</Form.Label>
                        <Form.Control type="text" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date de la commande:</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Explication de votre soucis:</Form.Label>
                        <Form.Control id="text-page-aide" as="textarea" type="textarea" placeholder="votre message"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
            <Card style={{ width: '600px',marginTop: '100px', marginBottom: '100px', borderStyle: 'none'}}>
                <Card.Header style={{ textAlign: 'center', borderStyle: 'none', fontSize: '1.2rem'}}>Un soucis sur une commande ou une livraison vous pouvez nous contactez</Card.Header>
                <Card.Body>
                    <BsFillBagXFill id="icon-support" size={30}/><TbPackageOff id="icon-support" size={30}/>
                    <Card.Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare, dui vel pellentesque vestibulum, tortor ipsum viverra leo, non ultrices ligula nunc sit amet erat. Suspendisse convallis gravida nulla.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}