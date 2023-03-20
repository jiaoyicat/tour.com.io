<template>
<footer>
    <p class="title"> <span>票面价</span>是指通过景区指定窗口售卖的纸制门票上标注的价格</p>
    <div class="content">
        <p class="box">
            <ul class="navs">
                <li v-for="(nav,index) in navList" :key="index">
                <span :style="{'background-position':ps(index)}"></span>{{nav}}
                
                </li>
            </ul>
            
        </p>
        <ul class="list">
                <li class="itme">登录</li>
                <li class="itme">我的订单</li>
                <li class="itme">最近浏览</li>
                <li class="itme">关于我们</li>
                <li class="itme"><div @click="toggle()" class="a">{{txt}}</div></li>
                 
        </ul>
        <div class="buttom">
            <p><span><a href="">触屏版</a> |</span><span><a href="">电脑版</a> </span></p>
            <p>Qunar 京ICP备05021087意见反馈</p>
        </div>
    </div>
</footer>
</template> 
<script> 

export default{
    data(){
        return{
          "navList":["机票","酒店","公寓"],
          flag:0,
          txt:'更多',
          toggleClass:'iconshuangjiantouxia'
        }
    },
    methods:{  
        ps(index){
          return -(index<7?index:index-7) * 25 +'px '+ (index>6?-25:0)+'px';
        },
        toggle(){
            console.log()
          if(this.flag == 1){
            this.navList = ["机票","酒店","公寓"];
            this.flag = 0;
            this.txt = '更多';
            this.toggleClass = 'iconshuangjiantouxia';

          }else{
            this.navList = ["机票","酒店","公寓","团购","火车票","景点","接送机","度假","攻略","旅图","车车","当地人"]
            this.flag = 1;
            this.txt = '收起';
            this.toggleClass = 'iconshuangjiantoushang'
          }
        }
      }
}
</script>
<style lang="scss" scoped>
footer{
    font-size: 0.3rem;
    width: 100%;
    margin-top: 0.2rem;
    .nav{
        margin-top: 0.4rem;
        display: flex;
        justify-content: space-around;
    }
    .navs{
        margin-left: 1rem;
        li{
            display: inline-block;
            width: 30%;
            text-align: center;
            font-size: 0.3rem;
            margin-top: 0.2rem;
        }
        span{
            display: block;
            width: 25px;
             height: 25px;
             background: url(@/assets/images/footer.png)no-repeat;
             background-position: 0px 0px ;
             background-size: 175px 1rem;
             position: relative;
             bottom: -20px;
            left: 5px;
        }
        // li::before{
        //     content: "";
        //     display: block;
        //     width: 25px;
        //     height: 25px;
        //     position: relative;
        //     bottom: -20px;
        //     left: 5px;
        //     background: url(@/assets/images/footer.png)no-repeat;
        //     background-position: 0px 0px ;
        //     background-size: 175px 1rem;
        // }一张集成图标再不同位置使用方法
    }
    .title{
        padding-left: 0.2rem;
        height: 0.6rem;
        line-height: .6rem;
        font-size: 12px;
        background-color: white;
        span{
            font-weight: 700;
        }
    }
    .content{
            .list{
            display: flex;
            justify-content: space-around;
            margin-top: 0.5rem;
            li:not(:first-child){
                color: aqua;
            }
        }
        .buttom{
                p{
                    margin-top: 0.5rem;
                    text-align: center;
                }
                p:last-child{
                   padding-bottom: .5rem;
                }
        }
    }
}

</style>