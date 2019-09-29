<template>
    <div id="search">
        <header>
            <i class="iconfont icon-jiantouzuo" @click="goIndex"></i>
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-shanchu1" @click="clear()"></i>
            <input type="text" ref="clearInput">
            <span>搜索</span>
        </header>
        <div class="people-search">
            <p>大家都在搜</p>
            <div>
                <a href="">魅族 POP2</a>
            </div>
        </div>
        <div class="history">
            <p>历史记录</p>
        </div>
        <div class="se-history">
            <p>暂无搜索历史</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        mounted() {
            this.$eventBus.$emit('showHide',false);
        },
        methods:{
            clear(){
                this.$refs.clearInput.value='';
            },
            goIndex(){
                this.$router.back('/');
            }
        }
    }
</script>
<style scoped>
    a{
        text-decoration: none;
    }

    /*搜索框*/
    #search{
        height: 100%;
        width: 100%;
        background: #eeeeee;
        position: relative;
        /* top:.9rem; */
    }
    header{
        width: 100%;
        height: 0.44rem;
        border-bottom: 0.01rem solid #f2f2f2;
        box-sizing: border-box;
        padding: 0.06rem 0.18rem 0 0.2rem;
        position: relative;
        background: #ffffff;
    }
    header i{
        color: #b5b5b5;
        font-size: 0.20rem;
        float: left;

    }
    header i:nth-of-type(1){
        font-size: 0.20rem;
        color: #666666;
        margin-right: 0.15rem;
        line-height: 0.30rem;
    }
    header i:nth-of-type(2){
        position: absolute;
        color: #9c9d9c;
        top: 0.11rem;
        left:0.6rem;
    }
    header i:nth-of-type(3){
        position: absolute;
        top: 0.13rem;
        right: 0.71rem;
        font-size: 0.16rem;
    }
    header span{
        font-size: 0.15rem;
        color: #666666;
        float: right;
        line-height: 0.30rem;

    }
    header input{
        width: 2.57rem;
        height: 0.3rem;
        border: 0;
        border-radius: 0.15rem;
        background: #eeeeee;
        float: left;
        padding-left: 0.31rem;
        box-sizing: border-box;
        outline:none;
    }

    /*大家都在搜*/
    .people-search{
        width: 100%;
        height: 1.52rem;
        background: #ffffff;
        padding-left: 0.16rem;
        font-size: 0.15rem;
        color: #333333;
        padding-top: 0.24rem;
        box-sizing: border-box;
    }
    .people-search a{
        display: block;
        color: #666666;
        width: 1rem;
        height: 0.27rem;
        border:0.01rem solid #9a9a9a;
        border-radius: 0.15rem;
        text-align: center;
        line-height: 0.27rem;
    }
    .people-search>p{
        display: block;
        margin-bottom: 0.17rem;
    }

    /*历史记录*/
    .history{
        background: #ffffff;
        margin-top: 0.08rem;
        box-sizing: border-box;
        padding-left: 0.16rem;
        width: 100%;
        height: 0.46rem;
        line-height:0.46rem;
        font-size: 0.15rem;
    }
    .history p{
        width: 3.44rem;
        height: 0.44rem;
        display: block;
        border-bottom:.01rem solid #eeeeee;
    }
    /*搜索历史*/
    .se-history{
        background: #ffffff;
        height: 8rem;
        box-sizing: border-box;
        font-size: 0.14rem;
        color: #999999;
        text-align: center;
        padding-top: 0.16rem;
    }
</style>