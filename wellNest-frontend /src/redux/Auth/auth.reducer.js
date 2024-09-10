import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
    UPDATE_PROFILE_REQUEST,
    SEARCH_USER_REQUEST,
    SEARCH_USER_SUCCESS,
    SEARCH_USER_FAILURE,
    LOGOUT_REQUEST, 
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from "./auth.actionType";

const initialState = {
    jwt: null,
    error: null,
    loading: false,
    user: null,
    searchUser: []
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case GET_PROFILE_REQUEST:
        case UPDATE_PROFILE_REQUEST:
        case SEARCH_USER_REQUEST:
        case LOGOUT_REQUEST: // Add this case
            return { ...state, loading: true, error: null };

        case GET_PROFILE_SUCCESS:
        case UPDATE_PROFILE_SUCCESS:
            return { ...state, user: action.payload, error: null, loading: false };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, jwt: action.payload, loading: false, error: null };

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case LOGOUT_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case LOGOUT_SUCCESS:
            return { ...state, jwt: null, user: null, loading: false, error: null };

        case SEARCH_USER_SUCCESS:
            return { ...state, searchUser: action.payload, error: null, loading: false };

        default:
            return state;
    }
};
