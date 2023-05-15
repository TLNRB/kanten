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
    <nav class="flex justify-between items-center z-10">
      <!------- Logo Image ------->
      <div>
        <a href="#">
          <img class="h-[3.25rem]" :src="logo" alt="Kanten logo" />
        </a>
      </div>

      <!------- Dropdown Text ------->
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

      <!------- Nav Links ------->
      <div
        class="flex flex-col items-end ml-auto absolute bottom-[2rem] right-[-15rem] text-[2.5rem] uppercase leading-[60px] ease-in duration-[.3s]"
        :class="{ 'dropdown-nav-active': dropdownState }"
      >
        <div v-for="section in sections" :key="section.id" class="overflow-hidden">
          <p class="h-[50px] flex flex-col cursor-pointer group">
            <span
              class="group-hover:translate-y-[-45px] ease-in duration-[.2s]"
              :class="{ 'text-darkerText': section.active }"
              >{{ section.title }}</span
            >
            <span
              class="font-[500] text-baseColor rotate-6 translate-y-[-15px] group-hover:translate-y-[-60px] group-hover:rotate-0 ease-in duration-[.2s]"
              >{{ section.title }}</span
            >
          </p>
        </div>
      </div>

      <!------- Profile ------->
      <button class="w-[2rem] h-[2rem] rounded-full border-2 border-baseColor">
        <font-awesome-icon
          class="h-[1.125rem] text-baseColor translate-y-[2px]"
          :icon="['fas', 'user']"
        />
      </button>
    </nav>
    <div
      class="absolute top-0 right-0 left-0 bottom-0 opacity-0 translate-x-[100%] ease-in duration-[.3s] z-[-1]"
      :class="{ 'bg-darkBG dropdown-background-active': dropdownState }"
    ></div>
  </div>
</template>

<style scoped>
.dropdown-nav-active {
  right: 1rem;
  transition-delay: all ease-in 1s;
}

.dropdown-background-active {
  opacity: 1;
  transform: translateX(0);
  transition-delay: transform 0.15s ease-in 0.3s;
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
