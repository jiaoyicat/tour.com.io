<template>
	<div>
		<header>
		<div class="return" @click="returnHome">
			<span class="iconfont icon-prev"></span>
		</div>
		<div class="title">城市选择</div>
	</header>
	<!-- header -->
	<div class="hot">
		<div class="city-title">
			<span>境内城市</span>
			<span>境外城市</span>
		</div>
		<div class="hotcity">
			<div class="hotcity-title">热门城市</div>
			<ul v-for="(item,index) in addurl" :key="index">
				<li v-for="(citiy,i) in item.hotCities" :key="i">{{ citiy.name }}</li>
			</ul>
		</div>
		<div class="num">
			<div class="hotcity-title">字母排序</div>
			<ul v-for="(item,index) in addurl" :key="index">
				<li v-for="(citiy,i) in item.cities" :key="i" @click="jmup(i)" :ref="i">{{i }}</li>
			</ul>
		</div>
		<div class="hotcity" v-for="(item,index) in addurl" :key="index">
			<div class="box">
				<ul v-for="(citiy,key) in item.cities" :key="key">
					<div class="hotcity-title">{{key}}</div>
					<li v-for="list of citiy" :key="list.id">{{list.name}}</li>
				</ul>
			</div>
		</div>
	</div>
	</div>
	
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			returnHome() {
				this.$router.push("/")
			},
			jmup(i){
				console.log(i)
				console.log(this.$refs[i][0])

			}
		},
		props: ["addurl"]

	}
</script>
<style lang="scss" scoped>
	@import "@/assets/css/common.scss";
	header {
		width: 100%;
		line-height: .88rem;
		background-color: $header_bgColor;
		font-size: .28rem;
		color: #ffffff;
		display: flex;

		.return {
			display: inline-block;
			width: .6rem;
			text-align: center;
			font-size: .36rem;
			color: #e4e7ea;
			position: absolute;
		}

		.title {
			width: 100%;
			text-align: center;
			font-size: 0.4rem;
		}

		.title-content {
			background-color: black;
			color: white;
		}
	}
	.hot {
		background-color: #f5f5f5;
		.city-title {
			display: flex;
			justify-content: center;
			background-color: $header_bgColor;
			height: 50px;
			padding-top: 20px;
			span {
				width: 150px;
				height: 25px;
				color: white;
				font-size: 0.35rem;
				text-align: center;
				line-height: 25px;
				border: 1px solid white;
			}
			span:first-child {
				background-color: white;
				color: deepskyblue;
			}
		}
		.hotcity {
			.hotcity-title {
				width: 100%;
				height: 30px;
				line-height: 30px;
				font-size: .25rem;

			}
			ul {
				li {
					width: 33.33%;
					height: 50px;
					line-height: 50px;
					float: left;
					font-size: 16px;
					background-color: white;
					text-align: center;
				}
			}
		}
		.num {
			.hotcity-title {
				width: 100%;
				height: 30px;
				line-height: 30px;
				font-size: .25rem;

			}
			ul {

				li {
					width: 33.33%;
					height: 50px;
					line-height: 50px;
					float: left;
					font-size: 16px;
					background-color: white;
					text-align: center;
				}
			}
		}
		.box>ul::before {
			content: "";
			display: block;
			clear: both;
		}
		.hotcity,
		.num::before {
			content: "";
			display: block;
			clear: both;
		}
	}
</style>
