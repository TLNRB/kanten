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

const dropdownState = ref(false)
const dropdownStateChange = () => {
  dropdownState.value = !dropdownState.value
}
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
        class="flex gap-[6px] ml-auto mr-[1rem] text-[1.5rem] translate-y-[2px] group cursor-pointer uppercase leading-none"
        @click="dropdownStateChange"
      >
        <div
          class="h-[9px] w-[9px] my-auto rounded-full bg-baseColor ease-in duration-[-2s]"
          :class="{ 'dropdown-activeState': dropdownState }"
        ></div>
        <div class="h-[24px] flex flex-col overflow-hidden">
          <span
            class="tetx-lightText ease-in duration-[.2s]"
            :class="{ 'translate-y-[-20px]': dropdownState }"
            >Menu</span
          >
          <span
            class="rotate-6 ease-in duration-[.2s]"
            :class="{ 'dropdown-close-active': dropdownState }"
            >Close</span
          >
        </div>
      </div>

      <div class="flex-col ml-auto hidden" :class="{ 'dropdown-nav-active': dropdownState }">
        <div v-for="section in sections" :key="section.id">
          <a href="">
            <span>{{ section.title }}</span>
            <span class="hidden">{{ section.title }}</span>
          </a>
        </div>
      </div>
      <button class="w-[2rem] h-[2rem] rounded-full bg-baseColor">
        <font-awesome-icon
          class="h-[1.125rem] text-darkText translate-y-[2px]"
          :icon="['fas', 'user']"
        />
      </button>
    </nav>
  </div>
</template>

<style scoped>
.dropdown-nav-active {
  display: flex;
}
.dropdown-activeState {
  background-color: #666666;
  transition: background-color ease-in 0.2s;
}
.dropdown-close-active {
  transform: rotate(0);
  transform: translateY(-24px);
}
</style>
