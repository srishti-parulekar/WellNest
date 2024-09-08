import {
    CREATE_MESSAGE_REQUEST,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAILURE,
    CREATE_CHAT_REQUEST,
    CREATE_CHAT_SUCCESS,
    CREATE_CHAT_FAILURE,
    GET_ALL_CHATS_REQUEST,
    GET_ALL_CHATS_SUCCESS,
    GET_ALL_CHATS_FAILURE
} from "./message.actionType";
import { api } from "../../config/api";
import axios from 'axios';

export const createMessage = (message) => async (dispatch) => {
    dispatch({ type: CREATE_MESSAGE_REQUEST });
    try {
        const { data } = await api.post(`/api/messages/chat/${message.chatId}`, message);
        console.log("Created Message ", data);
        dispatch({ type: CREATE_MESSAGE_SUCCESS, payload: data });
    } catch (error) {
        console.log("Catch error", error);
        dispatch({
            type: CREATE_MESSAGE_FAILURE,
            payload: error
        });
    }
}

export const createChat = (chat) => async (dispatch) => {
    dispatch({ type: CREATE_CHAT_REQUEST });
    try {
        const token = localStorage.getItem("jwt");
        const { data } = await axios.post(`http://localhost:8080/api/chats`, chat, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.log("Created Chat ", data);
        dispatch({ type: CREATE_CHAT_SUCCESS, payload: data });
    } catch (error) {
        console.log("Catch error", error);
        dispatch({
            type: CREATE_CHAT_FAILURE,
            payload: error.response ? error.response.data : error.message
        });
    }
};

export const getAllChats = () => async (dispatch) => {
    dispatch({ type: GET_ALL_CHATS_REQUEST });
    try {
        const { data } = await api.get(`/api/chats`);
        console.log("Fetched Chats ", data);
        dispatch({ type: GET_ALL_CHATS_SUCCESS, payload: data });
    } catch (error) {
        console.log("Catch error", error);
        dispatch({
            type: GET_ALL_CHATS_FAILURE,
            payload: error
        });
    }
};

export default createMessage;
