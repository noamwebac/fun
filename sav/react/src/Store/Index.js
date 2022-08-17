import { combineReducers} from "redux";
import { Auth } from "./Auth";
import { Message } from "./Message";

export default combineReducers({
    auth,
    message,
});