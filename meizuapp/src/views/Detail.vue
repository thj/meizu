<template>
  <div class="detail">
    <DetailHead></DetailHead>
    <ProuductDetail></ProuductDetail>
    <PurchaseNow></PurchaseNow>
  </div>
</template>

<script>
import PurchaseNow from '@/components/PurchaseNow.vue';
import DetailHead from '@/components/DetailHead.vue';
import ProuductDetail from '@/components/ProuductDetail.vue';

export default {
  name:'detail',
  components:{
    PurchaseNow,
    DetailHead,
    ProuductDetail
  },
  mounted() {
    
  },
  methods: {
    
  },
}
</script>

<style scoped>
html,body{
    background: #fff;
}
.detail{
  background: #fff;
}

</style>