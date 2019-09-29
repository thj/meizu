<template>
    <div class="HomeAcoustics">
        <div class="HomeAcousticsTop">
            <h2>魅族声学</h2><span></span>
        </div>
        <div class="HomeAcousticsBanner">
            <a><img src="@/images/acoustics1.jpg" class="HAbanner HAbanner1"></a>
            <a><img src="@/images/acoustics3.jpg" class="HAbanner HAbanner2"></a>
            <a><img src="@/images/acoustics4.jpg" class="HAbanner HAbanner1"></a>
            <a><img src="@/images/acoustics2.jpg" class="HAbanner HAbanner2"></a>
        </div>
        <div class="HomeAcousticsList">
            <a href=""><img src="@/images/acoustics5.png" >
                <p>魅族 HiFi 解码耳放 PRO</p>
                <span><em>新品</em>高性能DAC芯片|超...</span>
                <i>¥ 269</i>
            </a>
            <a href=""><img src="@/images/acoustics6.png" >
                <p>魅族 POP2 真无线蓝牙耳机</p>
                <span><em>热卖</em>[【限时三期免息】 蓝...]</span>
                <i>¥ 399</i>
            </a>
            <a href=""><img src="@/images/acoustics7.png" >
                <p>魅族 HIFI 解码耳放</p>
                <span><em>热卖</em>小身材 大能量</span>
                <i>¥ 169</i>
            </a>
            <a href=""><img src="@/images/acoustics8.png" >
                <p>魅族 EP2X 耳机</p>
                <span><em>特惠</em>契合声音的流动之美</span>
                <i>¥ 69</i><b>¥ 129</b>
            </a>
            <a href=""><img src="@/images/acoustics9.png" >
                <p>魅族 EP2C 耳机</p>
                <span style="border:none;color:#999;">钕铁硼单元 Type-C接口</span>
                <i>¥ 129</i>
            </a>
            <a href=""><img src="@/images/acoustics10.png" >
                <p>魅族 EP52 Lite 蓝牙耳机</p>
                <span style="border:none;color:#999;">超高性价比创造无线新声代</span>
                <i>¥ 129</i>
            </a>
            <a href=""><img src="@/images/acoustics11.png" >
                <p>魅族蓝牙音频接收器</p>
                <span style="border:none;color:#999;">独立音频芯片音质媲美有线</span>
                <i>¥ 89</i>
            </a>
            <a href=""><img src="@/images/acoustics12.png" >
                <p>魅族 EP21-HD耳机</p>
                <span style="border:none;color:#999;">小巧圆润 TPE线材</span>
                <i>¥ 99</i>
            </a>
            <a href=""><img src="@/images/acoustics13.png" >
                <p>魅族 EP63NC 无线降噪耳机</p>
                <span><em>热卖</em>智能降噪 声临其境</span>
                <i>¥ 499</i>
            </a>
            <a href=""><img src="@/images/acoustics14.png" >
                <p>魅族 HALO 激光蓝牙耳机</p>
                <span><em>特惠</em>夜跑神器 随性张扬</span>
                <i>¥ 499</i><b>¥999</b>
            </a>
            <a href=""><img src="@/images/acoustics15.png" >
                <p>魅族 LIVE 四单元动铁耳机</p>
                <span ><em>特惠</em>Knowles四动铁 双通...</span>
                <i>¥ 1099</i><b>¥1299</b>
            </a>
            <a href=""><img src="@/images/acoustics16.png" >
                <p>魅族 Flow三单元耳机</p>
                <span style="border:none;color:#999;">用的惬意 听得尽兴</span>
                <i>¥ 379</i><b>¥599</b>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeAcoustics"
}
</script>
<style scoped>
    .HomeAcoustics{
        width:100%;
        background:#f4f4f4;
    }
    .HomeAcousticsTop{
        height:.9rem;
        width:100%;
        text-align:center;
        line-height:.9rem;
        position:relative;
        margin-bottom:.12rem;
    }
    .HomeAcousticsTop h2{
        font-size:.18rem;
        font-weight:bold;
        color:#000;
    }
    .HomeAcousticsTop span{
        display:block;
        width:.22rem;
        height:.03rem;
        background:#f55c5c;
        position:absolute;
        bottom:.15rem;
        left:1.76rem;
    }
    .HomeAcousticsBanner{
        height:3.3rem;
        width:3.75rem;
        margin-bottom:.05rem
    }
    .HAbanner{
        display:block;
        width:50%;
        height:50%;
    }
    .HAbanner1{
        float:left;
    }
    .HAbanner2{
        float:right;
    }
    .HomeAcousticsList{
        display:flex;
        width:3.75rem;
        justify-content:space-between;
        flex-wrap:wrap;
        text-align:center;
    }
    .HomeAcousticsList a{
        display:block;
        height:2.4rem;
        padding:.2rem 0;
        width:49%;
        margin-bottom:.04rem;
        background: #fff;
    }
    .HomeAcousticsList a img{
        display:block;
        height:1.56rem;
        width:100%;
        margin:0 auto;
    }
    .HomeAcousticsList a p{
        font-size:.14rem;
        line-height:.36rem;
        color:#333;
    }
    .HomeAcousticsList a span{
        display:block;
        width:1.72rem;
        height:.18rem;
        line-height:.18rem;
        color:#c00;
        font-size:.12rem;
        border:.01rem solid #c00;
        margin-left:.06rem;
    }
    .HomeAcousticsList a span em{
        display:block;
        width:.34rem;
        height:.18rem;
        line-height:.18rem;
        color:#fff;
        background:#c00;
        float:left;
    }
    .HomeAcousticsList a i{
        font-size:.14rem;
        line-height:.36rem;
        color:#c00;
    }
    .HomeAcousticsList a b{
        text-decoration-line: line-through;
    }
</style>