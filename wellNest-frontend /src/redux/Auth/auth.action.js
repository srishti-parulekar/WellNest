import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    GET_PROFILE_REQUEST
} from "./auth.actionType";

export const loginUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }
        console.log("login-------", data);
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });

    } catch (error) {
        console.log("Network Error: ", error);
        dispatch({ type: LOGIN_FAILURE, payload: error.response?.data?.message || error.message });
    }
};

export const registerUserAction = (registerData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }
        console.log("register-------", data);
        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });

    } catch (error) {
        console.log("Network Error: ", error);
        dispatch({ type: REGISTER_FAILURE, payload: error.response?.data?.message || error.message });
    }
};

export const getProfileAction = (jwt) => async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });

    try {
        const { data } = await axios.post(
            `${API_BASE_URL}/auth/users/profile`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

        console.log("profile-------", data);
        dispatch({ type: GET_PROFILE_SUCCESS, payload: data });

    } catch (error) {
        console.log("Network Error: ", error);
        dispatch({ type: GET_PROFILE_FAILURE, payload: error.response?.data?.message || error.message });
    }
};
