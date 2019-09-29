<template>
    <div class="selectModels">
        <div class="selectModel" is-link @click="showPopup">
            <span class="selected">已选</span>
            <span class="model"><i>全网通公开版,{{ currentModel.color }},{{currentModel.storage}},{{currentModel.combo}}</i></span>
            <span class="count">×{{currentModel.count}}</span>
            <i class="iconfont icon-jiantou-right"></i>
        </div>
        <van-popup
            v-model="show"
            closeable
            position="bottom"
            overlay
            overlay-class="cover"
            class="popup"
        >
            <div class="header">
                <div class="photo">
                    <img :src="imgStr" alt="">
                </div>
                <div class="desc">
                    <div class="price">￥2699.00</div>
                    <div class="info">全网通公开版 黑之谧镜 6+128GB 官方标配</div>
                    <div>付款后预计5天内发货</div>
                </div>
            </div>

            <div class="pbody">
                <div class="selModel" ref="sm">
                    <p>网络类型</p>
                    <div>
                        <button :class="{'btn':true,'btnCek':'全网通公开版' === currentType}" @click="selectType($event)">全网通公开版</button>
                    </div>
                    <p>颜色分类</p>
                    <div>
                       <button v-for="col in color" :key="col.color" :class="{'btn':true,'btnCek':col.color === currentCol}" @click="selectCol($event)">{{ col.color }}</button>
                    </div>
                    <p>内存容量</p>
                    <div>
                        <button v-for="sto in storage" :key="sto.storage" :class="{'btn':true,'btnCek':sto.storage === currentSto}" @click="selectSto($event)">{{ sto.storage }}</button>
                    </div>
                    <p>套餐</p>
                    <div>
                        <button v-for="pac in combo" :key="pac.combo" :class="{'btn':true,'btnCek':pac.combo === currentPac}" @click="selectPac($event)">{{ pac.combo }}</button>
                    </div>
                    <p>数量</p>
                    <div>
                        <van-stepper v-model="value" integer max="5" input-width=".5rem" button-size=".35rem" class="num" @change="callback(value)"/>(限购 5 件)
                    </div>
                </div>
            </div>

            <div class="footer">
                <button class="addCart bt" @click="addCart">加入购物车</button>
                <button class="buyNow bt" @click="gotoPay">立即购买</button>
            </div>
        </van-popup>
    </div>
</template>

<script>

export default {
    name:'selectModels',
    props:{
        size:'default'
    },
    data() {
        return {
            show: false,
            img:[],
            imgStr:undefined,
            color:[],
            combo:[],
            storage:[],
            value: 1,
            currentType:undefined,
            currentCol:undefined,
            currentSto:undefined,
            currentPac:undefined,
            currentCount:1,
            currentModel:{},
            tid:undefined,
        }
    },
    mounted() {
        let pid = this.$store.state.selectedType.id;
        this.img = this.$store.state.swiperImg[pid];
        this.imgStr = this.img[0].img;
        this.color =this.$store.state.selectedType.col;
        this.combo =this.$store.state.selectedType.pac;
        this.storage =this.$store.state.selectedType.sto;
        this.currentModel = this.$store.state.model;

        this.tid = pid;
    },
    methods: {
        showPopup() {
            this.show = true;
        },
        gotoPay(){
            this.currentModel = {
                type:'全网通公开版',
                color:this.currentCol,
                storage:this.currentSto,
                combo:this.currentPac,
                count:this.currentCount,
                id:this.tid
            }
            this.$store.state.model = this.currentModel;
            this.$router.push({name:'pay'});
        },
        addCart(){
            this.currentModel = {
                type:'全网通公开版',
                color:this.currentCol,
                storage:this.currentSto,
                combo:this.currentPac,
                count:this.currentCount,
                id:this.tid
            }
            this.$store.state.model = this.currentModel;
            this.show = false;
            this.$store.state.shopping.push(this.$store.state.model);
        },
        selectType(event){
            this.currentType = event.target.innerHTML;
        },
        selectCol(event){
            this.currentCol = event.target.innerHTML;
        },
        selectSto(event){
            this.currentSto = event.target.innerHTML;
        },
        selectPac(event){
            this.currentPac = event.target.innerHTML;
        },
        callback(value){
            this.currentCount = value;
        },
    },
}
</script>

<style scoped>
.selectModel{
    box-sizing: border-box;
    color: #333;
    font-size: .13rem;
    width: 100%;
    height: .56rem;
    line-height: .48rem;
    border-bottom: .08rem solid #e5e5e5;
    padding: 0 .13rem;
    display: flex;
    justify-content: space-between;
}
.selected{
    color: #999;
}
.iconfont{
    font-size: .12rem;
}
.model{
    display: block;
    max-width: 2.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
i{
    font-style: normal;
}
.popup{
    height: 4.8rem;
    margin-bottom: .45rem;
    overflow-y: visible;
    font-size: .12rem;
    color: #666;
}
.footer{
    height: .46rem;
    width: 100%;
    position: fixed;
    bottom: 0;
}
.bt{
    border: none;
    height: .46rem;
    line-height: .46rem;
    outline: none;
    width: 50%;
    font-size: .14rem;
    color:#fff;
    top: .01rem;
}
.addCart{
    background:#00c3f5;
}
.buyNow{
    background:#f0415f;
}
.header{
    position: relative;
    height: .88rem;
    padding-left: .12rem;
    border-bottom: .01rem solid #e5e5e5;
}
.photo{
    position: absolute;
    bottom: .12rem;
    z-index: 10;
    width: 1rem;
    height: 1rem;
    padding: .02rem;
    border: .01rem solid #ddd;
    background-color: #fff;
    border-radius: .04rem;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
}
.photo>img{
    width: .8rem;
    height: .8rem;
}
.desc{
    position: absolute;
    right: 0;
    height: .89rem;
    width: 2.43rem;
    box-sizing: border-box;
    padding-bottom: .12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #999;
}
.price{
    margin-top: .14rem;
    font-size: .16rem;
    color: #f0415f;
}
.info{
    color: #333;
}
.pbody{
    padding: .1rem .12rem 0rem;
}
.ivu-radio-group {
    display: block;
    margin: .08rem 0rem;
}
.pbody p{
    margin-bottom: .06rem;
}
.btn{
    padding: 0 .14rem;
    outline: none;
    background: #fff;
    color: #666;
    border: #cfcfcf .01rem solid;
    border-radius: .04rem;
    height: .34rem;
    line-height: .34rem;
    margin-right: .16rem;
    margin-bottom: .1rem;
}
.btnCek{
    color: #00c3f5;
    border-color: #00c3f5;
}
/* .selModel>div>button:first-child{
    color: #00c3f5;
    border-color: #00c3f5;
} */
.num{
    display: inline-block;
    vertical-align: middle;
    margin-right: .16rem;
}


</style>