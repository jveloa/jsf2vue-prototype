import axios from "axios";

const api = axios.create({
	baseUrl: process.env.VUE_APP_URL
})


export default api