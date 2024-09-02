import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import { 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    REGISTER_FAILURE, 
    REGISTER_REQUEST, 
    REGISTER_SUCCESS 
} from "./auth.actionType";

export const loginUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData); // Changed loginData.data to loginData

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }
        console.log("login-------", data);
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });

    } catch (error) {
        console.log("Network Error: ", error);
        dispatch({ type: LOGIN_FAILURE, payload: error.message }); // Ensure error.message is used
    }
};

export const registerUserAction = (registerData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData); // Changed loginData.data to registerData

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }
        console.log("register-------", data);
        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });

    } catch (error) {
        console.log("Network Error: ", error);
        dispatch({ type: REGISTER_FAILURE, payload: error.message }); // Ensure error.message is used
    }
};
