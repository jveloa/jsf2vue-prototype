<template>
	<NavBar/>
	<div class="grid p-2">
		<div>
			<OptionNav/>
		</div>
		<div class="col">
			<router-view/>
		</div>
	</div>
	
</template>

<script>
import NavBar from '../components/NavBar.vue';
import OptionNav from '../components/OptionNav.vue';

export default {
	components:{NavBar,OptionNav},
    setup() {
        

        return {  }
    }
}
</script>

<style scope>
.p-menuitem-text{
	font-size:0.8rem;
	font-weight:bold;
}
</style>