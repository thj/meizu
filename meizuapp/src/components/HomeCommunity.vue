<template>
    <div class="HomeCommunity">
        <div class="HomeCommunityTop">
            <h2>社区热帖</h2><span></span>
        </div>
        <div class="HomeCommunityList">
            <a href=""><img src="@/images/community1.jpg" >
                <div class="Users">
                    <img src="@/images/life5.png" >
                    <p>hooyeah</p>
                </div>
                <span>魅族 Note9 邀请函 JK服妹子出镜，谁才是最美游戏姬？</span>
                <i>魅族Note9 </i>
            </a>
            <a href=""><img src="@/images/community2.jpg" >
                <div class="Users">
                    <img src="@/images/life5.png" >
                    <p>xrx3p</p>
                </div>
                <span>摄影离不开适当的后期，好在如今的你可以在魅族手机上轻松完成操作。</span>
                <i>摄影技巧</i>
            </a>
            <a href=""><img src="@/images/community3.jpg" >
                <div class="Users">
                    <img src="@/images/life5.png" >
                    <p>小墨灰</p>
                </div>
                <span>工作和学习中的沟通总离不开邮件，而Flyme邮箱的出色体验为我们带来的不只是生...</span>
                <i>功能解析</i>
            </a>
            <a href=""><img src="@/images/community4.jpg" >
                <div class="Users">
                    <img src="@/images/life5.png" >
                    <p>屌丝扮海绵</p>
                </div>
                <span>“窗含西岭千秋雪”魅族 16th用旗舰双摄带你领略诗句中的美景</span>
                <i>魅族 16th</i>
            </a>
            <a href=""><img src="@/images/community5.jpg" >
                <div class="Users">
                    <img src="@/images/life5.png" >
                    <p>Keicy520</p>
                </div>
                <span>妙用Flyme分身，做生活和工作的「两面派」。</span>
                <i>功能解析</i>
            </a>
            <a href=""><img src="@/images/community6.jpg" >
                <div class="Users">
                    <img src="@/images/life5.png" >
                    <p>郑金龙</p>
                </div>
                <span>千元最强性能手机登场，高通骁龙 710 次旗舰级处理器加持，玩王者荣耀 Vulkan 模...</span>
                <i>魅族Note9 </i>
            </a>
            <a href=""><img src="@/images/community7.jpg" >
                <div class="Users">
                    <img src="@/images/life5.png" >
                    <p>魅族极简都市双肩包</p>
                </div>
                <span>准旗舰游戏拍照手机魅族 X8，不止有实力，还有最美刘海屏！</span>
                <i>魅族Note9 </i>
            </a>
            <a href=""><img src="@/images/community8.jpg" >
                <div class="Users">
                    <img src="@/images/life5.png" >
                    <p>魅族极简都市双肩包</p>
                </div>
                <span>即用即达，没有残留，快应用不但方便快捷，还可以节约大量手机存储空间。</span>
                <i>魅族Note9 </i>
            </a>
            <a href=""><img src="@/images/community9.jpg" >
                <div class="Users">
                    <img src="@/images/life5.png" >
                    <p>魅族极简都市双肩包</p>
                </div>
                <span>这款匠心精神打造的十五周年旗舰机，再不下手就要后悔啦~</span>
                <i>魅族Note9 </i>
            </a>
            <a href=""><img src="@/images/community10.jpg" >
                <div class="Users">
                    <img src="@/images/life5.png" >
                    <p>魅族极简都市双肩包</p>
                </div>
                <span>如果说相机是摄影师的画笔，那光线便是颜料。合理运用光线，用手机拍好照片。</span>
                <i>魅族Note9 </i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeCommunity"
}
</script>
<style scoped>
    .HomeCommunity{
        width:100%;
        background:#f4f4f4;
    }
    .HomeCommunityTop{
        height:.9rem;
        width:100%;
        text-align:center;
        line-height:.9rem;
        position:relative;
        margin-bottom:.12rem;
    }
    .HomeCommunityTop h2{
        font-size:.18rem;
        font-weight:bold;
        color:#000;
    }
    .HomeCommunityTop span{
        display:block;
        width:.22rem;
        height:.03rem;
        background:#0bbbef;
        position:absolute;
        bottom:.15rem;
        left:1.76rem;
    }
    .HomeCommunityList{
        display:flex;
        width:3.75rem;
        justify-content:space-between;
        flex-wrap:wrap;
        text-align:left;
    }
    .HomeCommunityList a{
        display:block;
        height:2.08rem;
        width:49%;
        background:#fff;
        margin-bottom:.04rem;
    }
    .HomeCommunityList a div{
        height:.22rem;
        padding:0 .1rem;
        margin-top:.1rem;
    }
    .HomeCommunityList>a>img{
        display:block;
        width:100%;
        height:.94rem;
    }
    .HomeCommunityList>a>div>img{
        display:block;
        height:.22rem;
        width:.22rem;
        float:left;
    }
    .HomeCommunityList a div p{
        font-size:.12rem;
        line-height:.22rem;
        margin-left:.29rem;
    }
    .HomeCommunityList a span{
        display:block;
        width:1.635rem;
        height:.46rem;
        font-size:.12rem;
        margin:.08rem 0;
        padding:0 .1rem;
    }
    .HomeCommunityList a i{
        font-size:.12rem;
        color:#999;
       
        margin-left:.08rem;
       
    }
</style>