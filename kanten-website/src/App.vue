<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'

import { useStoreAuth } from './stores/storeAuth.js'

/*----- Stores -----*/
const storeAuth = useStoreAuth()

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

const changeSectionState = (sectionRoute) => {
  sections.value.forEach((section) => {
    if (section.route == sectionRoute) {
      section.active = true
    } else {
      section.active = false
    }
  })
}
</script>

<template>
  <div>
    <Navbar :sections="sections" @stateChange="changeSectionState" />
    <RouterView />
    <FooterSection :sections="sections" />
  </div>
</template>

<style scoped></style>
