import {
    CREATE_POST_FAILURE,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    LIKE_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    GET_ALL_POST_SUCCESS,
    GET_ALL_POST_REQUEST,
    GET_ALL_POST_FAILURE,
    GET_USERS_POST_SUCCESS,
    GET_USERS_POST_REQUEST,
    GET_USERS_POST_FAILURE,
    CREATE_COMMENT_REQUEST,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILURE
} from "./post.actionType";
import { api } from "../../config/api";

export const createPostAction = (postData) => async (dispatch) => {
    dispatch({ type: CREATE_POST_REQUEST });

    try {
        const { data } = await api.post('/api/posts', postData);
        dispatch({ type: CREATE_POST_SUCCESS, payload: data });
        console.log("Created post ", data);
    } catch (error) {
        console.log("Error", error);
        dispatch({ type: CREATE_POST_FAILURE, payload: error });
    }
};

export const getAllPostAction = () => async (dispatch) => {
    dispatch({ type: GET_ALL_POST_REQUEST });

    try {
        const { data } = await api.get('/api/posts');
        dispatch({ type: GET_ALL_POST_SUCCESS, payload: data });
        console.log("Get all posts ", data);
    } catch (error) {
        console.log("Error", error);
        dispatch({ type: GET_ALL_POST_FAILURE, payload: error });
    }
};

export const getUsersPostAction = (userId) => async (dispatch) => {
    dispatch({ type: GET_USERS_POST_REQUEST });

    try {
        const { data } = await api.get(`/api/posts/user/${userId}`);
        dispatch({ type: GET_USERS_POST_SUCCESS, payload: data });
        console.log("Get all user's posts ", data);
    } catch (error) {
        console.log("Error", error);
        dispatch({ type: GET_USERS_POST_FAILURE, payload: error });
    }
};


export const likePostAction = (postid) => async (dispatch) => {
    dispatch({ type: LIKE_POST_REQUEST });

    try {
        const response = await api.put(`/api/posts/like/${postid}`);
        dispatch({ type: LIKE_POST_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("Error liking post:", error); 
        dispatch({ 
            type: LIKE_POST_FAILURE, 
            payload: error.response ? error.response.data : error.message 
        });
    }
};
  
export const createCommentAction = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST });

    try {
        console.log("Request Data: ", reqData);
        const { data } = await api.post(`/api/comments/post/${reqData.postId}`, reqData.data);
        dispatch({ type: CREATE_COMMENT_SUCCESS, payload: data });
        console.log("Created comment ", data);
    } catch (error) {
        console.log("Error", error.response?.data || error.message);
        dispatch({ type: CREATE_COMMENT_FAILURE, payload: error.response?.data?.message || error.message });
    }
};
