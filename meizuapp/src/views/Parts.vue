<template>
    <div id="Parts">
        <div class="PartsBanner">
            <a><img src="@/images/parts/banner.jpg"></a>
        </div>
        <div class="PartsList">
            <a href=""><img src="@/images/parts/img1.jpg" >
                <p>魅族 16s Pro 亲肤壳膜套装</p>
                <span>亲肤亲近 安全防护</span>
                <i>¥ 39</i>
            </a>
            <a href=""><img src="@/images/parts/img2.jpg" >
                <p>魅族 移动电源3</p>
                <span>双向快充电口 轻薄小巧</span>
                <i>¥ 79</i>
            </a>
            <a href=""><img src="@/images/parts/img3.jpg" >
                <p>魅族 Mico USB 数据线</p>
                <span>广泛兼容 经久耐用</span>
                <i>¥ 29</i>
            </a>
            <a href=""><img src="@/images/parts/img4.jpg" >
                <p>魅族 Type-C 金属数据线</p>
                 <span>支持2A快速充电 耐用又放心</span>
                <i>¥ 39</i>
            </a>
            <a href=""><img src="@/images/parts/img5.jpg" >
                <p>魅族 Mico USB 金属数据线</p>
                <span>耐用 才好用</span>
                <i>¥ 29</i>
            </a>
            <a href=""><img src="@/images/parts/img6.jpg" >
                <p>快充电源适配器 (UP0830...</p>
                <span>【限时特惠】快速充电 安全...</span>
                <i>¥ 69</i>
            </a>
        </div>
        <HFooter></HFooter>
    </div>
</template>
<script>

import HFooter from '@/components/HFooter.vue'

export default {
    name:"parts",
    components:{
        HFooter
    }
}
</script>
<style scoped>
    #Parts{
        width:100%;
        height:6.67rem;
        overflow:scroll;
        background:#f4f4f4;
        position:relative;
        top:.9rem;
    }
    .PartsBanner img{
        display:block;
        height:1.95rem;
        width:3.75rem;
        margin-bottom:.05rem
    }
    .PartsList{
        display:flex;
        width:3.75rem;
        justify-content:space-between;
        flex-wrap:wrap;
        text-align:center;
    }
    .PartsList a{
        display:block;
        height:2.4rem;
        padding:.2rem 0;
        width:49%;
        background:#fff;
        margin-bottom:.04rem;
    }
    .PartsList a img{
        display:block;
        height:1.56rem;
        width:100%;
        margin:0 auto;
    }
    .PartsList a p{
        font-size:.14rem;
        line-height:.36rem;
        color:#333;
    }
    .PartsList a span{
        display:block;
        width:1.72rem;
        height:.18rem;
        line-height:.18rem;
        color:#999;
        font-size:.12rem;
        margin-left:.06rem;
    }
    .PartsList a i{
        font-size:.14rem;
        color:#c00;
        line-height:.36rem;
    }
</style>