<template>
  <div id="app">
    <div class="HomeHeard" ref="clearHeight">
            <router-link to="/search" ><img src="@/images/search.jpg" class="Homesearch"  /></router-link>
            <router-link to="/"><img src="@/images/logo.jpg" class="Homelogo"/></router-link>
            <router-link to=""><img src="@/images/cart.jpg" class="Homecart"/></router-link>
            <router-link to="/menu"><img src="@/images/more.jpg" class="Homemore" /></router-link>
            
            <div class="Hheader">
                <!-- <i class="iconfont icon-search search" @click="gotoSearch"></i>
                <div class="logo" @click="gotoHome">
                    <img src="@/images/logo.jpg" alt="">
                </div> -->
                <i class="iconfont icon-gouwuche1 gwc" @click="gotoCart"></i>
                <i class="iconfont icon-caidan more" @click="gotoMenu"></i>
            </div>
            <div class="HomeMain" >
                <div @click="gotoPage(page)" :key="page.name" :class="{current:currentPage === page}" v-for="page of pages">
                  {{page.text}}  
                </div>
            </div>
    </div>
            <router-view></router-view>
    
    
  </div>
</template>

<script>




export default {
  name: 'app',
  components: {
   
  },
  data() {
        return {
          currentPage:undefined,
            pages:[
                {name:'home',text:'推荐',path:'/'},
                {name:'phone',text:'手机',path:'/phone'},
                {name:'acoustics',text:'声学',path:'/acoustics'},
                {name:'parts',text:'配件',path:'/parts'},
                {name:'life',text:'生活',path:'/life'},
            ]
        }
    },
    mounted() {
        for(let page of this.pages){
            if(page.path===location.pathname){
                this.currentPage = page;
                break;
            }
        }
        this.$eventBus.$on('showHide',(flag)=>{
            if(flag){
                this.$refs.clearHeight.style.top = "0";
            }else{
                this.$refs.clearHeight.style.top = "-.9rem";
            }
        });
    },
    methods: {
        gotoPage(page){
          this.currentPage = page;
            this.$router.push({name:page.name});
        },
        // gotoSearch(){
        //     this.$refs.clearHeight.style.top = "-.9rem";
            
        // }
        gotoCart(){
            if(this.$store.state.shopping.length === 0){
                this.$router.push({name: 'test'})
            }else{
                this.$router.push({name: 'cart'})
            }
        },
        gotoMenu(){
            this.$router.push({name: 'menu'})
        },
    },
}
</script>

<style>
html,body{
    height:100%;
    width:100%;
  font-size:.14rem;
  background:#f4f4f4;
    }
body,ul,li,ol,dl,dt,dd,form,input,h1,h2,h3,h4,h5,h6,p{
    margin:0;
    padding:0;
}
*{
    position: relative;
}
li{
	list-style:none;	
}
a{
	text-decoration:none;
  color:#333;	
}
em,i{
  font-style:normal;
}
h1,h2,h3,h4,h5,h6,b,strong{
	font-weight:normal;
	font-size:100%;	
}
#app{
    height: 100%;
}
.HomeHeard{
        height:.82rem;
        width:100%;
        background:#fff; 
        position:fixed;
        padding-bottom:.08rem;
        top:0;
        z-index:9999;
    }
    .Homesearch{
        display:block;
        position:absolute;
        top: .21rem;
        left: .11rem;
    }
    .Homelogo{
        display:block;
        position:absolute;
        top: .2rem;
        left: 1.55rem;
    }
    .Homecart{
        display:block;
        position:absolute;
        top: .21rem;
        right: .48rem;
    }
    .Homemore{
        display:block;
        position:absolute;
        top: .21rem;
        right: .16rem;
    }
    .HomeMain{
        display:flex;
        width:100%;
        height:.3rem;
        position:absolute;
        bottom:.08rem;
        justify-content: space-around;
    }
    .HomeMain>div{
        width:.28rem;
        line-height:.28rem;
    }
    .current{
        color:#0bbbef;
        border-bottom:.01rem solid #0bbbef;
    }
    .Hheader{
        display: flex;
        height: .54rem;
        line-height: .54rem;
        margin: 0rem .12rem;
        width: .1rem;
        float: right;
        position: relative;
    }
    .logo{
        width: 100%;
        text-align: center;
    }
    .search{
        position: absolute;
        font-weight: bolder;
        color: #515151;
        font-size: .18rem;
    }
    .gwc{
        position: absolute;
        right: .46rem;
        font-weight: bolder;
        color: #515151;
    }
    .more{
        position: absolute;
        right: 0;
        font-size: .13rem;
        font-weight: bolder;
        color: #515151;
    }
</style>
