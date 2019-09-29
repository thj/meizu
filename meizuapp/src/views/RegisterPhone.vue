<template>
    <div class="reg-phone">
        <p>注册</p>
        <p>我们已发送一条验证码至<span><i>+86</i> {{this.rphone}}</span>,请输入短信中的验证码</p>

        <input type="text" placeholder="短信验证码" ref="yzma">
        <input type="password" ref="password" placeholder="请设置您的登录密码">
        <button class="button" :class="{disabled: !this.canClick}" @click="countDown">{{this.content}}</button>

            <div class="btn-d">
            <button class="btn-login" @click="testing">下一步</button>
            <button class="btn-register">登录</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "RegisterPhone",
        data () {
            return {
                yzm:'',
                content: '发送验证码',
                totalTime: 60,
                canClick: true,
                rphone:JSON.parse(localStorage.getItem("u_storage")).userphone,
            }
        },
        mounted(){
            this.countDown();
        },
        methods:{
            countDown () {
                this.yzm=('000000' + Math.floor(Math.random() * 999999)).slice(-6);
                console.log(this.yzm);
                if (!this.canClick) return;
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


            testing(){
                if (this.$refs.yzma.value==this.yzm){
                    let uuu={user_phone:this.rphone,password:this.$refs.password.value};
                    // 提交到数据库
                    this.$axios.post('/phreg',uuu).then((result)=>{
                        console.log(result.data);
                        console.log('注册成功');
                        let data={"userphone":this.rphone};
                        let storage=JSON.stringify(data);
                        localStorage.setItem("u_storage",storage);//账号密码存储到本地
                        location.href=`${this.$store.state.localhttp}user`;
                    }).catch((err)=>{
                        console.log(err);

                    });

                }else{
                    alert('验证码错误,请重新输入')
                }

            },

        },
    }

</script>

<style scoped>
    *{
        margin:0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    .reg-phone{
        width: 100%;
        padding-top: .64rem;
        text-align: center;
        height: 100%;
        overflow: hidden;
        height: 6rem;
    }
    .reg-phone p:nth-of-type(1) {
        font-size: .18rem;
        color: #008ed2;
    }
    .reg-phone p:nth-of-type(2) {
        font-size: .14rem;
        color: #008ed2;
        margin-left: 0.22rem;
        padding-right: 0.22rem;
        color: #666666;
        position: relative;
        top: 0.65rem;
    }
    .reg-phone p:nth-of-type(2) span{
        color: #00a7ea;
    }
    .reg-phone>input:nth-of-type(1){
        height: .46rem;
        width: 3.3rem;
        padding-left: 0.1rem;
        border:0.01rem solid #dadada;
        color: #909090;
        font-size: 0.14rem;
        box-sizing: border-box;
        outline: none;
        position: relative;
        top: 0.6rem;
        padding-right: 1.4rem;
    }

    .reg-phone>input:nth-of-type(2){
        height: .46rem;
        width: 3.3rem;
        padding-left: 0.1rem;
        border:0.01rem solid #dadada;
        color: #909090;
        font-size: 0.14rem;
        box-sizing: border-box;
        outline: none;
        position: relative;
        top: 0;
        padding-right: 1.4rem;
    }

    .btn-d{
        width: 100%;
        height: 0.65rem;
        padding-left: 0.22rem;
        position: relative;
        top: 1.42rem;
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
        margin-top: 0.17rem;
        color: #474747;
    }


    .reg-phone .button{
        width: 1.4rem;
        height: 0.22rem;
        border: 0;
        position: absolute;
        top: 2.75rem;
        left: 2.12rem;
        border-left: 0.01rem solid #dadada;
        background-color: #fff;
        color: #7f7f7f;
        outline: none;
    }
</style>