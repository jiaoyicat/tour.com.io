<template>
    <div class="detail">
        <Detalilheader/>
        <Detalilbanner/> 
        <Detalillist/>
        <div @click="toTop">回到顶部{{}}</div>
        
    </div>
</template>
<script>
    import Detalilheader from "@/components/detail/pages/haeder.vue"
    import Detalilbanner from "@/components/detail/pages/banner.vue"
    import Detalillist from "@/components/detail/pages/list.vue"
    export default{
        components:{
            Detalilheader,
            Detalilbanner,
            Detalillist
        },
        methods:{
        toTop:function(){
            document.documentElement.scrollTop-=100;
            let c=" ";
            if(document.documentElement.scrollTop>0){
                c=setTimeout(()=>this.toTop(),20);
            }else{
                clearTimeout(c)
            }
            },
        },
         activated(){
               console.log(this.$route.query.i)
         }
    }
</script>
<style lang="scss" scoped>

</style>