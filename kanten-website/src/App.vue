<script setup>
import { ref, onMounted, watch } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'

import { useStoreAuth } from './stores/storeAuth.js'

/*----- Stores -----*/
const storeAuth = useStoreAuth()

const router = useRouter()
watch(router.currentRoute, () => {
  changeSectionState(router.currentRoute.value.name)
})

onMounted(() => {
  storeAuth.init()
})

// ---------- NavBar ----------
const sections = ref([
  { id: 'home', title: 'Home', route: '/', active: true },
  { id: 'events', title: 'Events', route: 'events', active: false },
  { id: 'genres', title: 'Genres', route: 'genres', active: false },
  { id: 'studio', title: 'Studio', route: 'studio', active: false },
  { id: 'community', title: 'Community', route: 'community', active: false }
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
</script>

<template>
  <div>
    <Navbar :sections="sections" />
    <RouterView />
    <FooterSection :sections="sections" />
  </div>
</template>

<style scoped></style>
