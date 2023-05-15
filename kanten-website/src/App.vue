<script setup>
import { ref } from 'vue'
import logo from './images/logo.png'

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
  <div class="py-[1.5rem] px-[1rem]">
    <nav class="flex justify-between items-center">
      <div>
        <a href="#">
          <img class="h-[3.25rem]" :src="logo" alt="Kanten logo" />
        </a>
      </div>
      <div
        class="h-[24px] flex flex-col ml-auto mr-[1rem] text-[1.5rem] translate-y-[3px] group cursor-pointer uppercase leading-none overflow-hidden"
      >
        <span class="group-hover:translate-y-[-20px] ease-in duration-[.15s]">Menu</span>
        <span
          class="rotate-6 group-hover:translate-y-[-24px] group-hover:rotate-0 group-hover:text-baseColor ease-in duration-[.15s]"
          >Close</span
        >
      </div>

      <div class="flex flex-col ml-auto hidden">
        <div v-for="section in sections" :key="section.id">
          <a href="">
            <span>{{ section.title }}</span>
            <span class="hidden">{{ section.title }}</span>
          </a>
        </div>
      </div>
      <button class="w-[2.25rem] h-[2.25rem] rounded-full bg-baseColor">
        <font-awesome-icon
          class="h-[1.25rem] text-darkText translate-y-[1px]"
          :icon="['fas', 'user']"
        />
      </button>
    </nav>
  </div>
</template>

<style scoped></style>
