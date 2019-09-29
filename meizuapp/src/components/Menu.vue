<template>
    <div id="menu">
        <header>
            <p>
                <a href="">魅族官网</a>
                <i class="iconfont icon-shanchu" @click="goIndex"></i>
            </p>
            <div>
                <a @click="gotoUser">
                    <img src="../images/user.png" alt="">
                    <p>个人中心</p>
                </a>
                <a href="">
                    <img src="../images/user.png" alt="">
                    <p>我的订单</p>
                </a>
                <a href="">
                    <img src="../images/user.png" alt="">
                    <p>我的红包</p>
                </a>
                <a href="">
                    <img src="../images/user.png" alt="">
                    <p>我的优惠券</p>
                </a>
                <a href="">
                    <img src="../images/user.png" alt="">
                    <p>我的地址</p>
                </a>
                <a href="">
                    <img src="../images/user.png" alt="">
                    <p>我的收藏</p>
                </a>
            </div>
        </header>
        <div class="serve">
            <a href="">
                <img src="../images/chan.png" alt="">
                <p>产品</p>
            </a>
            <a href="">
                <img src="../images/Flyme.png" alt="">
                <p>Flyme</p>
            </a>
            <a href="">
                <img src="../images/yun.png" alt="">
                <p>云服务</p>
            </a>
            <a href="">
                <img src="../images/dian.png" alt="">
                <p>专卖店</p>
            </a>
            <a href="">
                <img src="../images/fuwu.png" alt="">
                <p>服务支持</p>
            </a>
            <a href="">
                <img src="../images/shequ.png" alt="">
                <p>社区</p>
            </a>
            <a href="">
                <img src="../images/app.png" alt="">
                <p>App下载</p>
            </a>
        </div>
        <footer>
            <a href="">
                <img src="../images/16s.png" alt="">
                <p>魅族16s</p>
            </a>
            <a href="">
                <img src="../images/16xs.png" alt="">
                <p>魅族 16Xs</p>
            </a>
            <a href="">
                <img src="../images/huanxin.jpg" alt="">
                <p>以旧换新</p>
            </a>
            <a href="">
                <img src="../images/Mma.png" alt="">
                <p>M码通道</p>
            </a>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        mounted() {
            this.$eventBus.$emit('showHide',false);
        },
         methods:{
            goIndex(){
                this.$router.back('/');
               
            },
            gotoUser(){
                this.$router.push({name:'user'});
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    #menu{
        background: #fff;
        position:relative;
        height: 100%;
        overflow-x: hidden;
    }
    header{
        padding-top: 0.19rem;
    }
    header>p{
        text-align: center;
        display: block;
        width: 100%;
        background:#fff;
      
    }
    header>p>a{
        color: #000000;
        font-size: 0.16rem;
        float: left;
        margin-left: 1.56rem;
    }
    header>p>i{
        color: #686868;
        font-size: 0.14rem;
        float:right;
        margin-right: 0.13rem;
        margin-top: 0.03rem;
    }
    header>div{
        width: 100%;
        height: 1.62rem;
        display: flex;
        flex-wrap: wrap;
        justify-content:flex-start;
        padding-right: 0.15rem;
        padding-top: 0.22rem;
    }
    header>div>a>img{
        width: 0.42rem;
        height: 0.42rem;
    }
    header>div>a{
        font-size: 0.12rem;
        color: #000000;
        display: block;
        width: 0.92rem;
        height: 0.62rem;
        text-align: center;
    }

    .serve{
        width: 100%;
        height: 1.56rem;
        display: flex;
        flex-wrap: wrap;
        justify-content:flex-start;
        background: #fafafa;
        padding-top: 0.28rem;
    }
    .serve a{
        font-size: 0.12rem;
        color: #000000;
        display: block;
        width: 0.92rem;
        height: 0.62rem;
        text-align: center;
    }
    .serve a img{
        width: 0.26rem;
        height: 0.26rem;
        margin-bottom: 0.02rem;
    }

    footer{
        width: 100%;
        height: 1.28rem;
        display: flex;
        flex-wrap: wrap;
        justify-content:flex-start;
        padding-top: 0.30rem;
    }
    footer a{
        font-size: 0.12rem;
        color: #000000;
        display: block;
        width: 0.92rem;
        height: 0.85rem;
        text-align: center;
    }
    footer a img{
        width: 0.49rem;
        height: 0.49rem;
    }
</style>