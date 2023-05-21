<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'

// ---------- NavBar ----------
const sections = ref([
  { id: 'home', title: 'Home', route: '/', active: true },
  { id: 'events', title: 'Events', route: 'events', active: false },
  { id: 'genres', title: 'Genres', route: 'genres', active: false },
  { id: 'studio', title: 'Studio', route: 'studio', active: false },
  { id: 'community', title: 'Community', route: 'community', active: false }
])
</script>

<template>
  <div class="">
    <Navbar :sections="sections" />
    <RouterView />
    <FooterSection :sections="sections" />
  </div>
</template>

<style scoped></style>
