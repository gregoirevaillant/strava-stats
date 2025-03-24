import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://www.strava.com",
    withCredentials: false,
    timeout: 3000,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        console.log("Response:", response);
        return response;
    },
    (error) => {
        console.error("Error response:", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
