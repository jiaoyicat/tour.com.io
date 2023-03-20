<template>
	<div class="home">
		<Homeheader/>
		<Homeswiper/>
		<Homeicons/>
		<Homeloction/>
		<Homehot/>
		<Homelike/>
		<Homelist/>
		<Homefooter/>
	</div>
</template>

<script>
	
	import Homeheader from "./pages/header.vue"
	import Homeswiper from "./pages/Swiper.vue"
	import Homeicons from "./pages/icons.vue"
	import Homeloction from "./pages/Loction.vue"
	import Homehot from "./pages/hot.vue"
	import Homelike from "./pages/like.vue"
	import Homelist from "./pages/list.vue"
	import Homefooter from "./pages/footer.vue"
	export default {
		mounted(){
			
		},
		methods:{

		
		},
		components: {
			Homeheader,
			Homeswiper,
			Homeicons,
			Homeloction,
			Homehot,
			Homelike,
			Homelist,
			Homefooter
		}
	}
</script>

<style scoped lang="scss">
.home{
		background-color: #f5f5f5;
	}
</style>
