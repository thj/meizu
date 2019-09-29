<template>
    <div id="user">
        <header>
            <div>
                <a @click="gotoHome"><i class="iconfont icon-jiantouzuo"></i></a>
            </div>
            <div class="username" @click="login">
                <div>
                    <img src="../images/login.png" alt="">
                </div>
                <span ref="login" >点击登录</span>
            </div>
            <div>
                <a href=""><i class="iconfont icon-xiaoxi"></i></a>
            </div>
        </header>
        <div class="orders">
            <div class="my-orders">
                <span>我的订单</span>
                <a href="">查看全部订单&nbsp;<i class="iconfont icon-jiantouyou"></i></a>
            </div>
            <div class="order-status">
                <div>
                    <i class="iconfont icon-daifukuan"></i>
                    <p>待付款</p>
                </div>
                <hr>
                <div>
                    <i class="iconfont icon-icon-test"></i>
                    <p>待发货</p>
                </div>
                <hr>
                <div>
                <i class="iconfont icon-daishouhuo"></i>
                <p>待收货</p>
                </div>
                <hr>
                <div>
                <i class="iconfont icon-tuikuan"></i>
                <p>退款/售后</p>
                </div>
            </div>
        </div>
        <div class="member-item">
            <a href="">
                <img src="../images/xing.png" alt="">
                <p>我的收藏</p>
            </a>
            <a href="">
                <img src="../images/dingwei.png" alt="">
                <p>我的地址</p>
            </a>
            <a href="">
                <img src="../images/money.png" alt="">
                <p>我的红包</p>
            </a>
            <a href="">
                <img src="../images/juan.png" alt="">
                <p>我的优惠券</p>
            </a>
        </div>
        <div class="other-item">
            <div>
                <span>M码通道</span>
                <i class="iconfont icon-jiantouyou"></i>
            </div>
            <div>
                <span>手机号查询订单</span>
                <i class="iconfont icon-jiantouyou"></i>
            </div>
            <div>
                <span>以旧换新</span>
                <i class="iconfont icon-jiantouyou"></i>
            </div>
            <div>
                <span>百城速达</span>
                <i class="iconfont icon-jiantouyou"></i>
            </div>
            <div>
                <span>联系客服</span>
                <i class="iconfont icon-jiantouyou"></i>
            </div>
            <div>
                <span>意见反馈</span>
                <i class="iconfont icon-jiantouyou"></i>
            </div>
        </div>
        <div class="exitLogin" v-show="this.hidden" @click="exitLogin">
            退出登录
        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
          return{
              hidden:false,
          }
        },
        mounted(){
            this.$eventBus.$emit('showHide',false);
            if (localStorage.getItem('u_storage')) {
                let userinfo = JSON.parse(localStorage.getItem('u_storage'));
                console.log(userinfo);
                this.$refs.login.innerHTML = userinfo.userphone;
                this.hidden = true;
            }
        },
        methods:{
            login(){
                if (localStorage.getItem('u_storage')) {
                    let userinfo = JSON.parse(localStorage.getItem('u_storage'));
                    console.log(userinfo);
                    this.$refs.login.innerHTML = userinfo.userphone;
                    this.hidden = true;
                }else{
                    location.href=`${this.$store.state.localhttp}login`;
                }
            },
            exitLogin(){
                this.hidden=false;
                localStorage.clear();
                location.reload();
            },
            gotoHome(){
                this.$router.push({path:'/'});
            }
        }
    }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        font-size: .16rem;
    }
    a{
        text-decoration: none;
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    #user{
        width: 100%;
        height: 100%;
        background:#eeeeee ;
    }
    #user header{
        width: 100%;
        height: 1.46rem;

        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: .18rem .1rem 0 .15rem;
        background: url("../images/bg-account.jpg") no-repeat 50%;
    }
    #user header a{
        color: #ffffff;
        text-decoration: none;
        font-size: .28rem;
    }
    #user header div:nth-of-type(1) a i{
        font-size: .18rem;
    }
    #user header div:nth-of-type(3) a i{
        font-size: .25rem;
    }
    #user header .username{
        padding-top: 0.05rem;
        text-align: center;
    }
    #user header .username img{
        width: 0.8rem;
        height: .78rem;
    }
    #user header .username span{
        display: block;
        margin-top: 0.07rem;
        color: #ffffff;
    }
    .orders{

        height: 1.2rem;
        margin-top: 0.07rem;
        margin-bottom: 0.07rem;
    }
    .orders .my-orders{
        background: #ffffff;
        border-bottom: 0.01rem solid #e5e5e5;
        width: 100%;
        height: 0.42rem;
        padding-left: 0.17rem;
        padding-right: 0.19rem;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        line-height: 0.42rem;
        color: #444;
        font-size: 0.16rem;
    }
    .orders .my-orders a{
        color: #999999;
        font-size: 0.12rem;
    }
    .orders .my-orders a i{
        color: #999999;
        font-size: 0.14rem;
    }
    .orders .order-status{
        display: flex;
        justify-content: space-around;
        background: #ffffff;
        width: 100%;
        height: 0.77rem;
        border-bottom: 0.01rem solid #e5e5e5;
        padding-top: 0.15rem;
        box-sizing: border-box;
    }
    .orders .order-status div{
        text-align: center;

    }
    .orders .order-status div p{
        font-size: 0.12rem;
        color: #666666;
    }
    .orders .order-status div i{
        font-size: 0.25rem;
        color: #a2a2a2;
        display: inline-block;
        margin-bottom: 0.02rem;
    }
    .orders .order-status hr{
        height: 0.31rem;
        margin-top: 0.06rem;
    }
    .member-item{
        border-bottom: 0.01rem solid #e5e5e5;
        width: 100%;
        height: 0.78rem;
        background: #ffffff;
        margin-bottom: 0.07rem;
    }
    .other-item{
        border-bottom: 0.01rem solid #e5e5e5;
        width: 100%;
        background: #ffffff;
        margin-top: 0.07rem;
    }

    .member-item{
        display: flex;
        justify-content: space-around;
        padding-top: 0.16rem;
        box-sizing: border-box;
    }
    .member-item a{
        display: block;
        width: 0.94rem;
        height: 0.50rem;
        text-align: center;
        color: #666666;

    }
    .member-item a p{
        font-size: 0.12rem;
    }
    .member-item a img{
        width: 0.27rem;
        height: 0.27rem;
    }

    .other-item{
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
    .other-item div{
        height: 0.57rem;
        width: 100%;
        border-bottom: 1px solid #f2f2f2;
        line-height: 0.57rem;
        padding-left: 0.18rem;
        padding-right: 0.19rem;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .other-item div span{
        font-size: 0.16rem;
        color: #6e6e6e;

    }
    .other-item div i{
        color: #d0d0d0;
        font-size: 0.13rem;
    }

    .exitLogin{
        width: 100%;
        height: 0.59rem;
        background: #ffffff;
        margin-top: 0.44rem;
        text-align: center;
        line-height: 0.59rem;
        font-size: 0.18rem;
        color: #333333;
    }
</style>