<template>
    <div class="HFooter">
            <h2>为您推荐</h2>
            <div class="HFooterList">
                <a href=""><img src="@/images/phone/img2.jpg" >
                    <p>魅族 16s</p>
                    <i>¥ 2699</i> 
                </a>
                <a href=""><img src="@/images/phone/img3.jpg" >
                    <p>魅族 16X</p>
                    <i>¥ 2598</i>
                </a>
            </div>
            <div class="iconList">
                <a href=""><img src="@/images/phone/img9.jpg" ></a>
                <a href=""><img src="@/images/phone/img10.jpg" ></a>
                <a href=""><img src="@/images/phone/img11.jpg" ></a>
                <a href=""><img src="@/images/phone/img12.jpg" ></a>
            </div>
            <div class="contact">
                <span><img src="@/images/footer1.jpg">400-788-3333</span>
                <span><img src="@/images/footer2.jpg">在线客服</span>
            </div>
            <div class="footer">
                <p>粤ICP备13003602号-2合字B2-20170010<br>
                营业执照©2018 Meizu All rights reserved</p>
                <span><img src="@/images/footer3.jpg">简体中文</span>
            </div>
    </div>
</template>
<script>
export default {
    name:"hfooter"
}
</script>
<style scoped>
    .HFooter{
        height:4.8rem;
        width:100%;
    }
    h2{
        line-height:.6rem;
        font-size:.18rem;
        
        color:#333;
        text-align:center;
    }
    .HFooterList{
        height:1.9rem;
        display:flex;
        justify-content:space-between;
        text-align:center;
    }
    .HFooterList a{
        display:block;
        height:1.7rem;
        padding:.05rem .31rem;
        background:#fff;
        width:32.5%;
        margin-bottom:.04rem;
    }
    .HFooterList a img{
        display:block;
        height:1.25rem;
        width:100%;
        margin:0 auto;
       
    }
    .HFooterList a p{
        font-size:.14rem;
        line-height:.16rem;
        color:#333;
        font-weight:bold;
    }
    .HFooterList a i{
        font-size:.14rem;
        line-height:.36rem;
        color:#c00;
    }
    .iconList{
        height:.82rem;
        padding:.15rem .15rem 0;
        background:#fff;
    }
    .iconList a img{
        display:block;
        height:.675rem;
        width:.6rem;
        float:left;
        margin:0 .13rem;
    }
    .contact{
        display:flex;
        width:3.75rem;
        justify-content:space-around;
        flex-wrap:wrap;
        text-align:left;
        margin-top: .2rem;
    }
    .contact span{
        display:block;
        width:1.63rem;
        height:.36rem;
        font-size:.16rem;
        color:#fff;
        background:#00b4ff;
        border:.01rem solid #00b4ff;
        border-radius:.18rem;
        line-height:.36rem;
    }
    .contact span img{
        display:block;
        float:left;
        margin:.08rem .08rem 0 .15rem;
    }
    .footer{
        height:.6rem;
        padding:.2rem .18rem 0 .16rem;
        
    }
    .footer p{
        width:2.46rem;
        height:.38rem;
        text-align:left;
        font-size:.12rem;
        color:#999;
        float:left;
    }
    .footer span{
        display:block;
        height:.31rem;
        width:.9rem;
        float:right;
        line-height:.31rem;
        color:#3b3b3b;
        position:relative;
        text-indent: .25rem;
    }
    .footer span img{
        display:block;
        position:absolute;
        top:.08rem;
        left:0;
    }
</style>