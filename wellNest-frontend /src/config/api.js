// src/config/api.js
import axios from "axios";

export const API_BASE_URL = "http://localhost:8080";
// we set the base URL for our API requests
// pointing to a local server running on port 8080

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Function to get JWT token from local storage dynamically
const getJwtToken = () => localStorage.getItem("jwt");
// to authenticate the API requests we need to get the token from our browser's local storage

api.interceptors.request.use((config) => {
    const token = getJwtToken();
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
// An axios interceptor is used to add the JWT token to the headers of each request if it's available.
// This allows us to reuse the Axios instance for making authenticated requests across your application.
