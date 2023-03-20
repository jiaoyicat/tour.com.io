<template>
<div class="listbox">
    <p>周末去哪儿</p>
    <ul class="list">
        <li class="itme" v-for="(itme,index) in list" :key="index" >
            <a href="">
            <img :src="itme.imgUrl" alt="周末去哪儿">
            <p v-text="itme.title"></p>
            <p  v-text="itme.content"> </p>
            </a>
        </li>
    </ul>
</div>
</template>
<script>
export default{
    data(){
        return{
            "list":[
            {
                "id":"01",
                "imgUrl": require("@/assets/images/1.jpg"),
                "title":"西安打卡",
                "content":"寻长安梦,开启创越的圆梦之旅"
            },
            {
                "id":"02",
                "imgUrl": require("@/assets/images/1.jpg"),
                "title":"西安打卡",
                "content":"寻长安梦,开启创越的圆梦之旅"
            },
            {
                "id":"03",
                "imgUrl": require("@/assets/images/1.jpg"),
                "title":"西安打卡",
                "content":"寻长安梦,开启创越的圆梦之旅"
            },
            {
            "id":"04",
            "imgUrl": require("@/assets/images/1.jpg"),
            "title":"西安打卡",
            "content":"寻长安梦,开启创越的圆梦之旅"
            },
            {
                "id":"05",
                "imgUrl": require("@/assets/images/1.jpg"),
                "title":"西安打卡",
                "content":"寻长安梦,开启创越的圆梦之旅"
            },            
            {
                "id":"06",
                "imgUrl": require("@/assets/images/1.jpg"),
                "title":"西安打卡",
                "content":"寻长安梦,开启创越的圆梦之旅"
            },
            {
                "id":"07",
                "imgUrl": require("@/assets/images/1.jpg"),
                "title":"西安打卡",
                "content":"寻长安梦,开启创越的圆梦之旅"
            },
            {
                "id":"08",
                "imgUrl": require("@/assets/images/1.jpg"),
                "title":"西安打卡",
                "content":"寻长安梦,开启创越的圆梦之旅"
            },
            {
                "id":"9",
                "imgUrl": require("@/assets/images/1.jpg"),
                "title":"西安打卡",
                "content":"寻长安梦,开启创越的圆梦之旅"
            }
        ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .listbox{
        p:first-child{
            font-size: .32rem;
            line-height: 0.8rem;
            margin-left: 0.2rem;
        }
        
        .list{
            background-color: white;
            .itme{
                 img{
                width: 100%;
                height: 3.8rem;
                }
                font-size: .35rem;
                line-height: 30px;
                p{
                    margin-left: 0.2rem;
                }
            }
           
        }
    }
</style>