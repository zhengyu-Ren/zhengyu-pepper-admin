import { createRouter, createWebHistory } from 'vue-router'

const visitRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import ("../views/user/login.vue")
  }
]

const rootRoutes = [
  {
    path: '/',
    component: () => import ("../views/layout/main.vue"),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import ("../views/Home.vue")
      },
      {

      }
    ]
  }
]

const routes = [
  ...visitRoutes,
  ...rootRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
