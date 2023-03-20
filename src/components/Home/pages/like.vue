<template >
    <div class="like">
        <div class="title">
            <span><img src="@/assets/images/like/喜欢2.svg" alt="猜你喜欢">猜你喜欢</span>
        </div>
        <div class="content">
            <ul class="list">
                <li class="itme" v-for="(itme,index) in likelist" @click="goDetail(itme.id)">
                    <div class="left">
                        <img :src="itme.imgUrl" alt="">
                        <p class="gl">到此一游</p>
                    </div>
                    <div class="right">
                        <p class="right-title" v-text="itme.title"></p>
                        <div class="strat">
                            <img  v-for=" i of [1,2,3,4,5]" :key="i" :src="itme.imgstrat" alt="五角星">
                        </div>
                        <p class="price"> <span v-text="itme.price"></span>起<span class="loction" v-text="itme.loction"></span></p>
                    </div>
                    
                </li>
                <p class="lazy"><a href="#">加查看所有产品</a></p>
            </ul>
        </div>
        
    </div>
</template>
<script>
    export default{
        data(){
             return{
                "likelist":[
            {
                "id":'01', 
                "title" :"西南海洋官",
                "imgstrat":require("@/assets/images/like/五角星.svg"),
                "number":"1",
                "price":"800￥",
                "loction":"西安",
                "imgUrl":require("@/assets/images/like/bwg.webp")
            },
            {
                "id":'02', 
                "title" :"西南海洋官",
                "imgstrat":require("@/assets/images/like/五角星.svg"),
                "number":"1",
                "price":"800￥",
                "loction":"西安",
                "imgUrl":require("@/assets/images/like/bwg.webp")
            },
            {
                "id":'03', 
                "title" :"西南海洋官",
                "imgstrat":require("@/assets/images/like/五角星.svg"),
                "number":"5",
                "price":"800￥",
                "loction":"西安",
                "imgUrl":require("@/assets/images/like/bwg.webp")
            },
            {
                "id":'04', 
                "title" :"西南海洋官",
                "imgstrat":require("@/assets/images/like/五角星.svg"),
                "number":"4",
                "price":"800￥",
                "loction":"西安",
                "imgUrl":require("@/assets/images/like/bwg.webp")
            },
            {
                "id":'05', 
                "title" :"西南海洋官",
                "imgstrat":require("@/assets/images/like/五角星.svg"),
                "price":"800￥",
                "loction":"西安",
                "imgUrl":require("@/assets/images/like/bwg.webp")
            },            {
                "id":'06', 
                "title" :"西南海洋官",
                "imgstrat":require("@/assets/images/like/五角星.svg"),
                "price":"800￥",
                "loction":"西安",
                "imgUrl":require("@/assets/images/like/bwg.webp")
            },
            
            ]
         } 
        },
    methods:{
            goDetail(id){
        this.$router.push({
            path:"/Detail",
            query:{
                i:id
            }
        })
        }
        }
        
    }
</script>
<style scoped lang="scss">
        .like{
            padding-top:.2rem ;
            width: 100%;
            background-color: white;
            
            .title{
                margin:0rem 0px .2rem .2rem;
                font-size: 0.32rem;
                height: 0.6rem;
                
                span{
                    line-height: 0.6rem;
                }
                img{
                    vertical-align:text-bottom;
                    width: 0.5rem;
                    height: 0.35rem;
                }
            }
        .content{
            .list{
  .gl{
    text-align: center;
    height: .4rem;
    color: red;
    margin: 0px auto;
    position:relative;
 right:-2rem;
 bottom: -0.1rem;
  }
  .lazy{
    border-top: 1px solid #ccc;
    text-align: center;
    font-size: 0.4rem;
    font-weight: 600;
    height: 0.6rem;
    line-height: 0.8rem;
    padding-bottom: .2rem;
  }
  .lazy a{
    color: rgb(24, 120, 236);
  }
                .itme{
                    margin-top: .4rem;
                    margin-left:.2rem ;
                    height: 2rem;
                    width: 100%;
                    font-size: .32rem;
                    padding-bottom: .5rem;
                    clear: both;
                    .strat{
                        line-height: .9rem;
                    }
                    .left{
                        float: left;
                        height: 2rem;
                       
                        img{
                            vertical-align: text-bottom;
                            width: 2rem;
                            height: 2rem;
                            
                        }
                    }
                    .left::before{
                        content: "可定明日";
            position:absolute;
            height: 0.4rem;
            width: 1.5rem;
            background: linear-gradient(to right,#f89d1b 
, #edcea3);
            border-radius:  0px 0px 30% 0px;
            line-height: 0.4rem;
            text-align: center;
            color: white;   
                    }
                    .right{
                        position: relative;
                        height: 2rem;
                        width: 60%;
                        float: left;
                        line-height: .6rem;
                        margin-left: 0.4rem;
                        
                        img{
                            width: .4rem;
                            height: 0.4rem;
                        }
                        .right-title{
                            font-size: .36rem;
                            font-weight: 600;
                        }
                        .price{

                            width: 100%;
                            position: absolute;
                            bottom: 0px;
                            .loction{
                                float: right;
                            }
                            span:nth-child(1){
                                color: #ff8300;
                            }
                        }
                    }
                }
            }
         }
        }
</style>