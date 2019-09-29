<template>
    <div class="Phone">
        <div class="PhoneBanner">
            <a><img src="@/images/baner7.jpg"></a>
        </div>
        <div class="PhoneList">
            <a href=""><img src="@/images/phone/img1.jpg" >
                <p>魅族 16s Pro</p>
                <span style="border:none;color:#999;"><em>新品</em>高通骁龙 855 Puls...</span>
                <i>¥ 2699</i>
            </a>
            <a href=""><img src="@/images/phone/img2.jpg" >
                <p>魅族 16s</p>
                <span><em>直降</em>【限时领劵最高立减...</span>
                <i>¥ 2699</i>
            </a>
            <a href=""><img src="@/images/phone/img3.jpg" >
                <p>魅族 16X </p>
                <span><em>直降</em>【限时领劵最高立减...</span>
                <i>¥ 2699</i>
            </a>
            <a href=""><img src="@/images/phone/img4.jpg" >
                <p>魅族 16Xs</p>
                <span><em>新品</em>【限时3期免息】极...</span>
                <i>¥ 1499</i>
            </a>
            <a href=""><img src="@/images/phone/img5.jpg" >
                <p>魅族 16th Plus</p>
                <span style="border:none;color:#999;">【限时领劵最高立减700】...</span>
                <i>¥ 2698</i>
            </a>
            <a href=""><img src="@/images/phone/img6.jpg" >
                <p>魅族 X8</p>
                <span><em>领劵</em>【限时特惠 4+64G...</span>
                <i>¥ 1298</i>
            </a>
            <a href=""><img src="@/images/phone/img7.jpg" >
                <p>魅族 Note9</p>
                <span><em>直降</em>【限时领劵最高立减...</span>
                <i>¥ 1199</i>
            </a>
            <a href=""><img src="@/images/phone/img8.jpg" >
                <p>魅族 16th</p>
                <span><em>直降</em>【限时领劵最高立减...</span>
                <i>¥ 2298</i>
            </a>
        </div>
        <div class="phoneban">
            <a href=""><img src="@/images/phone/banner.jpg" ></a>
        </div>
        <HFooter></HFooter>
    </div>
</template>
<script>

import HFooter from '@/components/HFooter.vue'

export default {
    name:"phone",
    components:{
        HFooter
    }
}
</script>
<style scoped>
    .Phone{
        width:100%;
         height:6.67rem;
        overflow:scroll;
        background:#f4f4f4;
        margin-top:.9rem;
    }
    .PhoneBanner{
        margin-bottom:.12rem;
    }
    .PhoneBanner img{
        display:block;
        height:1.7rem;
        width:100%;
    }
    .PhoneList{
        display:flex;
        width:3.75rem;
        justify-content:space-between;
        flex-wrap:wrap;
        text-align:center;
    }
    .PhoneList a{
        display:block;
        height:2.4rem;
        padding:.2rem 0;
        width:49%;
        background:#fff;
        margin-bottom:.04rem;
    }
    .PhoneList a img{
        display:block;
        height:1.56rem;
        width:100%;
        margin:0 auto;
    }
    .PhoneList a p{
        font-size:.14rem;
        line-height:.36rem;
        color:#333;
    }
    .PhoneList a span{
        display:block;
        width:1.72rem;
        height:.18rem;
        line-height:.18rem;
        color:#c00;
        font-size:.12rem;
        border:.01rem solid #c00;
        margin-left:.06rem;
    }
    .PhoneList a span em{
        display:block;
        width:.34rem;
        height:.18rem;
        line-height:.18rem;
        color:#fff;
        background:#c00;
        float:left;
    }
    .PhoneList a i{
        font-size:.14rem;
        color:#c00;
        line-height:.36rem;
    }
    .phoneban a img{
        display:block;
        width:100%;
        height:1.6rem;
    }
</style>