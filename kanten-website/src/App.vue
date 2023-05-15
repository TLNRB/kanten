<script setup>
import { ref } from 'vue'
import allSections from './data/navbarDB'
// ---------- NavBar ----------
const sections = ref(allSections)
</script>

<template>
  <nav>
    <div>
      <a href=""></a>
    </div>
    <div class="hidden">
      <span>Menu</span>
      <span>Close</span>
    </div>
    <div v-for="section in sections" :key="section.id">
      <a href="">
        <span>{{ section.title }}</span>
        <span class="hidden">{{ section.title }}</span>
      </a>
    </div>
    <button></button>
  </nav>
</template>

<style scoped></style>
