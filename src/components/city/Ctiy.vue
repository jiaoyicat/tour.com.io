<template>
    <div class="home">
		<Cityhot :addurl="addurl"></Cityhot>
		
    </div>
</template>
<script>
	import Cityhot from "./pages/hot.vue"
	export default{
		data(){
			return{
				addurl:require("../../../static/mock/data/city.json")
			}
		},
		components:{
			Cityhot
		}
	}
</script>
<style>
</style>