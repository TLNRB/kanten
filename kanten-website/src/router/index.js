import { createRouter, createWebHistory } from 'vue-router'
import { useStoreAuth } from '../stores/storeAuth.js'
import HomeView from '../views/HomeView.vue'
import AllEventsView from '../views/AllEventsView.vue'
import SingleEventView from '../views/SingleEventView.vue'
import GenresView from '../views/GenresView.vue'
import ManaClubView from '../views/Genre/ManaClubView.vue'
import VertexView from '../views/Genre/VertexView.vue'
import DeftView from '../views/Genre/DeftView.vue'
import DubView from '../views/Genre/DubView.vue'
import StudioView from '../views/StudioView.vue'
import CommunityView from '../views/CommunityView.vue'
import MembershipView from '../views/MembershipView.vue'
import VolunteerView from '../views/VolunteerView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import NotFoundView from '../views/NotFoundView.vue'
/* ---------- Import Stores ---------- */
import { useStoreEvents } from '../stores/storeEvents.js'

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
      path: '/events/:id',
      name: 'singleeventview',
      component: SingleEventView,
      props: true,
      beforeEnter(to) {
        /* ---------- Stores ---------- */
        const storeEvents = useStoreEvents()
        const id = to.params.id
        const exists = storeEvents.events.some((event) => event.id === id)

        if (!exists) {
          return {
            name: 'notfound',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash
          }
        }
      }
    },
    {
      path: '/genres',
      name: 'genres',
      component: GenresView
    },
    {
      path: '/genres/manaClub',
      name: 'manaClub',
      component: ManaClubView
    },
    {
      path: '/genres/vertex',
      name: 'vertex',
      component: VertexView
    },
    {
      path: '/genres/deft',
      name: 'deft',
      component: DeftView
    },
    {
      path: '/genres/dub',
      name: 'dub',
      component: DubView
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
      path: '/membership',
      name: 'membership',
      component: MembershipView
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: VolunteerView
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
