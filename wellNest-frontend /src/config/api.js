export const API_BASE_URL = "http://localhost:8080";
// we set the base URL for our API requests
// pointing to a local server running on port 8080

import axios from "axios";
// axios is a popular HTTP client used for making requests to APIs.

const jwtToken = localStorage.getItem("jwt");
// to authenticate the API requests we need to get the token from our browser's local storage

export const api = axios.create({
    baseURL: API_BASE_URL, // corrected "baseURl" to "baseURL"
    headers: {
        "Authorization": `Bearer ${jwtToken}`, // added the missing comma here
        "Content-Type": "application/json"
    }
});

// An axios instance is created with the base URL and 
// default headers, including the JWT token in the Authorization 
// header. This allows us to reuse the Axios instance for making 
// authenticated requests across your application.
