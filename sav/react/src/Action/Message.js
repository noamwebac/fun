import { SET_MESSAGE, CLEAR_MESSAGE } from "./Types";

export const setMessage = (mesage) => ({
    type: SET_MESSAGE,
    playload: mesage
});

export const clearMessage = () => ({
    type: CLEAR_MESSAGE
});