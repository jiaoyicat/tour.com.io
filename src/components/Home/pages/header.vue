<template>
	<header>
		<div class="return">
			<span class="iconfont icon-prev"></span>
		</div>
		<div class="search">
			<span class="iconfont icon-sousuo"></span>输入城市/景点/游玩主题
			<!-- 回车与前面的内容有空格 -->
		</div>
		<router-link to='/Ctiy'>
			<div class="next">
				西安<span class="iconfont icon-xiangxia"></span>	
			</div>
		</router-link>
	</header>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" rel="text/scss" scoped>
 @import "@/assets/css/common.scss";
	/* scoped作用于当前组件 */
	header {
		    width: 100%;
		    line-height: .88rem;
		    background-color:$header_bgColor;
		    font-size: .28rem;
		    color:#ffffff;
		    display: flex;
	}
	.return {
      width: .6rem;
      text-align: center;
      font-size: .36rem;
	}

	.search {
      flex:1;
      background-color: #fff;
      height: .6rem;
      line-height: .6rem;
      margin-top: .14rem;
      border-radius: .1rem;
      color:#e4e7ea;
      padding: 0 .2rem;
	}
	.next{
		padding-left: 0.1rem;
		color:#e4e7ea;
	}
</style>


