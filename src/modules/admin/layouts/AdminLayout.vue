<template>
	<NavBar/>

	<div class="grid p-2 ">
		<div class="col-12 ">
			<OptionNav/>
		</div>
		<div class="col">
			<router-view/>
		</div>
	</div>
	
</template>

<script>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import OptionNav from '../components/OptionNav.vue';

export default {
	components:{NavBar,OptionNav},
    setup() {
        const items = ref([
            {
                label: 'Videos', icon: 'pi pi-fw pi-video',
                items: 	[
						[
							{
                            label: 'User 1',
                            items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                            },
						]
						]
            },
            {
                label: 'Events', icon: 'pi pi-fw pi-calendar',
                items: [
                    [
                        {
                            label: 'Event 1',
                            items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                        },
                        {
                            label: 'Event 2',
                            items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                        }
                    ],
                ]
            },
            {
                label: 'Settings', icon: 'pi pi-fw pi-cog',
                items: [
                    [
                        {
                            label: 'Setting 1',
                            items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                        },
                    ],
                ]
            }
        ]);


        return { items }
    }
}
</script>

<style scope>
.p-menuitem-text{
	font-size:0.8rem;
	font-weight:bold;
}
</style>