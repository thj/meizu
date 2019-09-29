<template>
    <div class="hasreg">
        <p>注册</p>
        <div class="has_phone">
            <span>+86</span><span>{{this.$store.state.phone}}</span>
            <p>该手机号已注册 Flyme 账号</p>
        </div>
        <div class="btn-d">
            <button class="btn-login" @click="toLogin">立即登录</button>
            <button class="btn-register" @click="toReg">注册</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Reg_has",
        methods:{
            toLogin(){
                location.href='http://localhost:8080/login';
            },
            toReg(){
                location.href='http://localhost:8080/register';
            }
        }
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
    .hasreg{
        width: 100%;
        padding-top: .64rem;
        text-align: center;
        height: 100%;
        overflow: hidden;
        height: 6rem;
    }
    .hasreg p {
        font-size: .18rem;
        color: #008ed2;
    }
    .hasreg .has_phone{
        position: relative;
        top: 0.15rem;
    }
    .hasreg .has_phone span{
        color: #000000;
        font-weight: bold;
        font-size: 0.16rem;
    }
    .hasreg .has_phone span:nth-of-type(1){
        margin-right: 0.05rem;
    }
    .hasreg .has_phone p{
        font-size: 0.14rem;
        color: #909090;
        position: relative;
        top: -0.12rem;
    }

    .btn-d{
        width: 100%;
        height: 0.65rem;
        padding-left: 0.22rem;
        position: relative;
        top: 1.22rem;
        left: 0;
    }
    .btn-d .btn-login{
        width: 3.3rem;
        height: 0.46rem;
        background: #2b8cc5;
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


</style>