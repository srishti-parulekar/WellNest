// message.reducer.js
import {
    CREATE_CHAT_REQUEST,
    CREATE_CHAT_SUCCESS,
    CREATE_CHAT_FAILURE,
    GET_ALL_CHATS_REQUEST,
    GET_ALL_CHATS_SUCCESS,
    GET_ALL_CHATS_FAILURE,
    CREATE_MESSAGE_SUCCESS
} from "./message.actionType";

const initialState = {
    message: [],
    chats: [],
    loading: false,
    error: null,
    message: null
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload
            };

        case CREATE_CHAT_SUCCESS:
            return {
                ...state,
                loading: false,
                chats: [...state.chats, action.payload]
            };

        case GET_ALL_CHATS_SUCCESS:
            return {
                ...state,
                loading: false,
                chats: action.payload
            };

        default:
            return state;
    }
};

export default messageReducer;
