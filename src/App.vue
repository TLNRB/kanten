<script setup>
import { ref, onMounted, watch } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import Preloader from './components/Preloader.vue'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'

import { useStoreAuth } from './stores/storeAuth.js'

/*----- Stores -----*/
const storeAuth = useStoreAuth()

const router = useRouter()
watch(router.currentRoute, () => {
  changeSectionState(router.currentRoute.value.name)
})

// ---------- NavBar ----------
const sections = ref([
  { id: 'home', title: 'Home', route: '/', active: true },
  { id: 'events', title: 'Events', route: '/events', active: false },
  { id: 'genres', title: 'Genres', route: '/genres', active: false },
  { id: 'studio', title: 'Studio', route: '/studio', active: false },
  { id: 'community', title: 'Community', route: '/community', active: false }
])

const changeSectionState = (sectionID) => {
  sections.value.forEach((section) => {
    if (section.id == sectionID) {
      section.active = true
    } else {
      section.active = false
    }
  })
}

//Preloader
const loading = ref(true)
document.body.style.overflow = 'hidden'

// Simulate a delay to show the preloader
onMounted(() => {
  storeAuth.init()
  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = 'visible'
  }, 3250)
})
</script>

<template>
  <div>
    <Preloader class="absolute top-0 left-0 right-0 z-[11]" :class="{ display: !loading }" />
    <Navbar :sections="sections" />
    <RouterView />
    <FooterSection :sections="sections" />
  </div>
</template>

<style scoped>
.display {
  display: none;
}
</style>
