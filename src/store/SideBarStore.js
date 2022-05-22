import { defineStore } from 'pinia'

export const useSideBarStore = defineStore('sideBar', {
	state: () =>{
		return {
			visible:false
		}
	},
	actions:{
		changeVisible(){
			this.visible = !this.visible
		},
	}
  })