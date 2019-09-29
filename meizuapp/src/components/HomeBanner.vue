<template>
    <div class="banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="@/images/baner1.jpg" ></div>
            <div class="swiper-slide"><img src="@/images/baner2.jpg" ></div>
            <div class="swiper-slide"><img src="@/images/baner3.jpg" ></div>
            <div class="swiper-slide"><img src="@/images/baner4.jpg" ></div>
            <div class="swiper-slide"><img src="@/images/baner5.jpg" ></div>
            <div class="swiper-slide"><img src="@/images/baner6.jpg" ></div>
            <div class="swiper-slide"><img src="@/images/baner7.jpg" ></div>
            <div class="swiper-slide"><img src="@/images/baner8.jpg" ></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>

export default {
    name:"Banner",
    mounted() {
       var swiper = new Swiper('.swiper-container',{
            pagination: {
                el:'.swiper-pagination',
                clickable:true,
            },
            autoplay:{
                delay:3000,
                disableOnInteraction:false,    
            },
            loop:true,
            centeredSlides:true,
        });
   }
}
</script>
<style scoped>
    .banner{
        height:1.93rem;
        width:3.75rem;
        overflow:hidden;
    }
    img{
        display: block;
        height:1.93rem;
        width:3.75rem;
        
    }
    .swiper-pagination span{
        background:#fff;
        
    }
</style>