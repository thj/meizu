import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/views/Detail.vue'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import Pay from '@/views/Pay.vue'
import test from '@/views/test.vue'
import PhotoList from '@/components/PhotoList.vue'
import Specification from '@/components/Specification.vue'
import Register from './views/Register.vue';
import Login from "./views/Login";
import Search from "./views/Search";
import User from "./views/User";
import Menu from "./components/Menu";
import LoginId from "./views/LoginId";
import Slide from "./components/Slide";
import RegisterPhone from "./views/RegisterPhone";
import Reg_has from "./views/Reg_has";

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/phone',
      name:'phone',
      component: () => import('@/views/Phone.vue')
    },{
      path:'/acoustics',
      name:'acoustics',
      component: () => import('@/views/Acoustics.vue')
    },{
      path:'/parts',
      name:'parts',
      component: () => import('@/views/Parts.vue')
    },{
      path:'/life',
      name:'life',
      component: () => import('@/views/Life.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      children:[
        {
          path:'photolist',
          name:'photolist',
          component:PhotoList
        },
        {
          path:'specification',
          name:'specification',
          component:Specification
        }
      ]
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/pay',
      name:'pay',
      component:Pay
    },
    {
      path:'/test',
      name:'test',
      component:test
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('./views/Login.vue')
    },
    {
      path:'/search',
      name:'search',
      component:()=>import('./views/Search.vue')
    },
    {
      path:'/menu',
      name:'menu',
      component:()=>import('./components/Menu.vue')
    },
    {
      path:'/user',
      name:'user',
      component:()=>import('./views/User.vue')
    },
    {
      path:'/drag',
      name:'drag',
      component:()=>import('./components/Drag.vue')
    },
    {
      path:'/loginid',
      name:'loginid',
      component:()=>import('./views/LoginId.vue')
    },
    {
      path:'/slide',
      name:'slide',
      component:()=>import('./components/Slide.vue')
    },
    {
      path:'/regphone',
      name:'regphone',
      component:()=>import('./views/RegisterPhone.vue')
    },
    {
      path:'/hasreg',
      name:'hasreg',
      component:()=>import('./views/Reg_has.vue')
    },
  ]
})
