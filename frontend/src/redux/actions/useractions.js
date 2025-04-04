import { FETCH_USERS, UPDATE_USER, DELETE_USER } from "../types";
import axios from "axios";

export const fetchUsers = () => async (dispatch) => {
    const res = await axios.get("/api/users");
    dispatch({ type: FETCH_USERS, payload: res.data });
};

export const updateUser = (userId, updatedData) => async (dispatch) => {
    const res = await axios.put(`/api/users/${userId}`, updatedData);
    dispatch({ type: UPDATE_USER, payload: res.data });
};

export const deleteUser = (userId) => async (dispatch) => {
    await axios.delete(`/api/users/${userId}`);
    dispatch({ type: DELETE_USER, payload: userId });
};
