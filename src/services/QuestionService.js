import questionnaireApi from '@/api/questionnaireApi'


export default class QuestionService {

	static async getAllQuestions() {
		try {
			const { data } = await questionnaireApi.get('/question')
			return data
		} catch (e) {
			console.log(e)
		}
	}
	static async getQuestion(id) {
		try {
			const { data } = await questionnaireApi.get(`/question/${id}`)
			return data
		} catch (e) {
			console.log(e)
		}
	}
	static async postQuestion(question) {
		try {
			const { data } = await questionnaireApi.post(`/question`,question)
			return data
		}catch (e) {
			console.log(e);
		}
	}
	static async patchQuestion(question) {
		try {
			const { data } = await questionnaireApi.patch(`/question`,question)
			return data
		}catch (e) {
			console.log(e);
		}
	}
	static async deleteQuestion(id) {
		try {
			const { data } = await questionnaireApi.delete(`/question/${id}`)
			return data
		}catch (e) {
			console.log(e);
		}
	}


}