import QuestionnaireLayout from '@/modules/questionnaire/layout/QuestionnaireLayout.vue'
export default {
	name: 'questionnaire',
	component :  QuestionnaireLayout,
	children: [
		{
			path: '',
			name: 'questionnaire-form',
			component: () => import(/* webpackChunkName: "questionnaire-fomr" */'@/modules/questionnaire/views/QuestionnaireView.vue')
		}
	]
}