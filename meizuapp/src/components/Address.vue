<template>
    <div class="address">
        <div class="choose-address">
            <span class="delivery">配送</span>
            <p>广东省 深圳市</p>
            <i class="iconfont icon-jiantou-right"></i>
        </div>
        <div class="servers">
            <p class="black">付款后预计8天内发货</p>
            <p>本商品由<span class="black">魅族</span>负责发货并提供售后服务</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'address'
}
</script>

<style scoped>
.choose-address>p{
    display: inline-block;
    position: absolute;
    left: .36rem;
    top: 0;
}
.address{
    width: 100%;
    border-bottom: .08rem solid #e5e5e5;
    padding-left: .13rem;
    box-sizing: border-box;
}
.choose-address{
    position: relative;
    color: #333;
    font-size: .13rem;
    height: .48rem;
    line-height: .48rem;
    display: flex;
    justify-content: space-between;
    border-bottom: .01rem solid #e5e5e5;
}
.delivery{
    color: #999;
}
.iconfont{
    font-size: .12rem;
    right: .13rem;
}
.servers{
    margin-top: .06rem;
    height: .74rem;
    text-align: center;
    color: #999;
    line-height: .32rem;
}
.black{
    color: #333;
}
</style>