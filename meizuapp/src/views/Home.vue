<template>
    <div id="home">
        <HomeBanner></HomeBanner>
        <HomeMainTop></HomeMainTop>
        <HomeMainf></HomeMainf>
        <HomePhone></HomePhone>
        <HomeAcoustics></HomeAcoustics>
        <HomeParts></HomeParts>
        <HomeLife></HomeLife>
        <HomeCommunity></HomeCommunity>
        <HomeFlyme></HomeFlyme>
        <HomeVideo></HomeVideo>
        <HomeFooter></HomeFooter>
    </div>
</template>
<script>



import HomeBanner from '@/components/HomeBanner.vue'
import HomeMainTop from '@/components/HomeMainTop.vue'
import HomeMainf from '@/components/HomeMainf.vue'
import HomePhone from '@/components/HomePhone.vue'
import HomeAcoustics from '@/components/HomeAcoustics.vue'
import HomeParts from '@/components/HomeParts.vue'
import HomeLife from '@/components/HomeLife.vue'
import HomeCommunity from '@/components/HomeCommunity.vue'
import HomeFlyme from '@/components/HomeFlyme.vue'
import HomeVideo from '@/components/HomeVideo.vue'
import HomeFooter from '@/components/HomeFooter.vue'

export default {
    name:"home",
    components: {
        HomeBanner,
        HomeMainTop,
        HomeMainf,
        HomePhone,
        HomeAcoustics,
        HomeParts,
        HomeLife,
        HomeCommunity,
        HomeFlyme,
        HomeVideo,
        HomeFooter
  },
  mounted() {
            this.$eventBus.$emit('showHide',true);
        }
}
</script>
<style scoped>
    #home{
        height:6.67rem;
        overflow-y:scroll;
        
        position:relative;
        top:.9rem;
        background:#f4f4f4;
        overflow-x: hidden;
    }
</style>