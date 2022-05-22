<template>
    <NavBar/>
	<OptionNav/>
	<div class="m-4 border-round-xl  shadow-4" >
		<router-view/>
	</div>
</template>

<script>
import NavBar from '@/modules/admin/components/NavBar.vue'
import OptionNav from '@/modules/admin/components/OptionNav.vue'
export default {
	components: {NavBar,OptionNav},
};
</script>

<style scope>
	

</style>