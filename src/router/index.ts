import { createRouter, createWebHistory } from "vue-router";

import LoginPage from '@/views/login/index.vue'
import PageNotFount from '@/views/exception/PageNotFount.vue'
import UserLayout from '@/components/layout/UserLayout.vue'
import { Goods } from "@element-plus/icons-vue";

const routes = [
  {
    path: '/',
    component: UserLayout,
    redirect: '/home',
    children: [
      {
        path: 'home', name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', icon: '' }
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/goods/index.vue'),
        meta: {title: '商品列表', icon: ''},
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/views/cart/index.vue'),
        meta: {title: '购物车', icon: ''},
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/order/index.vue'),
        meta: {title: '订单列表', icon: ''},
      }
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/:pathMatch(.*)',
    component: PageNotFount,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;