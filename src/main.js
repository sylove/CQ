import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import  Router from './router'

import 'mint-ui/lib/style.css'


Vue.use(VueRouter)
Vue.use(Mint)

const router=new VueRouter({
    mode: 'history',
    routes: Router
})
 new Vue({
    el:'#app',
    router
    
})

