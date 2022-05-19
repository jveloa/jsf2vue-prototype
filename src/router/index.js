import {createRouter,createWebHashHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import questionnaireRouter from '@/modules/questionnaire/router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView, 
	},
	{
		path:'/questionnaire',
		...questionnaireRouter,
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})
export default router