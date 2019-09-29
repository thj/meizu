<template>
    <div class="HomePhone">
        <div class="HomePhoneTop">
            <h2>智能手机</h2><span></span>
        </div>
        <div class="HomePhoneBanner">
            <a><img src="@/images/baner3.jpg"></a>
        </div>
        <div class="HomePhoneList">
            <a href=""><img src="@/images/phone1.png" >
                <p>魅族 16s Pro</p>
                <span style="border:none;color:#999;"><em>新品</em>高通骁龙 855 Puls...</span>
                <i>¥ 2699</i>
            </a>
            <a href=""><img src="@/images/phone2.png" >
                <p>魅族 16Xs</p>
                <span><em>免息</em>4800W AI三摄 屏幕...</span>
                <i>¥ 1499</i>
            </a>
            <a href=""><img src="@/images/phone3.png" >
                <p>魅族 16s</p>
                <span><em>领劵</em>骁龙855 4800W光学...</span>
                <i>¥ 2699</i>
            </a>
            <a href=""><img src="@/images/phone4.png" >
                <p>魅族 16th</p>
                <span><em>领劵</em>骁龙845 屏幕下指纹</span>
                <i>¥ 2298</i>
            </a>
            <a href=""><img src="@/images/phone5.png" >
                <p>魅族 Note9</p>
                <span><em>领劵</em>骁龙675|后置4800...</span>
                <i>¥ 1199</i>
            </a>
            <a href=""><img src="@/images/phone6.png" >
                <p>魅族 16th Plus</p>
                <span><em>领劵</em>骁龙845 屏幕下指纹</span>
                <i>¥ 2698</i>
            </a>
            <a href=""><img src="@/images/phone7.png" >
                <p>魅族 16 X</p>
                <span><em>领劵</em>骁龙710 屏幕下指纹</span>
                <i>¥ 1598</i>
            </a>
            <a href=""><img src="@/images/phone8.png" >
                <p>魅蓝 E3</p>
                <span style="border:none;color:#999;"><em>领劵</em>骁龙636处理器 全系...</span>
                <i>¥ 1799</i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"homephone",
    
}
</script>
<style scoped>
    .HomePhone{
        width:100%;
        background:#f4f4f4;
    }
    .HomePhoneTop{
        height:.9rem;
        width:100%;
        text-align:center;
        line-height:.9rem;
        position:relative;
        margin-bottom:.12rem;
    }
    .HomePhoneTop h2{
        font-size:.18rem;
        font-weight:bold;
        color:#000;
    }
    .HomePhoneTop span{
        display:block;
        width:.22rem;
        height:.03rem;
        background:#0bbbef;
        position:absolute;
        bottom:.15rem;
        left:1.76rem;
    }
    .HomePhoneBanner{
        margin-bottom:.12rem;
    }
    .HomePhoneBanner img{
        display:block;
        height:1.7rem;
        width:100%;
    }
    .HomePhoneList{
        display:flex;
        width:3.75rem;
        justify-content:space-between;
        flex-wrap:wrap;
        text-align:center;
    }
    .HomePhoneList a{
        display:block;
        height:2.4rem;
        padding:.2rem 0;
        width:49%;
        background:#fff;
        margin-bottom:.04rem;
    }
    .HomePhoneList a img{
        display:block;
        height:1.56rem;
        width:100%;
        margin:0 auto;
    }
    .HomePhoneList a p{
        font-size:.14rem;
        line-height:.36rem;
        color:#333;
    }
    .HomePhoneList a span{
        display:block;
        width:1.72rem;
        height:.18rem;
        line-height:.18rem;
        color:#c00;
        font-size:.12rem;
        border:.01rem solid #c00;
        margin-left:.06rem;
    }
    .HomePhoneList a span em{
        display:block;
        width:.34rem;
        height:.18rem;
        line-height:.18rem;
        color:#fff;
        background:#c00;
        float:left;
    }
    .HomePhoneList a i{
        font-size:.14rem;
        color:#c00;
        line-height:.36rem;
    }
</style>