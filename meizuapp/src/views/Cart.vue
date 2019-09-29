<template>
    <div class="cart">
        <span class="goBack" @click="goback">
            <i class="iconfont icon-jiantou-copy"></i>
        </span>
        <span ref="ed" class="edit" @click="edit">编辑</span>
        <div class="cartTitle">
            购物车
        </div>

        <div class="cartItem">
            <div class="cartItem-title">
               <div class="meizu">
                    <span class="chose"></span>
                    <i>魅族</i>
                </div>
                <div class="free">
                    已免运费
                </div>
            </div>
            <div class="goodslist">
                <div class="goods" v-for="(goods,index) in shopping" :key="index">
                    <div class="purchased">
                        <div>
                            <span>加购价</span>
                            <p>另加19元起，即可换购超值商品</p>
                        </div>
                        <i class="iconfont icon-jiantou-right"></i>
                    </div>
                    <div class="product">
                        <span class="checkIt"></span>
                        <div>
                            <img :src="src[index]" alt="">
                            <div ref="pr">
                                <h3>{{currentName[index]}}</h3>
                                <p>全网通公开版 {{goods.color}} {{goods.storage}}</p>
                                <h4><span ref="cpr">￥{{currentPrice[index]}}.00</span><i>×{{goods.count}}</i></h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="settlement">
            <div class="checkAll" @click="checkAll">
                <span class="chose"></span>
                <i>全选</i>
            </div>
            <div class="total">
                <span>总计:<i>￥0.00</i></span>
                <button class="btn-on" @click="gotoPay">结算</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'cart',
    data(){
        return {
            finish:true,
            shopping:[],
            src:[],
            goods:undefined,
            type:[],
            currentName:[],
            currentPrice:[],
            total:undefined,
        }
    },
    mounted() {
        this.$eventBus.$emit('showHide',false);
        this.shopping = this.$store.state.shopping;
        this.type = this.$store.state.types;
        for(let pid of this.shopping){
            this.src.push(this.$store.state.swiperImg[pid.id][0].img)
            axios('/test/types?typeid=' + pid.id).then((result) => {
                if(pid.id === '111'){
                    this.currentName.push(result.data[0].name);
                    this.currentPrice.push(result.data[0].price);
                }else{
                    this.currentName.push(result.data[1].name);
                    this.currentPrice.push(result.data[1].price);
                }
            }).catch((err) => {
                console.error(err)
            })
        };
        
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
        edit(){
            if(this.finish){
                this.$refs.ed.innerHTML = '完成';
                this.finish = false;
            }else{
                this.$refs.ed.innerHTML = '编辑';
                this.finish = true;
            }
        },
        checkAll(){
            // console.log(this.$refs.ed)
        },
        gotoPay(){
            this.$router.push({name:'pay'});
        }
    },
}
</script>

<style scoped>
.cart{
    width: 100%;
    height: 100%;
    background: #eee;
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
.edit{
    position: fixed;
    top: .14rem;
    right: .15rem;
    z-index: 9;
    font-size: .12rem;
    color: #999;
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

.cartItem{
    background: #fff;
    top: .53rem;
    font-size: .14rem;
    color: #333;
    margin-bottom: .45rem;
}
.cartItem-title{
    position: relative;
    height: .45rem;
    line-height: .45rem;
    border-bottom: .01rem solid #e5e5e5;
}
.meizu{
    float: left;
    width: 2rem;
}
.meizu>i{
    color: #333;
    position: absolute;
    top: -.01rem;
    left: .4rem;
}
.free{
    width: 1rem;
    float: right;
    text-align: right;
    margin-right: .15rem;
}
.goodslist{
    top:-.01rem;
}
.purchased{
    color: #999;
    height: .45rem;
    line-height: .45rem;
    display: flex;
    margin: 0rem .1rem 0rem .4rem;
    justify-content: space-between;
    border-top: .01rem solid #e5e5e5;
}
.purchased>div{
    display: flex;
}
.purchased>div>span{
    width: .4rem;
    height: .2rem;
    line-height: .2rem;
    text-align: center;
    margin-right: .04rem;
    display: inline-block;
    font-size: .12rem;
    color: #f0415f;
    border-radius: .02rem;
    border: .01rem solid #f0415f;
    position: relative;
    top: .12rem;
}
.product{
    box-sizing: border-box;
    height: 1.08rem;
    padding: .13rem 0rem;
    display: flex;
}
.product>div{
    display: flex;
}
.product>div>div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #999;
}
.product>div>div>h3{
    font-size: .14rem;
    font-style: normal;
    font-weight: normal;
    color: #666;
}
.product>div>div>h4{
    width: 2.2rem;
    font-style: normal;
    font-weight: normal;
    display: flex;
    justify-content: space-between;
    font-size: .12rem;
}
.product>div>div>h4>span{
    color: #f0415f;
}
.checkIt{
    display: block;
    width: .24rem;
    height: .24rem;
    background: url('../images/checked.jpg') no-repeat center;
    border-radius: 50%;
    margin: 0rem .1rem;
    align-self: center;
    top: -.04rem;
}
.product img{
    width: .83rem;
    height: .83rem;
    margin-right: .1rem;
}

.settlement{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: .45rem;
    line-height: .45rem;
    background: #fff;
    font-size: .12rem;
    border-top: .01rem solid #e5e5e5;
    z-index: 3;
}
.checkAll{
    display: flex;
    position: relative;
    font-size: .12rem;
    color: #666;
    float: left;
}
i{
    font-style: normal;
}
.choose{
    display: block;
    width: .2rem;
    height: .2rem;
    top: .12rem;
    border-radius: 50%;
    border: .01rem solid #e5e5e5;
    margin: 0rem .1rem;
}
.chose{
    display: block;
    width: .24rem;
    height: .24rem;
    background: url('../images/checked.jpg') no-repeat center;
    top: .1rem;
    border-radius: 50%;
    margin: 0rem .1rem;
    position: relative;
}
.total{
    float: right;
    color: #333;
}
.total i{
    color: #f0415f;
}
.btn{
    margin-left: .12rem;
    width: 1.14rem;
    height: .45rem;
    border: none;
    outline: none;
    color: #fff;
    background: #ccc;
    font-size: .14rem;
}
.btn-on{
    margin-left: .12rem;
    width: 1.14rem;
    height: .45rem;
    border: none;
    outline: none;
    color: #fff;
    background: #f0415f;
    font-size: .14rem;
}
</style>