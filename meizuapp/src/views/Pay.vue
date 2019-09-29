<template>
    <div class="pay">
        <div class="payHead">
            <span class="goBack" @click="goback">
                <i class="iconfont icon-jiantou-copy"></i>
            </span>
            <span>结算</span>
        </div>
        <div class="addAdress">
            <i class="iconfont icon-jia"></i>
            <span>添加收货地址</span>
        </div>
        <div class="payBody">
            <p>供应商:<span>魅族</span></p>
            <div class="message">
                <div class="mage">
                    <img :src="imgStr" alt="">
                    <div>
                        <h3><span>{{ type.name }}</span><i>×{{model.count}}</i></h3>
                        <p>{{model.type}} {{model.color}} {{model.storage}}</p>
                        <h4>￥{{ type.price }}.00</h4>
                    </div>
                </div>
                <div>
                    配送方式<span>快递配送(运费￥0.00)</span>
                </div>
                <div>
                    发票类型
                    <span>电子发票<i class="iconfont icon-zhuyi"></i></span>
                </div>
                <div>
                    发票抬头
                    <span>个人<i class="iconfont icon-jiantou-right"></i></span>
                </div>
                <div class="invoice-title">
                    抬头名称
                    <span>个人</span>
                </div>
                <div class="guestbook">
                    买家留言
                    <span>备注信息</span>
                </div>
                <div class="amount">
                    共{{model.count}}件商品 合计:￥{{total}}.00
                </div>
            </div>
            <div class="buy-back">
                回购金
                <span>未使用<i class="iconfont icon-jiantou-right"></i></span>
            </div>
            <div class="buy-back gift">
                礼品卡
                <span><i class="iconfont icon-jiantou-right"></i></span>
            </div>
            <div class="payment">
                <p>选择支付方式:</p>
                <div>
                    <div>
                        <i class="iconfont icon-zhifubao"></i>
                        支付宝支付
                    </div>
                    <span class="chose"></span>
                </div>
                <div>
                    <div>
                        <i class="iconfont icon-huabei"></i>
                        花呗分期
                    </div>
                    <span class="choose"></span>
                </div>
                <div class="more">
                    其他支付方式
                    <i class="iconfont icon-jiantou"></i>
                </div>
            </div>

        </div>


        <div class="payFooter">
            <div class="prompt">
                该订单含付款减库存的商品,支付完成后才会为您预留库存！
            </div>
            <div class="payfor">
                <div>
                    <p>总计:</p>
                    <span>￥{{total}}.00</span>
                </div>
                <button @click="payit">下单并支付</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'pay',
    data(){
        return {
            img:[],
            type:{},
            imgStr:undefined,
            model:{},
            total:undefined,
            show: false,
        }
    },
    mounted() {
        this.type = this.$store.state.selectedType;
        let pid = this.type.id;
        this.img = this.$store.state.swiperImg[pid];
        this.imgStr = this.img[0].img;

        this.model = this.$store.state.model;
        this.total = Number(this.model.count) * Number(this.type.price);

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
        payit(){
            this.$dialog.alert({
                message: '别点了，你没钱'
            });
        }
    },
    // computed: {
    //     this.total
    // },
}
</script>

