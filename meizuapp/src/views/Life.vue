<template>
    <div id="Life">
        <div class="LifeBanner">
            <a><img src="@/images/life/banner.jpg"></a>
        </div>
        <div class="LifeList">
            <a href=""><img src="@/images/life/img1.jpg" >
                <p>Pandaer readnap T恤</p>
                <span>潮趣设计 | 优质纯棉德国织</span>
                <i>¥ 199</i>
            </a>
            <a href=""><img src="@/images/life/img2.jpg" >
                <p>Lifeme 梨木伞</p>
                <span>高定时装压花伞布 | 隔绝99...</span>
                <i>¥ 499</i>
            </a>
            <a href=""><img src="@/images/life/img3.jpg" >
                <p>魅族星球探索 帆布袋</p>
                <span>星球无限 追求不止</span>
                <i>¥ 69</i>
            </a>
            <a href=""><img src="@/images/life/img4.jpg" >
                <p>魅族星球探索 鼠标垫</p>
                <span>星球无限 追求不止</span>
                <i>¥ 69</i>
            </a>
            <a href=""><img src="@/images/life/img5.jpg" >
                <p>魅族极简都市双肩包</p>
                <span>650D高耐磨牛津布...</span>
                <i>¥ 179</i>
            </a>
            <a href=""><img src="@/images/life/img6.jpg" >
                <p>魅蓝20寸旅行箱 酷MA萌...</p>
                <span>静音双排万向轮设计，具备...</span>
                <i>¥ 349</i>
            </a>
        </div>
        <HFooter></HFooter>
    </div>
</template>
<script>

import HFooter from '@/components/HFooter.vue'

export default {
    name:"life",
    components:{
        HFooter
    }
}
</script>
<style scoped>
    #Life{
        width:100%;
        height:6.67rem;
        overflow:scroll;
        background:#f4f4f4;
        position:relative;
        top:.9rem;
    }
    .LifeBanner img{
        display:block;
        height:1.94rem;
        width:100%;
        margin-bottom:.05rem
    }
    .LifeList{
        display:flex;
        width:3.75rem;
        justify-content:space-between;
        flex-wrap:wrap;
        text-align:center;
    }
    .LifeList a{
        display:block;
        height:2.4rem;
        padding:.2rem 0;
        width:49%;
        background:#fff;
        margin-bottom:.04rem;
    }
    .LifeList a img{
        display:block;
        height:1.56rem;
        width:1.56rem;
        margin:0 auto;
        
    }
    .LifeList a p{
        font-size:.14rem;
        line-height:.36rem;
        color:#333;
    }
    .LifeList a span{
        display:block;
        width:1.72rem;
        height:.18rem;
        line-height:.18rem;
        color:#999;
        font-size:.12rem;
        margin-left:.06rem;
    }
    .LifeList a i{
        font-size:.14rem;
        line-height:.36rem;
        color:#c00;
    }
</style>