import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'
import getToken from "@/utils/getToken"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {
          title: "首页"
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

const whiteList:Array<string> = ["/login"]

router.beforeEach((to, from, next) => {
  if(getToken() && getToken() != null) {
    next()
  } else if (whiteList.includes(to.path)) {
    next()
  } else {
    next("/login")
  }
})

export default router
