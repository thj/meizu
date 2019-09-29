<template>
    <div class="HomeMainTop">
        <div class="HmtTop">
            <img src="@/images/top1.png" class="HmImg">
            <span>魅族官方直供</span>
            <img src="@/images/top1.png" class="HmImg">
            <span>满80免运费</span>
            <img src="@/images/top1.png" class="HmImg">
            <span>7天无理由退货</span>
        </div>
        <div class="HmtPic">
            <div v-for="type in types" :key="type.id" class="dd" @click="gotoDetail(type)">
                <img src="@/images/top4.png">
                <span>{{type.name}}</span>
            </div>
            <a href=""><img src="@/images/top5.png"><span>魅族 16s</span></a>
            <!-- <a href=""><img src="@/images/top6.jpg"><span>魅族 Note9</span></a> -->
            <a href=""><img src="@/images/top7.jpg"><span>以旧换新</span></a>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"HomeMainTop",
    data(){
        return {
        selectedType: undefined,
        types:[],
        typeid:undefined,
        }
    },
    mounted() {
        this.typeid = this.$store.state.selectedType.id;
        axios('/test/types?typeid=' + this.typeid).then((result) => {
            this.types = result.data;
            this.selectedType = this.types[0];
            this.$store.commit('add',result.data);
        }).catch((err) => {
            console.error(err);
        });

        axios('/test/photo_list').then((result) => {
        this.$store.commit('getImg',result.data);
        }).catch((err) => {
        console.error(err);
        });

        axios('/test/swiper_list').then((result) => {
        this.$store.commit('getSwiper',result.data);

        }).catch((err) => {
        console.error(err);
        });
    },
    methods: {
        gotoDetail(type) {
        this.$store.commit('selectType',type);
        this.selectedType = type;
        // this.$emit('changeType',{
        //   data:{
        //     type
        //   }
        // });
        this.$router.push({name: 'photolist'})
        }
    },
}
</script>
<style scoped>
    .HomeMainTop{
        height:1.51rem;
        width:100%;
        
        padding:0 .04rem;
        overflow-x: hidden;
    }
    .HmtTop{
        height:.3rem;
        line-height:.3rem;
    }
    .HmImg{
        margin-left:.24rem;
        height:.14rem;
        width:.14rem;
    }
    .HmtTop span{
        font-size:.12rem;
        color:#999;
        margin-left:.05rem;
    }
    .HmtPic{
        display:flex;
        height:.8rem;
        background:#fff;
        justify-content: space-around;
        padding:.14rem 0;
        position: relative;
        left: -.04rem;
    }
    .HmtPic a{
        display:block;
        width:.75rem;
        height:.86rem;
    }
    .dd{
        display:block;
        width:.75rem;
        height:.86rem;
    }
    .dd span{
        display:block;
        color:#000;
        font-size:.12rem;
        text-align:center;
        margin-top:.1rem;
    }
    .HmtPic img{
        display:block;
        height:.5rem;
        width:.5rem;
        margin:0 auto;
    }
    .HmtPic a span{
        display:block;
        color:#000;
        font-size:.12rem;
        text-align:center;
        margin-top:.1rem;
    }
</style>