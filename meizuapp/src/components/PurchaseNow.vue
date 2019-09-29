<template>
    <div class="purchaseNow">
        <div class="cartIcon">
            <a>
                <i class="iconfont icon-kefu"></i>
                <span>客服</span>
            </a>
            <a @click="favorite">
                <i ref="ico" class="iconfont icon-favorite-copy"></i>
                <span>收藏</span>
            </a>
            <a @click="gotoCart">
                <i class="iconfont icon-gouwuche"></i>
                <span>购物车</span>
            </a>
        </div>
        <button class="addCart" @click="addCart">加入购物车</button>
        <button class="buyNow" @click="gotoPay">立即购买</button>
    </div>
</template>

<script>
export default {
    name:'purchaseNow',
    data(){
        return {
            type:{},
            totalCount:1,
        }
    },
    mounted() {
        this.type = this.$store.state.selectedType;
    },
    methods: {
        favorite(){
            if(this.$refs.ico.className === "iconfont icon-favorite-copy"){
                this.$refs.ico.className = "iconfont icon-shoucang1";
                alert('收藏成功');
            }else{
                this.$refs.ico.className = "iconfont icon-favorite-copy";
                alert('取消收藏');
            }
        },
        gotoCart(){
            if(this.$store.state.shopping.length === 0){
                this.$router.push({name: 'test'})
            }else{
                this.$router.push({name: 'cart'})
            }
        },
        gotoPay(){
            this.$router.push({name:'pay'});
        },
        addCart(){
            this.$store.state.shopping.push(this.$store.state.model);
        }
    },
}
</script>

<style scoped>
.purchaseNow{
    width: 100%;
    height: .45rem;
    background:#fff;
    text-align: center;
    position: fixed;
    bottom: -.01rem;
    display: flex;
    justify-content: space-between;
}
.cartIcon{
    display: flex;
    left: -.01rem;
}
.cartIcon a{
    text-decoration: none;
    color: #999;
    font-size: .12rem;
    display: flex;
    flex-direction: column;
    width: .45rem;
    text-align: center;
    justify-content: center;
    border-left: .01rem solid #e5e5e5;
    border-top: .01rem solid #e5e5e5;
}
.iconfont{
    font-size: .16rem;
    color: #999;
}
.icon-kefu{
    color: #00c3f5;
}
.icon-shoucang1{
    color: red;
}
button{
    float:right;
    border: none;
    height: .45rem;
    width: 1.19rem;
    outline: none;
    font-size: .14rem;
    color:#fff;
    top: .01rem;
}
.addCart{
    background:#00c3f5;
    right: -.01rem;
}
.buyNow{
    background:#f0415f;
}
</style>