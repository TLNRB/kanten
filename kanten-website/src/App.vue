<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

// ---------- NavBar ----------
const sections = ref([
  { id: 'home', title: 'Home', active: true },
  { id: 'event', title: 'Event', active: false },
  { id: 'genres', title: 'Genres', active: false },
  { id: 'studio', title: 'Studio', active: false },
  { id: 'community', title: 'Community', active: false }
])
</script>

<template>
  <div class="">
    <Navbar :sections="sections" />
    <RouterView />
  </div>
</template>

<style scoped></style>
