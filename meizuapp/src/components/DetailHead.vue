<template>
    <div class="detaiHead">
        <span class="goBack" @click="goback">
            <i class="iconfont icon-jiantou-copy"></i>
        </span>
        <span class="gotoHome" @click="gotoHome">
            <i class="iconfont icon-zhuye"></i>
        </span>
    </div>
</template>

<script>
export default {
    name:'detaiHead',
    methods: {
        goback(){
            this.$router.go(-1);
            this.$store.state.model = {
                type:'全网通公开版',
                color:'黑之谧镜',
                storage:'6+128GB',
                combo:'官方标配',
                count:1,
                id:'111'
            }
        },
        gotoHome(){
            this.$router.push({name: 'home'});
        }
    },
}
</script>

<style scoped>
.detaiHead{
    position: relative;
}
.iconfont{
    font-size: .2rem;
}
.icon-jiantou-copy{
    position: fixed;
    top: .12rem;
    left: .15rem;
    z-index: 9;
}
.icon-zhuye{
    position: fixed;
    top: .12rem;
    right: .15rem;
    z-index: 9;
}
</style>