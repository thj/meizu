<template>
    <div class="HomeVideo">
        <div class="HomeVideoTop">
            <h2>精彩视频</h2><span></span>
        </div>
        <div class="HomeVideoList">
            <a href=""><img src="@/images/video1.jpg" ><p>魅族 16s Pro 手机：让热爱 更澎湃</p></a>
            <a href=""><img src="@/images/video2.jpg" ><p>POP2 真无线蓝牙耳机：时刻伴你左右</p></a>
            <a href=""><img src="@/images/video3.jpg" ><p>魅族 16Xs 手机：极边全面屏 三摄长续航</p></a>
            <a href=""><img src="@/images/video4.jpg" ><p>魅族 16s 旗舰手机：追求不止 只因热爱</p></a>
            <a href=""><img src="@/images/video5.jpg" ><p>Flyme 7</p></a>
            <a href=""><img src="@/images/video6.jpg" ><p>安全家庭</p></a>
            <a href=""><img src="@/images/video7.jpg" ><p> 魅族互娱 MGC 探险嘉年华</p></a>
            <a href=""><img src="@/images/video8.jpg" ><p>魅族 X8 游戏性能测试</p></a>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeVideo"
}
</script>
<style scoped>
    .HomeVideo{
        width:100%;
        background:#f4f4f4;
    }
    .HomeVideoTop{
        height:.9rem;
        width:100%;
        text-align:center;
        line-height:.9rem;
        position:relative;
        margin-bottom:.12rem;
    }
    .HomeVideoTop h2{
        font-size:.18rem;
        font-weight:bold;
        color:#000;
    }
    .HomeVideoTop span{
        display:block;
        width:.22rem;
        height:.03rem;
        background:#cd46ff;
        position:absolute;
        bottom:.15rem;
        left:1.76rem;
    }
    .HomeVideoList{
        display:flex;
        width:3.75rem;
        justify-content:space-between;
        flex-wrap:wrap;
        text-align:left;
    }
    .HomeVideoList a{
        display:block;
        height:1.5rem;
        width:49%;
        background:#fff;
        margin-bottom:.04rem;
    }
    .HomeVideoList>a>img{
        display:block;
        width:100%;
        height:1.1rem;
    }
    .HomeVideoList>a>p{
        text-align:center;
        line-height:.36rem;
        font-size:.12rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        width:100%;
    }
</style>