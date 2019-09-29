<template>
    <div class="HomeLife">
        <div class="HomeLifeTop">
            <h2>生活周边</h2><span></span>
        </div>
        <div class="HomeLifeBanner">
            <a><img src="@/images/life1.jpg" class="HLBleft"></a>
            <a><img src="@/images/life2.jpg" class="HLBright"></a>
            <a><img src="@/images/life3.jpg" class="HLBleft"></a>
            <a><img src="@/images/life4.jpg" class="HLBright"></a>
        </div>
        <div class="HomeLifeList">
            <a href=""><img src="@/images/life5.png" >
                <p>魅族极简都市双肩包</p>
                <span style="color:#c00;border:.01rem solid #c00"><em>热卖</em>650D高耐磨牛津布...</span>
                <i>¥ 179</i>
            </a>
            <a href=""><img src="@/images/life6.jpg" >
                <p>魅族路由器 极速版</p>
                <span style="color:#c00;border:.01rem solid #c00"><em>特惠</em>天生不凡 快狠稳</span>
                <i>¥ 99</i><b style="text-decoration-line: line-through;"> ¥199 </b>
            </a>
            <a href=""><img src="@/images/life7.png" >
                <p>魅族星球探索 帆布袋</p>
                <span>星球无限 追求不止</span>
                <i>¥ 69</i>
            </a>
            <a href=""><img src="@/images/life8.png" >
                <p>魅族星球探索 鼠标垫</p>
                <span>星球无限 追求不止</span>
                <i>¥ 69</i>
            </a>
            <a href=""><img src="@/images/life9.png" >
                <p>魅族 Mini 线控自拍杆</p>
                <span>轻巧迷你 自在随心</span>
                <i>¥ 59</i>
            </a>
            <a href=""><img src="@/images/life10.png" >
                <p>J-BELT</p>
                <span>J.Wong Design 无级舒适</span>
                <i>¥ 999</i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeLife"
}
</script>
<style scoped>
    .HomeLife{
        width:100%;
        background:#f4f4f4;
    }
    .HomeLifeTop{
        height:.9rem;
        width:100%;
        text-align:center;
        line-height:.9rem;
        position:relative;
        margin-bottom:.12rem;
    }
    .HomeLifeTop h2{
        font-size:.18rem;
        font-weight:bold;
        color:#000;
    }
    .HomeLifeTop span{
        display:block;
        width:.22rem;
        height:.03rem;
        background:#7143ff;
        position:absolute;
        bottom:.15rem;
        left:1.76rem;
    }
    .HomeLifeBanner{
        height:3.3rem;
        width:3.75rem;
        margin-bottom:.05rem
    }
    .HLBleft{
        display:block;
        width:50%;
        height:50%;
        float:left;
    }
    .HLBright{
        display:block;
        width:50%;
        height:50%;
        float:right;
    }
    .HomeLifeList{
        display:flex;
        width:3.75rem;
        justify-content:space-between;
        flex-wrap:wrap;
        text-align:center;
    }
    .HomeLifeList a{
        display:block;
        height:2.4rem;
        padding:.2rem 0;
        width:49%;
        background:#fff;
        margin-bottom:.04rem;
    }
    .HomeLifeList a img{
        display:block;
        height:1.56rem;
        width:1.56rem;
        margin:0 auto;
        
    }
    .HomeLifeList a p{
        font-size:.14rem;
        line-height:.36rem;
        color:#333;
    }
    .HomeLifeList a span{
        display:block;
        width:1.72rem;
        height:.18rem;
        line-height:.18rem;
        color:#999;
        font-size:.12rem;
        margin-left:.06rem;
    }
    .HomeLifeList a span em{
        display:block;
        width:.34rem;
        height:.18rem;
        line-height:.18rem;
        color:#fff;
        background:#c00;
        float:left;
    }
    .HomeLifeList a i{
        font-size:.14rem;
        line-height:.36rem;
        color:#c00;
    }
</style>