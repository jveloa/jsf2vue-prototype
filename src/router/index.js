import {createRouter,createWebHashHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import questionnaireRouter from '@/modules/questionnaire/router'
import adminRouter from '@/modules/admin/router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView, 
	},
	{
		path:'/questionnaire',
		...questionnaireRouter,
	},
	{
		path: '/admin',
		...adminRouter,
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})
export default router