import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    types:[],
    selectedType: {},
    images:{},
    swiperImg:{},
    col:[],
    pac:[],
    sto:[],
    model:{
      type:'全网通公开版',
      color:'黑之谧镜',
      storage:'6+128GB',
      combo:'官方标配',
      count:1,
      id:'111'
    },
    shopping:[],
    success:false,
    msg:'',
    phone:'',
    localhttp:'http://10.36.149.124:8080/',
    yzm:('000000' + Math.floor(Math.random() * 999999)).slice(-6),
    num:''
  },
  mutations: {
    add:(state,payload)=>{
      state.types = payload;
    },
    selectType:(state,payload)=>{
      state.selectedType = payload;
      state.col = state.selectedType.col;
      state.pac = state.selectedType.pac;
      state.sto = state.selectedType.sto;
    },
    getImg:(state,payload)=>{
      state.images = payload;
    },
    getSwiper:(state,payload)=>{
      state.swiperImg = payload;
    },
    onSuccess(state){
      this.state.msg='验证成功';
      this.state.success=true;
    },
    onFail(){
      this.state.msg = '';
      this.state.success=true;
    },
    onRefresh(){
      this.state.msg = '';
      this.state.success=false;
    },
    change(state,payload){
      this.state.phone = payload;
    },
    cnum(state,payload){
      this.state.num = payload;
    }
  },
  actions: {

  }
})
