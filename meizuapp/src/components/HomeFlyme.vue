<template>
    <div class="HomeFlyme">
        <div class="HomeFlymeTop">
            <h2>Flyme</h2><span></span>
        </div>
        <div class="HomeFlymeList">
            <a href=""><img src="@/images/flyme1.jpg" ><p>Flyme 7 新春版</p></a>
            <a href=""><img src="@/images/flyme2.jpg" ><p>16 相机五大功能</p></a>
            <a href=""><img src="@/images/flyme3.jpg" ><p>性能更出众</p></a>
            <a href=""><img src="@/images/flyme4.jpg" ><p>解锁真更快</p></a>
            <a href=""><img src="@/images/flyme5.jpg" ><p>管理手机妙招</p></a>
            <a href=""><img src="@/images/flyme6.jpg" ><p>全局夜间模式</p></a>
            <a href=""><img src="@/images/flyme7.jpg" ><p>全新魅族社区</p></a>
            <a href=""><img src="@/images/flyme8.jpg" ><p>驾驶辅助</p></a>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeFlyme"
}
</script>
<style scoped>
    .HomeFlyme{
        width:100%;
        background:#f4f4f4;
    }
    .HomeFlymeTop{
        height:.9rem;
        width:100%;
        text-align:center;
        line-height:.9rem;
        position:relative;
        margin-bottom:.12rem;
    }
    .HomeFlymeTop h2{
        font-size:.18rem;
        font-weight:bold;
        color:#000;
    }
    .HomeFlymeTop span{
        display:block;
        width:.22rem;
        height:.03rem;
        background:#147df0;
        position:absolute;
        bottom:.15rem;
        left:1.76rem;
    }
    .HomeFlymeList{
        display:flex;
        width:3.75rem;
        justify-content:space-between;
        flex-wrap:wrap;
        text-align:left;
    }
    .HomeFlymeList a{
        display:block;
        height:1.5rem;
        width:49%;
        background:#fff;
        margin-bottom:.04rem;
    }
    .HomeFlymeList>a>img{
        display:block;
        width:100%;
        height:1.1rem;
    }
    .HomeFlymeList>a>p{
        text-align:center;
        line-height:.36rem;
        font-size:.12rem;
    }
</style>