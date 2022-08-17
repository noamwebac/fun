import { React, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-validation/build/form";
import { Input } from "react-validation/build/input";
import { CheckButton } from "react-validation/build/button";
import { login } from "../../Action/Auth";

const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { isLoggedin } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {
        e.prevenDefault();
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(email, password))
            .then(() => {
                props.history.push("/profile");
                window.location.reload();
            })
            .catch(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    };
    /*if (isLoggedin) {
        return <Redirect to="/profile"/>;
    }*/
    return(
        <div>
            <Form style={{ width: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlfor="email">Email address</Form.Label>
                    <Form.Control type="email" id="email" value={email} onChange={onChangeEmail} validations={[required]} placeholder="Enter email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlfor="password">Password</Form.Label>
                    <Form.Control type="password" id="password" value={password} onChange={onChangePassword} validations={[required]} placeholder="Password"/>
                </Form.Group>
                <Button disabled={loading} variant="primary" type="submit">
                    {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    Login
                </Button>
                {message && (
                    <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                        {message}
                    </div>
                    </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
        </div>
    );
};
export default Login;