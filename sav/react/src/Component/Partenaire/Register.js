import { React } from "react";
import {
    useState,
    useSelector,
    useDispatch
} from "react-redux";
import { Form } from "react-validation/build/form";
import { Input } from "react-validation/build/input";
import { CheckButton } from "react-validation/build/button";
import { isEmail } from "validator";
import { register } from "../../Action/Auth";

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleRegister = (e) => {
        e.preventDefault();
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._erros.length === 0) {
            dispatch(register(username, email, password))
            .then(() => {
                setSuccessful(true);
            })
            .catch(() => {
                setSuccessful(false);
            });
        }
    };
    return(
        <div>
            <Form style={{ width: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px'}} onSubmit={handleRegister} ref={form}>
            <Form.Group className="mb-3">
                    <Form.Label htmlfor="username">Email address</Form.Label>
                    <Form.Control type="username" id="username" value={username} onChange={onChangeUsername} validations={[required]} placeholder="Enter email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlfor="email">Email address</Form.Label>
                    <Form.Control type="email" id="email" value={email} onChange={onChangeEmail} validations={[required]} placeholder="Enter email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlfor="password">Password</Form.Label>
                    <Form.Control type="password" id="password" value={password} onChange={onChangePassword} validations={[required]} placeholder="Password"/>
                </Form.Group>
                <Button disabled={loading} variant="primary" type="submit">Register</Button>
                {message && (
                <div className="form-group">
                    <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                    {message}
                    </div>
                </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn}/>
            </Form>
        </div>
    );
}

export default Register;