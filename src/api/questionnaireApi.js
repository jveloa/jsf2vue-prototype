import axios from "axios";


const questionnaireApi = axios.create({
	baseURL: process.env.VUE_APP_URL,
})


export default questionnaireApi