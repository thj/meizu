<template>
    <div class="login">
        <p><a @click="toLoginID">账号登录</a>|<a href="">验证码登录</a></p>
        <div class="login_phone">
            <span>
                <i>+86 &nbsp;</i>
                <i class="iconfont icon-jiantouxia"></i>
                <i>|</i>
            </span>
            <input type="text" placeholder="手机号码" ref="phone" @blur="pNum">

        </div>
        <input type="text" placeholder="短信验证码" class="yzm" ref="yzma" >
        <button class="button" :class="{disabled: !this.canClick}" @click="countDown">{{this.content}}</button>
        <div class="btn-d">
            <button class="btn-login" @click="testing">登录</button>
            <button class="btn-register" @click="toRegister">注册</button>
        </div>
        <div class="checkmsg" v-show="trueMsg">
            <i class="iconfont icon-zhuyi"></i>
            <span ref="ckMessage">该手机号码尚未注册,</span>
            <a @click="toRegister">立即注册</a>
            <i class="iconfont icon-shanchu" @click="delMsg"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
                yzm:'',
                content: '发送验证码',
                totalTime: 60,
                canClick: true,
                trueMsg:false,
                res:'',
            }
        },
        methods:{
            countDown () {
                this.yzm=('000000' + Math.floor(Math.random() * 999999)).slice(-6);
                console.log(this.yzm);
                if (!this.canClick) {return;}
                this.canClick = false;
                this.content = this.totalTime + 's后重新发送';
                let clock = window.setInterval(() => {
                    this.totalTime--;
                    this.content = this.totalTime + 's后重新发送';
                    if (this.totalTime < 0) {
                        window.clearInterval(clock);
                        this.content = '重新发送验证码';
                        this.totalTime = 60;
                        this.canClick = true;
                        this.yzm='';
                    };
                },1000);
            },
            toLoginID(){
                location.href=`${this.$store.state.localhttp}loginid`;
            },
            toRegister(){
                location.href=`${this.$store.state.localhttp}register`;
            },
            pNum(){
                //查询数据库
                this.$axios.post('/phone',{phone:this.$refs.phone.value}).then((result)=>{
                    console.log(result.data);
                    this.trueMsg=false;
                  this.res=result.data;
                    if (!result.data){
                        this.trueMsg=true;
                    }
                }).catch((err)=>{
                    console.log(err);

                });
            },
            testing(){
                // let reg1=/^1[3456789]\d{9}$/;//手机正则验证
                let yVal=this.$refs.yzma.value;
                    if (yVal==this.yzm){
                        if (!this.trueMsg){
                            console.log('验证成功');
                            // console.log(this.res);
                            // this.$store.commit('change',phone);
                            // console.log(this.$store.state.phone);
                            let data={"userphone":this.$refs.phone.value};
                            let storage=JSON.stringify(data);
                            localStorage.setItem("u_storage",storage);//账号密码存储到本地
                            if (localStorage.getItem('u_storage')){
                                location.href=`${this.$store.state.localhttp}user`;
                            }

                        }else{
                            alert('账号不存在,请先注册')
                        }

                    }else {
                        console.log('验证码错误');
                    }


            },
            delMsg(){
                this.trueMsg=false;
            },
            toRegister(){
                location.href=`${this.$store.state.localhttp}register`;
            }
        },
    }
</script>

<style scoped>
    *{
        margin:0;
        padding: 0;
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    .login{
        width: 100%;
        padding-top: .80rem;
        text-align: center;
        height: 100%;
        overflow: hidden;
        height: 4rem;
    }
    .login p {
        font-size: .18rem;
        color: #7f7f7f;
        position: absolute;
        top: 0.84rem;
        right: 0;
        left: 0;
        margin: 0 auto;
    }
    .login p a{
        color: #7f7f7f;
        text-decoration: none;
    }
    .login p a:nth-of-type(1){
        margin-right: .20rem;
    }
    .login p a:nth-of-type(2){
        margin-left: .20rem;
        color: #000000;
    }

    .login_phone{
        width: 100%;
        margin-top: -0.07rem;
    }
    .login_phone>span{
        width: 0.61rem;
        height: 0.2rem;
        display: block;
        position: absolute;
        top: 1.64rem;
        left: 0.31rem;
        font-size: 0.14rem;
    }
    .login_phone>span i{
        font-size: 0.14rem;

    }
    .login_phone>span i:nth-of-type(1){
        color: #808080;
    }
    .login_phone>span i:nth-of-type(2){
        color: #b2b2b2;
    }
    .login_phone>span i:nth-of-type(3){
        color: #ddd;
        font-style: normal;
        margin-left: 0.06rem;
    }
    .login_phone>input{
        height: .46rem;
        width: 3.3rem;
        padding-left: 0.78rem;
        border:0.01rem solid #dadada;
        color: #909090;
        font-size: 0.14rem;
        box-sizing: border-box;
        outline: none;
    }
    .btn-d{
        width: 100%;
        height: 0.65rem;
        padding-left: 0.22rem;
        position: relative;
        top: 0.27rem;
        left: 0;
    }
    .btn-d .btn-login{
        width: 3.3rem;
        height: 0.46rem;
        background: #198ded;
        border-radius: 0.06rem;
        border: 0;
        margin-top: -0.5rem;
        float: left;
        color: white;
    }
    .btn-d .btn-register{
        width: 3.3rem;
        border: 0;
        background: #fff;
        float: left;
    }

    .login .yzm{
        height: .46rem;
        width: 3.3rem;
        padding-left: 0.1rem;
        border:0.01rem solid #dadada;
        color: #909090;
        font-size: 0.14rem;
        box-sizing: border-box;
        outline: none;
        position: relative;
        top: -0.66rem;
        padding-right: 1.4rem;
    }
    .login .button{
        width: 1.4rem;
        height: 0.22rem;
        border: 0;
        position: absolute;
        top: 2.27rem;
        left: 2.12rem;
        border-left: 0.01rem solid #dadada;
        background-color: #fff;
        color: #7f7f7f;
        outline: none;
    }

    .checkmsg{
        width: 3.3rem;
        height: 0.33rem;
        border: 0.01rem solid #ffc2b3;
        background: #ffd1ca;
        position: absolute;
        top: 1.14rem;
        left:0;
        right: 0;
        margin: 0 auto;
    }
    .checkmsg>span{
        font-size: 0.14rem;
        position: absolute;
        top: 0.07rem;
        left: 0.35rem;
        color: #666666;
    }
    .checkmsg>a{
        font-size: 0.14rem;
        position: absolute;
        top: 0.07rem;
        left: 1.7rem;
        color: #198ded;
    }
    .checkmsg .icon-zhuyi{
        color: #ff5500;
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
    }
    .checkmsg .icon-shanchu{
        color: #ff5e10;
        position: absolute;
        top: 0.1rem;
        right: 0.14rem;
        font-size: 0.14rem;
    }
</style>