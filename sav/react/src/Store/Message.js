import { SET_MESSAGE, CLEAR_MESSAGE } from "../Action/Types";

const initialState = {};

export default function (state = initialState, action) {
    const { type, playload } = action;
    switch (type) {
        case SET_MESSAGE:
            return { mesage: playload };
            case CLEAR_MESSAGE:
                return { mesage: "" };
                default:
                    return state;
    }
}