import axios from "axios";
const API_URl = "http://localhost:3001/api/auth";
const register = (username, email, password) => {
    return axios.post(API_URl + "singup", {
        username,
        email,
        password
    });
};

const login = (email, password) => {
    return axios.post(API_URl + "singin", {
        email,
        password
    })
    .then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout
};