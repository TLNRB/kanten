import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllEventsView from '../views/AllEventsView.vue'
import GenreView from '../views/GenreView.vue'
import StudioView from '../views/StudioView.vue'
import CommunityView from '../views/CommunityView.vue'
import SingleEventView from '../views/SingleEventView.vue'
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
    }
  ]
})

export default router
