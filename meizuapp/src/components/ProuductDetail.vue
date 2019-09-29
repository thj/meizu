<template>
    <div class="prouductDetail">
        <div class="swiper-container">
            <keep-alive>
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="image in images" :key="image.img">
                        <img :src="image.img" alt="">
                    </div>
                </div>
            </keep-alive>
            <div class="swiper-pagination"></div>
        </div>
        <keep-alive>
        
        
        <div class="desc">
            <div class="desc-head">
                <h1>{{ products.name }}</h1>
            </div>
            <div class="desc-price">
                ￥{{ products.price }}.00
            </div>
            <div class="desc-periodization">
                {{ products.installment }}
            </div>
            <div class="desc-description">
                <p>
                    {{ products.desc }}
                </p>
            </div>
            <div class="option">
                <div class="ant">
                    <i class="iconfont icon-yixuan"><span>花呗分期</span></i>
                    <i class="iconfont icon-yixuan"><span>顺丰发货</span></i>
                    <i class="iconfont icon-jiantou-right"></i>
                </div>
                <div class="refund">
                    <i class="iconfont icon-yixuan"><span>7天无理由退货(激活后不支持)</span></i>
                </div>
            </div>
        </div>

        </keep-alive>
        <SelectModels></SelectModels>
        <Address></Address>
        <div class="product-desc">
            <div @click="gotoPage(page)" :class="{rt:page === currentPage}" v-for="page in pages" :key="page.name">{{ page.text }}</div>
        </div>
        <transition name="fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
import '@/lib/swiper.min.css'
import swiper from '@/lib/swiper.min.js'
import SelectModels from '@/components/SelectModels'
import Address from '@/components/Address'
import axios from 'axios'
export default {
    name:'prouductDetail',
    components:{
        SelectModels,
        Address
    },
    data(){
        return {
            currentPage:undefined,
            images:[],
            pages:[
                {name:'photolist',text:'图文详情',path:'/detail/photolist'},
                {name:'specification',text:'规格参数',path:'/detail/specification'},
            ],
            products:{}
        }
    },
    mounted() {
        
        let str = location.hash;
        let arr = str.split('/');
        let _pathname = arr.pop();
        for(let page of this.pages){
            if(page.name === _pathname){
                this.currentPage = page;
                break;
            }
        };

        this.products = this.$store.state.selectedType;

        let pid = this.$store.state.selectedType.id;
        this.images = this.$store.state.swiperImg[pid];

        new Swiper('.swiper-container',{
            pagination: {
                el: '.swiper-pagination',
            },
            observer:true,
            observeParents:true
        });
    },
    methods: {
        gotoPage(page){
            this.currentPage = page;
            this.$router.push({name:page.name});
        }
    },
}
</script>

<style scoped>
html,body{
    background: #fff;
}
.prouductDetail{
    margin-bottom: .45rem;
}
.swiper-container {
    width: 100%;
    height: 2.86rem;
    margin: 0;
    padding: 0;
    border-bottom: .01rem solid #e5e5e5;
}

.swiper-slide img {
    max-width: 100%;
    height: 2.35rem;
}

.swiper-slide {
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.desc{
    padding: .16rem 0 0 .13rem;
    color: #f0415f;
    padding-bottom: .1rem;
    border-bottom: .08rem solid #e5e5e5;
}
.desc h1{
    font-size: .16rem;
    color: #333;
    font-weight: initial;
    margin-bottom: .06rem;
}
.desc-price{
    font-size: .18rem;
    margin-bottom: .06rem;
}
.desc-description{
    font-size: .13rem;
    line-height: .24rem;
    margin-top: .06rem;
    border-bottom: .01rem solid #e5e5e5;
    padding-bottom: .08rem;
}
.ant{
    position: relative;
    margin-top: .1rem;
    line-height: .22rem;
}
.iconfont{
    color: #999;
    font-size: .12rem;
    margin-right: .14rem;
}
.icon-yixuan{
    color: #09c5f5;
}
span{
    color: #999;
    margin-left: .06rem;
}
.icon-jiantou-right{
    position: absolute;
    right: -.03rem;
    top: .02rem;
}
.product-desc{
    height: .4rem;
    line-height: .4rem;
    border-bottom: .01rem solid #e5e5e5;
    margin-bottom: .1rem;
    display: flex;
    justify-content: space-around;
}
.product-desc>div{
    text-decoration: none;
    color: #666;
    border: none;
    outline: none;
    background: #fff;
    text-align: center;
    font-size: .14rem;
}
.product-desc>.rt{
    color: #00c3f5;
}

.fade-enter-active,.fade-leave-active{
    transition: opacity .5s;
}
.fade-enter,.fade-leave-to{
    opacity: 0;
}
</style>