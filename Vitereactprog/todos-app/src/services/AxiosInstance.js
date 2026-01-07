import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://todos-app-11ec8-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

export default axiosInstance;
