import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

submitHandler = event => {
    event.preventDefault();
    const email = thos.state.controls.email.value;
    const password = this.state.controls.password.value;
    this.props.Register(email, password);
};

const mapDispatch = dispatch => {
    return {
        Register: (email, password) => dispatch(actions.sinUp(email, password))
    };
};

const mapState = state => {
    return {
        registered: state.auth.registered
    };
};

export default connect(
    mapDispatch,
    mapState
)(Register);