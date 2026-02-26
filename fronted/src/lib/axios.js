import axios from "axios";
const api = axios.create({
    baseURL : "https://mern-bookstore-otnh.onrender.com"
})
export default api
