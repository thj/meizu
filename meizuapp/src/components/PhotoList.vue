<template>
    <div class="photoList">
        <img v-for="image in images" :key="image.src" :src='image.src' alt="">
    </div>
</template>

<script>
export default {
    name:'photoList',
    data(){
        return {
            images:[],
        }
    },
    mounted() {
        this.$eventBus.$emit('showHide',false);
        let pid = this.$store.state.selectedType.id;
        this.images = this.$store.state.images[pid];
    },
}
</script>

<style scoped>
img{
    display: block;
    width: 100%;
    max-width: 100%;
}
</style>