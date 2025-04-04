import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from "../types";
import axios from "axios";

export const login = (credentials) => async (dispatch) => {
    try {
        const res = await axios.post("/api/auth/login", credentials);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        localStorage.setItem("token", res.data.token);
    } catch (error) {
        console.error("Login failed:", error);
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT });
};

export const register = (userData) => async (dispatch) => {
    try {
        const res = await axios.post("/api/auth/register", userData);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
        console.error("Registration failed:", error);
    }
};