<style scoped>
.pay{
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: #fff;
    
}
.payHead{
    position: relative;
    left: -.12rem;
    padding: 0rem .12rem;
    box-sizing: border-box;
    width: 100%;
    height: .45rem;
    line-height: .45rem;
    text-align: center;
    border-bottom: .01rem solid #e5e5e5;
}
.payHead span{
    font-size: .18rem;
    color: #666;
    margin-right: .15rem;
}
.iconfont{
    font-size: .14rem;
    margin-left: .04rem;
}
.icon-jiantou-copy{
    float: left;
    margin-left: .15rem;
    font-size: .2rem;
}
.addAdress{
    width: 100%;
    height: .63rem;
    line-height: .58rem;
    text-align: center;
    font-size: .14rem;
    color: #333;
    border-bottom: .08rem solid #e5e5e5;
    left: -.12rem;
    padding: 0rem .12rem;
    box-sizing: border-box;
}
.addAdress:after{
    content: "";
    display: block;
    height: .05rem;
    background-image: linear-gradient(135deg,#82c9ff 8px,transparent 0,transparent 16px,#ff8282 0,#ff8282 32px,transparent 0,transparent 0,transparent 40px,#82c9ff 0,#82c9ff);
    background-color: #fff;
    background-size: .68rem .05rem;
    
}
.icon-jia{
    font-size: .16rem;
    color: #82c9ff;
    text-shadow: 0rem 0rem .01rem;
    margin-right: .04rem;
}
.payBody{
    margin: 0rem .12rem;
    margin-bottom: .93rem;
    box-sizing: border-box;
}
.payBody>p{
    display: block;
    height: .46rem;
    line-height: .46rem;
    color: #999;
    min-width: 3.75rem;
    left: -.12rem;
    padding-left: .12rem;
    box-sizing: border-box;
    border-bottom: .01rem solid #e5e5e5;
}
.payBody>p>span{
    color: #333;
    margin-left: .1rem;
}

.message .mage{
    display: flex;
    height: .83rem;
    line-height: .26rem;
    padding: .12rem 0rem;
    border-bottom: .01rem solid #e5e5e5;
}
.message .mage>div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #999;
    font-size: .14rem;
}
.message .mage>div>h3{
    width: 2.55rem;
    font-size: .14rem;
    font-style: normal;
    font-weight: normal;
    display: flex;
    justify-content: space-between;
}
.message .mage>div>h3>span{
    color: #666;
}
.message .mage>div>h3>i{
    font-style: normal;
}
.message .mage>div>h4{
    font-style: normal;
    font-weight: normal;
    display: flex;
    justify-content: space-between;
    font-size: .12rem;
}
.message .mage>div>h4{
    color: #f0415f;
}
.message>.mage img{
    width: .83rem;
    height: .83rem;
    margin-right: .1rem;
}
.message>div{
    height: .45rem;
    line-height: .45rem;
    border-bottom: .01rem solid #e5e5e5;
    font-size: .12rem;
    color: #999;
}
.message>div>span{
    color: #333;
    margin-left: .25rem;
    float: right;
}
.message .invoice-title>span{
    float: none;
    color: #999;
}
.message .guestbook>span{
    float: none;
    color: #999;
}
.message .amount{
    color: #333;
    border: none;
    text-align: right;
}
.buy-back{
    height: .61rem;
    line-height: .45rem;
    font-size: .12rem;
    border-bottom: .08rem solid #e5e5e5;
    border-top: .08rem solid #e5e5e5;
    color: #999;
    min-width: 3.75rem;
    left: -.12rem;
    padding: 0rem .12rem;
    box-sizing: border-box;
}
.buy-back>span{
    color: #333;
    margin-left: .25rem;
    float: right;
}
.gift{
    top: -.08rem;
}
.payment{
    color: #666;
    font-size: .14rem;
}
.payment>p{
    font-size: .12rem;
    background: #e5e5e5;
    height: .2rem;
    min-width: 3.75rem;
    left: -.12rem;
    padding: 0rem .12rem;
    box-sizing: border-box;
    top: -.09rem;
}
.payment>div{
    display: flex;
    height: .48rem;
    width: 100%;
    line-height: .45rem;
    justify-content: space-between;
    border-bottom: .01rem solid #e5e5e5;
    left: -.12rem;
    margin: 0rem .12rem;
}
.icon-jiantou{
    font-size: .12rem;
    margin-left: .02rem;
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
}
.icon-zhifubao{
    font-size: .25rem;
    color: #039fe8;
    margin-right: .04rem;
    vertical-align: middle;
}
.icon-huabei{
    color: #00b7ed;
    font-size: .25rem;
    margin-right: .04rem;
    vertical-align: middle;
}
.payment .more{
    display: block;
    height: .58rem;
    line-height: .5rem;
    font-size: .16rem;
    color: #333;
    text-align: center;
    border-bottom: .08rem solid #e5e5e5;
    min-width: 3.75rem;
    left: -.12rem;
    padding: 0rem .12rem;
    box-sizing: border-box;
    margin-left: 0;
}


.payFooter{
    width: 100%;
    height: .94rem;
    background: #fff;
    position: fixed;
    bottom: 0rem;
}
.prompt{
    width: 100%;
    height: .42rem;
    line-height: .42rem;
    text-align: center;
    color: #666;
    font-size: .12rem;
    background: #e4f9fd;
}
.payfor{
    height: .52rem;
    line-height: .52rem;
    display: flex;
    margin-left: .15rem;
    justify-content: space-between;
}
.payfor>div{
    display: flex;
    font-size: .16rem;
    color: #333;
}
.payfor>div>span{
    color: #f04360;
    font-weight: 500;
    margin-left: .02rem;
}
.payfor>button{
    border: none;
    outline: none;
    background: #f0415f;
    color: #fff;
    font-size: .14rem;
    width: 1.14rem;
    text-align: center;
}
</style>