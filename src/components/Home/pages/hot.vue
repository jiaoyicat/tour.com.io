<template>
    <div class="box">

    
    <div class="hot">
        <div class="hot-title">
            <div class="hot-title-left">
                <img src="@/assets/images/icon/火 (1).svg" alt="">
                <span>本周热热门榜单</span>
            </div> 
            <div class="ho-title-right">
                
                全部榜单<span class="iconfont icon-next"></span>
            </div>
        </div>
        <ul class="hot-list" >
            <li class="hot-itme" v-for="(itme,index) in hotList" :key="index">
                <img :src="itme.imgUrl" alt="">
                <p class="hot-itme-title" v-text="itme.name"></p>
                <span class="price" v-text="itme.price"></span>起
            </li>
            
        </ul>
    </div>
</div>
</template>    
<script>
export default{
    data(){
        return{
            "hotList":[
        {
            "imgUrl":require("@/assets/images/hotimg/bwg.webp") ,
            "name":"博物馆博物馆博物馆博物馆博物馆博物馆博物馆",
            "price":"800￥"
        },
        {
            "imgUrl":require("@/assets/images/hotimg/bwg.webp") ,
            "name":"博物馆博物馆博物馆博物馆博物馆博物馆博物馆",
            "price":"800￥"
        },
        {
            "imgUrl":require("@/assets/images/hotimg/bwg.webp") ,
            "name":"博物馆博物馆博物馆博物馆博物馆博物馆博物馆",
            "price":"800￥"
        },

         {
            "imgUrl":require("@/assets/images/hotimg/bwg.webp") ,
            "name":"博物馆博物馆博物馆博物馆博物馆博物馆博物馆",
            "price":"800￥"
        },
        {
            "imgUrl":require("@/assets/images/hotimg/bwg.webp") ,
            "name":"博物馆博物馆博物馆博物馆博物馆博物馆博物馆",
            "price":"800￥"
        },
        {
            "imgUrl":require("@/assets/images/hotimg/bwg.webp") ,
            "name":"博物馆博物馆博物馆博物馆博物馆博物馆博物馆",
            "price":"800￥"
        },
        {
            "imgUrl":require("@/assets/images/hotimg/bwg.webp") ,
            "name":"博物馆博物馆博物馆博物馆博物馆博物馆博物馆",
            "price":"800￥"
        },            
        {
            "imgUrl":require("@/assets/images/hotimg/bwg.webp") ,
            "name":"博物馆博物馆博物馆博物馆博物馆博物馆博物馆",
            "price":"800￥"
        },
        {
            "imgUrl":require("@/assets/images/hotimg/bwg.webp") ,
            "name":"博物馆博物馆博物馆博物馆博物馆博物馆博物馆",
            "price":"800￥"
        },
        {
            "imgUrl":require("@/assets/images/hotimg/bwg.webp") ,
            "name":"博物馆博物馆博物馆博物馆博物馆博物馆博物馆",
            "price":"800￥"
        },
        {
            "imgUrl":require("@/assets/images/hotimg/bwg.webp") ,
            "name":"博物馆博物馆博物馆博物馆博物馆博物馆博物馆",
            "price":"800￥"
        },
        {
            "imgUrl":require("@/assets/images/hotimg/bwg.webp") ,
            "name":"博物馆博物馆博物馆博物馆博物馆博物馆博物馆",
            "price":"800￥"
        }
        ]
        }
    }
}
</script>
<style lang="scss" rel="text/scss" scoped>
.box{
    overflow: hidden;

.hot{
    margin-top: 0.2rem;
    background-color: white;
   
    .hot-title{
        display: flex;
        justify-content: space-between;
        padding: 0px 10px 0px 10px;
        font-size: 0.32rem;
        line-height:50px ;
        .hot-title-left{
            img{
                width: 0.6rem;
                height: 0.5rem;
                vertical-align: text-bottom;
            }
        }
    }
    .hot-list{
        width: 100%;
        padding: 0px 0.2rem;
        white-space: nowrap;
        overflow-x: scroll;
        .hot-itme{
            position: relative;
            width: 2rem;
            font-size: 0.25rem;
            display: inline-block;
            text-align: center;
            padding: 0.04rem;
            line-height: 0.3rem;
            height: 3rem;
            img{
                width: 2rem;
                height: 2rem; 
            }
            .price{
                color: #ff8300;
            }
            .hot-itme-title{
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
        .hot-itme:nth-child(1)::before{
            content: "top1";
            position:absolute;
            top: 0.04rem;
            left: 0;
            height: 0.4rem;
            width: 0.8rem;
            background: linear-gradient(to right, orange
, red);
            
            line-height: 0.4rem;
            text-align: center;
            color: white;
           
        }
        .hot-itme:nth-child(2)::before{
            content: "top2";
            position:absolute;
            top: 0.04rem;
            left: 0;
            height: 0.4rem;
            width: 0.8rem;
            background: linear-gradient(to right, orange
, red);
            
            line-height: 0.4rem;
            text-align: center;
            color: white;
           
        }
        .hot-itme:nth-child(3)::before{
            content: "top3";
            position:absolute;
            top: 0.04rem;
            left: 0;
            height: 0.4rem;
            width: 0.8rem;
            background: linear-gradient(to right, orange
, red);
            // border-radius: 20%;
            line-height: 0.4rem;
            text-align: center;
            color: white;
            // margin: 0.1rem 0px 0px 0.1rem;
        }
    }
}
}   
    
</style>

