<template>
    <van-swipe :autoplay="10000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img :src="image" alt="banner"/>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
    export default {
    data() {
     return {
        images: [
             require("@/assets/images/1.jpg"),
             require("@/assets/images/2.jpg"),
             require("@/assets/images/3.jpg"),
             require("@/assets/images/4.jpg")
         ]
        }
    }
  }
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
van-swipe{
  height: 2rem;
  margin-bottom: 0px;
  background-color: white;
}
img{
  width: 100%;
  height: 3rem;
}
div::v-deep{
    .van-swipe__indicator{
    background-color: black;
    opacity: 0.5;
  }
  .van-swipe__indicator--active{
    background-color: black;
    opacity: 1;
  }
}
</style>