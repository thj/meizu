<template>
    <div class="test">
        <span class="goBack" @click="goback">
            <i class="iconfont icon-jiantou-copy"></i>
        </span>
        <div class="cartTitle">
            购物车
        </div>
        <p>购物车内还没有商品，赶紧去选购吧～</p>
        <button @click="gotoHome">随便逛逛</button>

    </div>
</template>

<script>
export default {
    name:'test',
    
    mounted() {
        this.$eventBus.$emit('showHide',false);
    },
    methods: {
        goback(){
            this.$router.go(-1);
            this.$store.state.model = {
                type:'全网通公开版',
                color:'黑之谧镜',
                storage:'6+128GB',
                combo:'官方标配',
                count:1,
                id:'111'
            }
        },
        gotoHome(){
            this.$router.push({name: 'home'});
        },

    }
}
</script>

<style scoped>
.test{
    width: 100%;
    height: 100%;
    background: #eee;
    text-align: center;
    position: relative;
}
.iconfont{
    font-size: .2rem;
}
.icon-jiantou-copy{
    position: fixed;
    top: .12rem;
    left: .15rem;
    z-index: 9;
}
.cartTitle{
    width: 100%;
    text-align: center;
    height: .45rem;
    line-height: .45rem;
    background: #fff;
    font-size: .18rem;
    color: #666;
    position: fixed;
    top: 0rem;
    z-index: 3;
}
p{
    font-size: .12rem;
    color: #666;
    position: absolute;
    top: 2.23rem;
    width: 100%;
}
button{
    position: absolute;
    top: 2.7rem;
    left: 1.3rem;
    width: 1.14rem;
    height: .38rem;
    line-height: .37rem;
    outline: none;
    background: #00c3f5;
    border: none;
    border-radius: .02rem;
    color: #fff;
    font-size: .16rem;
}
</style>