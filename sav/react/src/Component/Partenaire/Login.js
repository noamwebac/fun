import React from "react";
import {
    Form,
    Button
} from "react-bootstrap";
import {
    useState
} from "react";

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        alert(email, password);
    };

    return(
        <div>
            <Form style={{ width: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label for="email">Email address</Form.Label>
                    <Form.Control type="email" id="email" value={email} onChange={handleEmail} placeholder="Enter email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label for="password">Password</Form.Label>
                    <Form.Control type="password" id="password" value={password} onChange={handlePassword} placeholder="Password"/>
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="submit">Submit</Button>
            </Form>

        </div>
    );
}