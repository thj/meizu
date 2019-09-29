<template>
  <div class="register">
    <p>注册</p>
    <div class="register_phone">
      <span>
          <i>+86 &nbsp;</i>
          <i class="iconfont icon-jiantouxia"></i>
          <i>|</i>
      </span>
      <input type="text" placeholder="手机号码" ref="rPhone">
    </div>
    <Drag></Drag>
    <div class="agreement">
        <p>
          <input type="checkbox" class="checkbox">
          注册账号即表示您同意并愿意遵守
          <a href="">Flyme服务协议</a>、
        </p>
        <p>
          <a href="">法律声明</a> 和<a href="">隐私声明</a>
        </p>
    </div>
    <div class="btn-d">
      <button class="btn-login" @click="nowReg">立即注册</button>
      <button class="btn-register" @click="toLogin">登录</button>
    </div>
      <div class="checkmsg" v-show="trueMsg">
          <i class="iconfont icon-zhuyi"></i>
          <span ref="ckMessage"></span>
          <i class="iconfont icon-shanchu" @click="delMsg"></i>
      </div>
  </div>
</template>

<script>

import Drag from "../components/Drag";

export default {
  name: 'Register',
    data(){
      return{
          trueMsg:false,
      }
    },
    methods:{
        pNum(){
            //查询数据库
            this.$axios.post('/phone',{phone:this.$refs.rPhone.value}).then((result)=>{
                console.log(result.data);
                return result.data;
            }).catch((err)=>{
                console.log(err);

            });
        },
        nowReg(){
            let reg=/^1[3456789]\d{9}$/;
            let pVal=this.$refs.rPhone.value;
            if ((reg.test(pVal))){
                if (document.querySelector('.drag_text').innerHTML=='验证通过'){
                    if (document.querySelector('.checkbox').checked){
                        if (this.pNum()){
                            location.href=`${this.$store.state.localhttp}hasreg`;
                        }else{
                            this.trueMsg=false;
                            let data={"userphone":pVal};
                            let storage=JSON.stringify(data);
                            localStorage.setItem("u_storage",storage);//账号密码存储到本地
                            if (localStorage.getItem("u_storage")){
                                location.href=`${this.$store.state.localhttp}regphone`;
                            }
                        }

                    }else{
                        this.$refs.ckMessage.innerHTML='请先同意用户条款';
                        this.trueMsg=true;
                    }
                }else{
                    this.$refs.ckMessage.innerHTML='请拖动滑块进行验证';
                    this.trueMsg=true;
                }

            }else{
                this.$refs.ckMessage.innerHTML='请输入正确的手机号码';
                this.trueMsg=true;
            }
        },
        delMsg(){
            this.trueMsg=false;
        },
        toLogin(){
            location.href=`${this.$store.state.localhttp}login`;
        }
    },
  components: {
    Drag
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
  .register{
    width: 100%;
    padding-top: .64rem;
    text-align: center;
    height: 100%;
      overflow: hidden;
      height: 6rem;
  }
  .register p {
    font-size: .18rem;
    color: #008ed2;
  }

  .register_phone{
    width: 100%;
    position: relative;
    margin-top: 0.26rem;
    margin-bottom: 0.12rem;
  }
  .register_phone>span{
    width: 0.61rem;
    height: 0.2rem;
    display: block;
    position: absolute;
    top: 0.92rem;
    left: 0.31rem;
    font-size: 0.14rem;
  }
  .register_phone>span i{
    font-size: 0.14rem;

  }
  .register_phone>span i:nth-of-type(1){
    color: #808080;
  }
  .register_phone>span i:nth-of-type(2){
    color: #b2b2b2;
  }
  .register_phone>span i:nth-of-type(3){
    color: #ddd;
    font-style: normal;
    margin-left: 0.06rem;
  }
  .register_phone>input{
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
    top: .65rem;
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

  .agreement>p{
    font-size: 0.13rem;
    padding-top: 0.15rem;
    color: #515151;
    line-height: 0.02rem;
  }
  .agreement .checkbox{
      position: relative;
      top: 0.04rem;
      width: 0.2rem;
      height: 0.2rem;
      left: 0;
  }
  .agreement>p:nth-of-type(2){
    margin-left: -2.2rem;
  }

  .agreement>p>a{
    color: #00a7ea;
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
