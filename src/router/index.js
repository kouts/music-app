import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '@/layouts/default/Default.vue'
import Home from '../views/Home.vue'

Vue.component('LayoutDefault', Default)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'default',
      saveScroll: true
    }
  },
  {
    path: '/album/:id',
    name: 'album',
    component: () => import(/* webpackChunkName: "album" */ '../views/Album.vue'),
    meta: {
      layout: 'default'
    }
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

// Save and restore scroll position
const scrollPositions = {}
router.beforeEach((to, from, next) => {
  if (from.meta.saveScroll) {
    scrollPositions[from.name] = window.pageYOffset
  }
  next()
})
router.afterEach((to, from) => {
  setTimeout(() => {
    window.scrollTo(0, scrollPositions[to.name] || 0)
  })
})

export default router
