import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./auth.actionType";

const initialState = {
    jwt: null,
    error: null,
    loading: false
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return { ...state, loading: true, error: null }

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, jwt: action.payload, loading: false, error: null }

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}