import {
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    GET_ALL_POST_REQUEST,
    GET_ALL_POST_SUCCESS,
    GET_ALL_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAILURE,
    CREATE_COMMENT_SUCCESS
} from "./post.actionType";

const initialState = {
    post: null,
    loading: false,
    error: null,
    posts: [],
    like: null,
    comments: [],
    newComments: null
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST_REQUEST:
        case GET_ALL_POST_REQUEST:
        case LIKE_POST_REQUEST:
            return { ...state, loading: true, error: null };

        case CREATE_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                posts: [action.payload, ...state.posts],
                loading: false,
                error: null
            };

        case GET_ALL_POST_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                comments: action.payload.comments,
                loading: false,
                error: null
            };

        case LIKE_POST_SUCCESS:
            return {
                ...state,
                like: action.payload,
                posts: state.posts.map((item) =>
                    item.postid === action.payload.postid ? action.payload : item
                ),
                loading: false
            };


        case CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                newComments: action.payload,
                loading: false,
                error: null
            }

        case CREATE_POST_FAILURE:
        case GET_ALL_POST_FAILURE:
        case LIKE_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default postReducer;
