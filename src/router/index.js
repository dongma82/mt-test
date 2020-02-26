import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Default.vue'
import ChangeCity from '../views/changeCity.vue';
import mainContent from "../components/defaultContent/MainContent";
import searchContent from '@/components/content/searchContent';
import login from '../views/register'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'index',
      component: mainContent,
    },
    {
      path: '/changeCity',
      name: 'ChangeCity',
      component: ChangeCity
    }, 
    {
      path:'s/:searchContent',
      name:searchContent,
      component:searchContent
    }]
  },
  {
    path:'/login',
    name:'login',
    component:login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
