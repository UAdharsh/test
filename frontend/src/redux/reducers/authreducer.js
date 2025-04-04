import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from "../types";

const initialState = {
    user: null,
    token: localStorage.getItem("token"),
    isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;
