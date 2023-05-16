<script setup>
import { ref } from 'vue'
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
  <div class="py-[1.5rem] px-[1rem] md:py-[2.5rem] md:px-[2rem] xl:p-[3rem]">
    <Navbar :sections="sections" />
  </div>
</template>

<style scoped></style>
