import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/layout/index'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/posts/index')
      },
      {
        path: '/p/:slug',
        name: 'PostDetails',
        component: () => import('@/views/posts/post'),
      },
      {
        path: '/archive/category/:slug',
        name: 'PostDetails',
        component: () => import('@/views/posts/archive'),
      },
      {
        path: '/moment',
        name: 'Moment',
        component: () => import('@/views/moment'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about'),
      }
    ],
  },
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
