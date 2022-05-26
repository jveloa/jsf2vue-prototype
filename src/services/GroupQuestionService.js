import questionnaireApi from '@/api/questionnaireApi'

export default class GroupQuestion{
	static async getAllGroupQuestion() {
		try {
			const { data } = await questionnaireApi.get('/group-question')
			return data
		} catch (e) {
			console.log(e)
		}
	}
	static async getGroupQuestion(id) {
		try {
			const { data } = await questionnaireApi.get(`/group-question/${id}`)
			return data
		} catch (e) {
			console.log(e)
		}
	}
	static async postGroupQuestion(groupQuestion) {
		try {
			const { data } = await questionnaireApi.post(`/group-question`,groupQuestion)
			return data
		}catch (e) {
			console.log(e);
		}
	}
	static async patchQuestion(groupQuestion) {
		try {
			const { data } = await questionnaireApi.patch(`/group-question`,groupQuestion)
			return data
		}catch (e) {
			console.log(e);
		}
	}
	static async deleteQuestion(id) {
		try {
			const { data } = await questionnaireApi.delete(`/group-question/${id}`)
			return data
		}catch (e) {
			console.log(e);
		}
	}
}