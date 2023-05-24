<script setup>
import { ref, reactive } from 'vue'
import AddEvents from '../components/Admin/AddEvents.vue'
import ExistingEvent from '../components/Admin/ExistingEvent.vue'
import AddPictures from '../components/Admin/AddPictures.vue'
import CurrentGallery from '../components/Admin/CurrentGallery.vue'

import allEvents from '../data/eventsDB.js'
import allGallery from '../data/studioGalleryDB.js'

const events = ref(allEvents)
const gallery = ref(allGallery)

const options = reactive([
  { id: 0, name: 'Events', filter: 'event', active: true },
  { id: 1, name: 'Genres Gallery', filter: 'genre', active: false },
  { id: 2, name: 'Studio Gallery', filter: 'studio', active: false }
])

const handleState = (id) => {
  options.forEach((option) => {
    if (option.id == id) {
      option.active = true
    } else {
      option.active = false
    }
  })
}
</script>

<template>
  <main
    class="bg-[url('../images/gridGray.svg')] overflow-x-hidden flex flex-col mt-[6.875rem] py-[4rem] px-[1rem] md:px-[4rem] md:mt-[7.875rem] xl:mt-[8.375rem] xxl:px-[12.5rem]"
  >
    <h1
      class="flex items-center justify-center relative mx-auto text-[2rem] uppercase xs:text-[2.5rem] md:text-[5rem] leading-none"
    >
      <span class="font-bold text-baseColor z-[1]">Admin</span>
      <span class="font-bold absolute top-[1.5px] left-[1.5px] z-[0] md:top-[2.5px] md:left-[2.5px]"
        >Admin</span
      >
    </h1>
    <div
      class="mt-[3rem] md:mt-[4rem] flex flex-wrap items-center justify-center gap-[1.25rem] md:gap-[2rem]"
    >
      <button
        v-for="option in options"
        :key="option.id"
        class="flex flex-col text-center text-[1.25rem] relative group"
        @click="handleState(option.id)"
      >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          :class="[option.active ? 'active' : '']"
          >{{ option.name }}</span
        >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          >{{ option.name }}</span
        >
      </button>
    </div>
    <!-- Sections goes here -->
    <!-- Events -->
    <div v-if="options[0].active">
      <AddEvents />
      <h2
        class="flex items-center justify-center mx-auto text-[2rem] font-bold mt-[8rem] uppercase xs:text-[2.5rem] md:text-[5rem] md:mt-[10rem]"
      >
        Existing Events
      </h2>
      <div class="my-[3rem] md:mt-[4rem] flex justify-center gap-[4rem] flex-wrap">
        <ExistingEvent v-for="event in events" :key="event.id" :event="event" />
      </div>
    </div>
    <!-- Genres -->
    <div v-else-if="options[1].active">
      <AddPictures />
      <h2
        class="flex items-center justify-center mx-auto text-[2rem] font-bold mt-[8rem] uppercase xs:text-[2.5rem] md:text-[5rem] md:mt-[10rem]"
      >
        Genre Gallery
      </h2>
      <div class="my-[3rem] md:mt-[4rem] flex justify-center gap-[4rem] flex-wrap">
        <CurrentGallery v-for="image in gallery" :key="image.id" :image="image" />
      </div>
    </div>

    <!-- Studio -->
    <div v-else-if="options[2].active">
      <AddPictures />
      <h2
        class="flex items-center justify-center mx-auto text-[2rem] font-bold mt-[8rem] uppercase xs:text-[2.5rem] md:text-[5rem] md:mt-[10rem]"
      >
        Studio Gallery
      </h2>
      <div class="my-[3rem] md:mt-[4rem] flex justify-center gap-[4rem] flex-wrap">
        <CurrentGallery v-for="image in gallery" :key="image.id" :image="image" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.active {
  background-color: #1ecece;
  transition: ease-in 0.2s;
}

.active:hover {
  color: #f4f4f4;
  transition: ease-in 0.2s;
}
</style>
