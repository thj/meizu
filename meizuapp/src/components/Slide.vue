<template>
    <div id="slide">
        <div class="slide_module">
            <slide-verify :l="42"
                          :r="10"
                          :w="310"
                          :h="155"
                          slider-text="拖动左边滑块完成上方拼图"
                          @success="onSuccess"
                          @fail="onFail"
                          @refresh="onRefresh"
            ></slide-verify>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Slide",
        methods: {
            onSuccess(){
                this.$store.commit('onSuccess');

            },
            onFail(){
                this.$store.commit('onFail')

            },
            onRefresh(){
                this.$store.commit('onRefresh');

            }
        }
    }
</script>

<style scoped>
    .slide_module{
        width: 3.1rem;
        font-size: 0.16rem;
        margin-left: 0.33rem;
        text-align: center;
        box-sizing: border-box;
    }
</style>