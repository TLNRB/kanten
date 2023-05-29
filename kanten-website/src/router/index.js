import { createRouter, createWebHistory } from 'vue-router'
import { useStoreAuth } from '../stores/storeAuth.js'
import HomeView from '../views/HomeView.vue'
import AllEventsView from '../views/AllEventsView.vue'
import GenreView from '../views/GenreView.vue'
import StudioView from '../views/StudioView.vue'
import CommunityView from '../views/CommunityView.vue'

import SingleEventView from '../views/SingleEventView.vue'
import SingleGenreView from '../views/SingleGenreView.vue'

import MembershipView from '../views/MembershipView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import NotFoundView from '../views/NotFoundView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/events',
      name: 'events',
      component: AllEventsView
    },
    {
      path: '/genres',
      name: 'genres',
      component: GenreView
    },
    {
      path: '/studio',
      name: 'studio',
      component: StudioView
    },
    {
      path: '/community',
      name: 'community',
      component: CommunityView
    },
    {

      path: '/singleeventview/:id',
      name: 'singleeventview',
      component: SingleEventView,
      props: true 
    },
    {
      path: '/singlegenreview/:id',
      name: 'singlegenreview',
      component: SingleGenreView,
      props: true 

      path: '/membership',
      name: 'membership',
      component: MembershipView
    },
    {
      path: '/login-admin',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:catchall(.*)*',
      name: 'notfound',
      component: NotFoundView

    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth()
  if (!storeAuth.user.id && to.name === 'admin') {
    return { name: 'home' }
  }
  if (storeAuth.user.id && to.name === 'login') {
    return false
  }
  if (storeAuth.user.id && to.name === 'admin' && storeAuth.user.email !== 'admin@admin.com') {
    return false
  }
})

export default router
