import {
    REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE
} from "./Types";
import { Auth } from "../Services/Auth";

export const register = (username, email, password) => (dispatch) => {
    return Auth.register(username, email, password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            return Promise.resolve();
        },
        (error) => {
            const message = 
            (error.response &&
                error.response.data &&
                error.data.message) ||
                error.message ||
                error.toString();
                dispatch({
                    type: REGISTER_FAIL
                });
                dispatch({
                    type: SET_MESSAGE,
                    playload: message
                });
                return Promise.reject();
        }
    );
};

export const login = (email, password) => (dispatch) => {
    return Auth.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                playload: { user: data }
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
            (error.response &&
            error.response.data && 
            error.response.data.message) ||
            error.message ||
            error.toString();
            dispatch({
                type: LOGIN_FAIL
            });
            dispatch({
                type: SET_MESSAGE,
                playload: message
            });
            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    Auth.logout();
    dispatch({
        type: LOGOUT
    });
};