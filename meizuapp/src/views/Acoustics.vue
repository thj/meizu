<template>
    <div id="Acoustics">
        <div class="AcousticsBanner">
            <a><img src="@/images/acoustics/banner.jpg"></a>
        </div>
        <div class="AcousticsList">
            <a href=""><img src="@/images/acoustics/img1.jpg" >
                <p>MEIZU UR 高端定制耳机...</p>
                <span>【预约专用】私人定制，为...</span>
                <i>¥ 200</i>
            </a>
            <a href=""><img src="@/images/acoustics/img2.jpg" >
                <p>魅族 EP3C 耳机</p>
                <span>Hi-Res 认证高解析音质|高...</span>
                <i>¥ 129</i>
            </a>
            <a href=""><img src="@/images/acoustics/img3.jpg" >
                <p>魅族 HIFI 解码耳放 PRO</p>
                <span>【9月23日10：00限量开售】...</span>
                <i>¥ 269</i>
            </a>
            <a href=""><img src="@/images/acoustics/img4.jpg" >
                <p>魅族 POP2 真无线蓝牙耳机</p>
                <span>【限时3期免息】蓝牙5.0超...</span>
                <i>¥ 399</i>
            </a>
            <a href=""><img src="@/images/acoustics/img5.jpg" >
                <p>魅族 EP2C 耳机</p>
                <span>钕铁硼单元 Type-C接口</span>
                <i>¥ 129</i>
            </a>
            <a href=""><img src="@/images/acoustics/img6.jpg" >
                <p>魅族 HIFI 解码耳放</p>
                <span>【9.26上午10：00限量开售...</span>
                <i>¥ 169</i>
            </a>
        </div>
        <HFooter></HFooter>
    </div>
</template>
<script>

import HFooter from '@/components/HFooter.vue'

export default {
    name:"acoustics",
    components:{
        HFooter
    }
}
</script>
<style scoped>
    #Acoustics{
        width:100%;
        height:6.67rem;
        overflow:scroll;
        background:#f4f4f4;
        position:relative;
        top:.9rem;
    }
    .AcousticsBanner img{
        display:block;
        height:1.95rem;
        width:3.75rem;
        margin-bottom:.05rem
    }
    .AcousticsList{
        display:flex;
        width:3.75rem;
        justify-content:space-between;
        flex-wrap:wrap;
        text-align:center;
    }
    .AcousticsList a{
        display:block;
        height:2.4rem;
        padding:.2rem 0;
        width:49%;
        background:#fff;
        margin-bottom:.04rem;
    }
    .AcousticsList a img{
        display:block;
        height:1.56rem;
        width:100%;
        margin:0 auto;
    }
    .AcousticsList a p{
        font-size:.14rem;
        line-height:.36rem;
        color:#333;
    }
    .AcousticsList a span{
        display:block;
        width:1.72rem;
        height:.18rem;
        line-height:.18rem;
        font-size:.12rem;
        border:.01rem solid #c00;
        margin-left:.06rem;
        border:none;
        color:#999;
    }
    .AcousticsList a i{
        font-size:.14rem;
        line-height:.36rem;
        color:#c00;
    }
</style>