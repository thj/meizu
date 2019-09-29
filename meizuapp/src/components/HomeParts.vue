<template>
    <div class="HomeParts">
       <div class="HomePartsTop">
            <h2>智能配件</h2><span></span>
        </div>
        <div class="HomePartsBanner">
            <a><img src="@/images/parts1.jpg" class="HPBleft"></a>
            <a><img src="@/images/parts2.jpg" class="HPBright"></a>
            <a><img src="@/images/parts3.jpg" class="HPBleft"></a>
            <a><img src="@/images/parts4.jpg" class="HPBright"></a>
        </div>
        <div class="HomePartsList">
            <a href=""><img src="@/images/parts5.png" >
                <p>魅族 16s Pro 亲肤壳膜套装</p>
                <span>亲肤亲近 安全防护</span>
                <i>¥ 39</i>
            </a>
            <a href=""><img src="@/images/parts6.png" >
                <p>魅族 Mico USB 数据线</p>
                <span>广泛兼容 经久耐用</span>
                <i>¥ 29</i>
            </a>
            <a href=""><img src="@/images/parts7.png" >
                <p>魅族 Ttpe-C 金属数据线</p>
                <span>支持2A快速充电 耐用又放心</span>
                <i>¥ 39</i>
            </a>
            <a href=""><img src="@/images/parts6.png" >
                <p>魅族 Mico USB 数据线</p>
                <span>广泛兼容 经久耐用</span>
                <i>¥ 29</i>
            </a>
            <a href=""><img src="@/images/parts8.png" >
                <p>快充电源适配器 (UP0830...</p>
                <span style="color:#c00;border:.01rem solid #c00;"><em>特惠</em>快速充电 安全无忧</span>
                <i>¥ 69</i><b style="text-decoration-line: line-through;">¥ 89</b>
            </a>
            <a href=""><img src="@/images/parts9.png" >
                <p>魅族 X8 高透保护膜</p>
                <span>高透光率 助双眼捕捉每一...</span>
                <i>¥ 19</i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeParts"
}
</script>
<style scoped>
    .HomeParts{
        width:100%;
        background:#f4f4f4;
    }
    .HomePartsTop{
        height:.9rem;
        width:100%;
        text-align:center;
        line-height:.9rem;
        position:relative;
        margin-bottom:.12rem;
    }
    .HomePartsTop h2{
        font-size:.18rem;
        font-weight:bold;
        color:#000;
    }
    .HomePartsTop span{
        display:block;
        width:.22rem;
        height:.03rem;
        background:#7143ff;
        position:absolute;
        bottom:.15rem;
        left:1.76rem;
    }
    .HomePartsBanner{
        height:3.3rem;
        width:3.75rem;
        margin-bottom:.05rem
    }
    .HPBleft{
        display:block;
        width:50%;
        height:50%;
        float:left;
    }
    .HPBright{
        display:block;
        width:50%;
        height:50%;
        float:right;
    }
    .HomePartsList{
        display:flex;
        width:3.75rem;
        justify-content:space-between;
        flex-wrap:wrap;
        text-align:center;
    }
    .HomePartsList a{
        display:block;
        height:2.4rem;
        padding:.2rem 0;
        width:49%;
        background:#fff;
        margin-bottom:.04rem;
    }
    .HomePartsList a img{
        display:block;
        height:1.56rem;
        width:100%;
        margin:0 auto;
    }
    .HomePartsList a p{
        font-size:.14rem;
        line-height:.36rem;
        color:#333;
    }
    .HomePartsList a span{
        display:block;
        width:1.72rem;
        height:.18rem;
        line-height:.18rem;
        color:#999;
        font-size:.12rem;
        margin-left:.06rem;
    }
    .HomePartsList a span em{
        display:block;
        width:.34rem;
        height:.18rem;
        line-height:.18rem;
        color:#fff;
        background:#c00;
        float:left;
    }
    .HomePartsList a i{
        font-size:.14rem;
        color:#c00;
        line-height:.36rem;
    }
</style>