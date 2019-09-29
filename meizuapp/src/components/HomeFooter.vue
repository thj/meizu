<template>
    <div class="HomeFooter">
        
        <div class="contact">
            <span><img src="@/images/footer1.jpg">400-788-3333</span>
            <span><img src="@/images/footer2.jpg">在线客服</span>
        </div>
        <div class="footer">
            <p>粤ICP备13003602号-2合字B2-20170010<br>
            营业执照©2018 Meizu All rights reserved</p>
            <span><img src="@/images/footer3.jpg">简体中文</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeFooter",
    methods: {
        goTop(){
            document.documentElement.scrollTop = 0;
        }
    },
}
</script>
<style scoped>
    .HomeFooter{
        height:1rem;
        width:100%; 
        margin-top:.2rem;
    }
    .contact{
        display:flex;
        width:3.75rem;
        justify-content:space-around;
        flex-wrap:wrap;
        text-align:left;
    }
    .contact span{
        display:block;
        width:1.63rem;
        height:.36rem;
        font-size:.16rem;
        color:#fff;
        background:#00b4ff;
        border:.01rem solid #00b4ff;
        border-radius:.18rem;
        line-height:.36rem;
    }
    .contact span img{
        display:block;
        float:left;
        margin:.08rem .08rem 0 .15rem;
    }
    .footer{
        height:.6rem;
        padding:.2rem .18rem 0 .16rem;
        
    }
    .footer p{
        width:2.46rem;
        height:.38rem;
        text-align:left;
        font-size:.12rem;
        color:#999;
        float:left;
    }
    .footer span{
        display:block;
        height:.31rem;
        width:.9rem;
        float:right;
        line-height:.31rem;
        color:#3b3b3b;
        position:relative;
        text-indent: .25rem;
    }
    .footer span img{
        display:block;
        position:absolute;
        top:.08rem;
        left:0;
    }
</style>