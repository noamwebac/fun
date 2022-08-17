import axios from "axios";
import authHeader, { AuthHeader } from "./AuthHeader";
const API_URL = "http://localhost:3001/api/test";
const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

const getUser = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratore = () => {
    return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdmin = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
    getPublicContent,
    getUser,
    getModeratore,
    getAdmin
};