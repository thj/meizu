<template>
    <div class="loginid">
        <p><a>账号登录</a>|<a @click="toLogin">验证码登录</a></p>
        <input type="text" placeholder="手机号/ Flyme 账号" class="userid" ref="idPhone">
        <input type="password" class="password" placeholder="密码" ref="password">

<!--        滑动拖图验证-->
        <div class="d-slide">
            <Slide></Slide>
        </div>
        <div class="d-slide-msg" v-show='this.$store.state.success'>{{this.$store.state.msg}}</div>

        <div class="checkbox">
            <input type="checkbox" ref="checkbox">
            <span>记住登录状态</span>
            <a href="">忘记密码?</a>
        </div>

        <div class="btn-d">
            <button class="btn-login" @click="toggle">登录</button>
            <button class="btn-register" @click="toReg">注册</button>
        </div>

    </div>
</template>

<script>
    import Slide from "../components/Slide";
    export default {
        name: "LoginId",
        data(){
          return {
          }
        },
        components: {Slide},
        mounted(){
            this.$store.state.success=false
        },
        methods:{
            toggle(){
                //查询数据库用户名和密码
                this.$axios.post('/phoneword', {phone: this.$refs.idPhone.value,password:this.$refs.password.value}).then((result) => {
                    console.log(result.data);
                    // this.$set(this.num,"name",result.data );
                    // this.$store.commit('cnum',result.data);

                    if (result.data){
                        if (this.$store.state.msg=='验证成功'){
                            console.log('登录成功');
                            if (this.$refs.checkbox.checked){
                                let data={"userphone":this.$refs.idPhone.value};
                                                let storage=JSON.stringify(data);
                                                localStorage.setItem("u_storage",storage);//账号存储到本地
                                if (localStorage.getItem('u_storage')){
                                    location.href=`${this.$store.state.localhttp}user`;
                                }

                            }
                        }else{
                            alert('请拖动滑块进行验证');
                        }
                    }


                }).catch((err) => {
                    console.log(err);
                    alert('账号或密码错误');
                });
            },

            toLogin(){
                location.href=`${this.$store.state.localhttp}login`;
            },
            toReg(){
                location.href=`${this.$store.state.localhttp}register`;
            },
        }
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
    a{
        text-decoration: none;
    }
    .loginid{
        width: 100%;
        padding-top: .36rem;
        text-align: center;
        height: 100%;
        overflow: hidden;
        height: 6.3rem;
    }
    .loginid p {
        font-size: .18rem;
        color: #7f7f7f;
    }
    .loginid p a{
        color: #7f7f7f;
        text-decoration: none;
    }
    .loginid p a:nth-of-type(1){
        display: inline-block;
        margin-right: .20rem;
        color: #000000;
    }
    .loginid p a:nth-of-type(2){
        display: inline-block;
        margin-left: .20rem;

    }
    .userid{
        height: .46rem;
        width: 3.3rem;
        padding-left: 0.1rem;
        border:0.01rem solid #dadada;
        color: #909090;
        font-size: 0.14rem;
        box-sizing: border-box;
        outline: none;
        position: relative;
        top: -0.34rem;
    }
    .password{
        height: .46rem;
        width: 3.3rem;
        padding-left: 0.1rem;
        border:0.01rem solid #dadada;
        color: #909090;
        font-size: 0.14rem;
        box-sizing: border-box;
        outline: none;
        position: relative;
        top: -1rem;
    }

    .d-slide{
        position: absolute;
        top: 2.37rem;
    }
    .d-slide-msg{
        font-size: 0.16rem;
        margin-top: 0.66rem;
    }

    .checkbox{
        font-size: 0.16rem;
        position: absolute;
        bottom: 1.75rem;
        left: 0.37rem;
    }
    .checkbox>input{
        width: 0.2rem;
        height: 0.2rem;
        background: blue;
        color: blue;
        position: relative;
        top: 0.05rem;
        margin-right: 0.11rem;
    }
    .checkbox>span{
        color: #515151;
        font-size: 0.14rem;
        margin-right: 1.3rem;
    }
    .checkbox>a{
        color: #198ded;
        font-size: 0.14rem;
    }

    .btn-d{
        width: 3.3rem;
        height: 0.65rem;
        padding-left: 0.22rem;
        position: absolute;
        bottom: 0.1rem;
        left: 0.03rem;
        box-sizing: border-box;
    }
    .btn-d .btn-login{
        width: 3.3rem;
        height: 0.46rem;
        background: #198ded;
        border-radius: 0.06rem;
        border: 0;
        margin-top: -0.8rem;
        float: left;
        color: white;
    }
    .btn-d .btn-register{
        width: 3.3rem;
        border: 0;
        background: #fff;
        float: left;
        margin-top: -0.3rem;
    }


</style>