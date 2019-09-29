<template>
    <div class="specification">
        <img src="../images/detail01.jpg" alt="">
        <img src="../images/detail02.jpg" alt="">
        <img src="../images/detail03.jpg" alt="">
        <img src="../images/detail04.jpg" alt="">
        <img src="../images/detail05.jpg" alt="">
        <img src="../images/detail06.jpg" alt="">
        <img src="../images/detail07.jpg" alt="">
        <img src="../images/detail08.jpg" alt="">
        <img src="../images/detail09.jpg" alt="">
        <img src="../images/detail10.jpg" alt="">
        <img src="../images/detail11.jpg" alt="">
        <img src="../images/detail12.jpg" alt="">
    </div>
</template>

<script>
export default {
    name:'specification',
    mounted(){
        this.$eventBus.$emit('showHide',false);
    }
}
</script>

<style scoped>
img{
    display: block;
    width: 100%;
    max-width: 100%;
}
</style>