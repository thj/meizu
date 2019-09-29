<template>
    <div class="HMfooter">
        <a href=""><img src="@/images/top8.jpg" class="HMfooter1"></a>
        <a href=""><img src="@/images/top9.jpg" class="HMfooter2"></a>
        <a href=""><img src="@/images/top10.png" class="HMfooter3"></a>
    </div>
</template>
<script>
export default {
    name:"HMfooter"
}
</script>
<style scoped>
    .HMfooter{
        height:2.6rem;
       
    }
    .HMfooter img{
        display:block;
    }
    .HMfooter1{
        height:2.6rem;
        width:1.88rem;
        float: left;
    }
    .HMfooter2 , .HMfooter3{
        height:1.3rem;
        width:1.87rem;
        float: right;
    }
</style>