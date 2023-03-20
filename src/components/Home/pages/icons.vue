<template>
	<div class="app">
		<van-swipe :autoplay="10000">
			<van-swipe-item v-for="(icons,itme) in pag" :key="itme">
				<ul class="icons">
					<li class="icons-item" v-for="(itme,index) in icons" :key="index">
						<img :src="itme.imgUrl" alt="">
						<p v-text="itme.title"></p>
					</li>
				</ul>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				"iconsList": [
            {
                "id": "01",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                "title": "景点门票"
            },
            {
                "id": "02",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                "title": "一日行"
            },
            {
                "id": "03",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                "title": "景点门票"
            }, 
            {
                "id": "04",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                "title": "景点门票"
            }, 
            {
                "id": "05",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                "title": "景点门票"
            }, 
            {
                "id": "06",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                "title": "景点门票"
            }, 
            {
                "id": "07",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                "title": "景点门票"
            }, 
            {
                "id": "08",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                "title": "景点门票"
            }, 
            {
                "id": "09",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                "title": "景点门票"
            }, 
            {
                "id": "011",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                "title": "景点门票"
            }, 
            {
                "id": "012",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                "title": "景点门票"
            }
        ],
			}
		},
	
	computed: {
		// 一维数组转二维数组   
		pag() {
			let pages = [
				[]
			];
			this.iconsList.forEach((itme, index) => {
				let idx = Math.floor(index / 8); //0-7除8向下取整结果是0，8-~结果是1
				if (!pages[
					idx]) { //如果数组为空，则向里面添加一个数组 前八次判断数组pags[0]是否为空是就添加一个数组，否就循环八次添加 当大于第八次 则判断第二个pages[1]是否为空 步骤同前
					pages[idx] = [];
				}
				pages[idx].push(itme);

			})
			console.log(pages)
			return pages;
		}
	}
	}
</script>
<style lang="scss" scoped>
.app{
  height: 220px;
 background-color: white;
}
	.icons {
		width: 100%;
		overflow: hidden;
		background-color: white;
		.icons-item {
			text-align: center;
			padding-top: 0.2rem;
			width: 25%;
			height: 1.6rem;
			font-size: .28rem;
			float: left;

			img {
				width: 1.1rem;
				height: 1.1rem;
			}
		}
	}

	div::v-deep {
		.van-swipe__indicator {
			width: 6px;
			height: 6px;
			background-color: rgba(144, 144, 144, 0.8);
			opacity: 0.5;
		}

		.van-swipe {
			height: 210px;
		}

		.van-swipe__indicator--active {
			background-color: rgba(0, 175, 190, .8);
			opacity: 1;
		}
	}
</style>
