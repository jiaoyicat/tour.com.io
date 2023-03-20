<template>
    <header>
        <div class="header-return" v-show="show">
            <div class="" @click="returnHome"><span class="iconfont icon-prev"></span></div>
        </div>
        <div  :style="styleopacity" class="header-top" v-show="!show">
            <div class="return" @click="returnHome"><span class="iconfont icon-prev"></span></div>
		<div class="title">景点详情</div>
        </div>

	</header>
</template>
<script>
export default{
    data(){
        return{
            show:"true" ,
            styleopacity:{
                opacity:0
            }
        }
          
    },
    mounted(){
        window.addEventListener("scroll",()=>{
            let top=document.documentElement.scrollTop
            if(top>10){
                let opacity=(top/250).toFixed(2);
                opacity=opacity>1?1:opacity;
                this.styleopacity={opacity}
                this.show=false

            }else{
                this.show=true

            }
        })//监听对象，回调函数
    },
    methods: {
			returnHome() {
				this.$router.push("/")
			}
        }
}
</script>
<style lang="scss" scoped>
	@import "@/assets/css/common.scss";
    header{
        width: 100%;
        position: fixed;
        z-index: 9999;
        .header-return{
            height: 30px;
            width: 30px;
            line-height: 8px;
            border-radius:50% ;
            text-align: center;
            background-color: #ffffff;
        }
        .header-top {
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
    }
	
</style>