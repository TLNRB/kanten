<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
/* ---------- Importing Section Components ---------- */
import Event from '../components/EventView/Event.vue'
import Preloader from '../components/Preloader.vue'

/* ---------- Import Stores ---------- */
import { useStoreEvents } from '../stores/storeEvents'
/* ---------- Stores ---------- */
const storeEvents = useStoreEvents()

/* ---------- Genres with filter ---------- */
let activeFilter = 'all'
let filteredEvents = ref('')

const genres = reactive([
  { id: 0, name: 'All', filter: 'all', active: true },
  { id: 1, name: 'Mana Club', filter: 'manaClub', active: false },
  { id: 2, name: 'Vertex', filter: 'vertex', active: false },
  { id: 3, name: 'Deft', filter: 'deft', active: false },
  { id: 4, name: 'Dub', filter: 'dub', active: false },
  { id: 5, name: 'Other', filter: 'other', active: false }
])

const handleGenreState = (id) => {
  genres.forEach((genre) => {
    if (genre.id == id) {
      genre.active = true
      activeFilter = genre.filter
      filteredEvents.value = storeEvents.events.filter(
        (event) => event.genre == activeFilter || activeFilter == 'all'
      )
    } else {
      genre.active = false
    }
  })
  backgroundLines()
}

/* ---------- Background line(s) placement and calculations ---------- */
let numLines = ref('')

const backgroundLines = () => {
  if (filteredEvents.value.length <= 1) {
    numLines.value = 0
  } else if (filteredEvents.value.length % 2 == 0) {
    numLines.value = filteredEvents.value.length / 2
  } else {
    numLines.value = Math.floor(filteredEvents.value.length / 2)
    numLines.value++
  }

  const screenWidth = window.innerWidth

  // Calculate the number of lines based on screen width and number of cards
  if (screenWidth < 1082) {
    // Small screens
    return numLines.value
  } else if (screenWidth > 1081 && screenWidth < 1863) {
    // Medium screens
    if (filteredEvents.value.length <= 3) {
      return (numLines.value = 0)
    } else if (
      filteredEvents.value.length % 4 == 0 ||
      filteredEvents.value.length % 4 == 1 ||
      filteredEvents.value.length % 4 == 2
    ) {
      numLines.value = Math.floor(filteredEvents.value.length / 4)
      return numLines.value
    } else {
      numLines.value = Math.floor(filteredEvents.value.length / 4)
      numLines.value++
      return numLines.value
    }
  } else {
    // Large screens
    if (filteredEvents.value.length <= 3) {
      return numLines.value
    } else if (
      filteredEvents.value.length % 6 == 0 ||
      filteredEvents.value.length % 6 == 1 ||
      filteredEvents.value.length % 6 == 2 ||
      filteredEvents.value.length % 6 == 3
    ) {
      numLines.value = Math.floor(filteredEvents.value.length / 6)
      return numLines.value
    } else {
      numLines.value = Math.floor(filteredEvents.value.length / 6)
      numLines.value++
      return numLines.value
    }
  }
}

// Update the number of lines on window resize
const updateBackgroundLines = () => {
  backgroundLines() // Trigger re-computation of background lines
}

let timeout
let counter = 0

const timeOutClear = () => {
  clearInterval(timeout)
}

//Preloader
const loading = ref(true)
document.body.style.overflow = 'hidden'

onMounted(() => {
  storeEvents.getEvents()
  window.addEventListener('resize', updateBackgroundLines)
  timeout = setInterval(() => {
    if (counter == 15 || storeEvents.events.length != 0) {
      handleGenreState(0)
      backgroundLines()
      timeOutClear()
    } else {
      counter++
    }
  }, 1000)
  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = 'visible'
  }, 3250)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateBackgroundLines)
})
</script>

<template>
  <Preloader class="absolute top-0 left-0 right-0 z-[11]" :class="{ display: !loading }" />
  <div class="relative">
    <Event :loading="loading" />

    <section class="pb-[4rem] px-[1rem] md:px-[4rem] lg:pb-[6rem] xxl:px-[12.5rem]">
      <div
        class="mt-[2.5rem] mb-[3rem] flex flex-wrap items-center justify-center gap-[1.25rem] lg:gap-[2rem] lg:mt-[1rem] lg:mb-[4rem]"
      >
        <button
          v-for="genre in genres"
          :key="genre.id"
          class="flex flex-col text-center text-[1.25rem] relative group"
          @click="handleGenreState(genre.id)"
        >
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-baseColor z-[1] bg-darkBG ease-in duration-[.15s] delay-[.05s] group-hover:border-lightText group-hover:text-baseColor lg:py-[.5rem] lg:px-[1.25rem] lg:text-[1.5rem]"
            :class="[genre.active ? 'active' : '']"
            >{{ genre.name }}</span
          >
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] lg:py-[.5rem] lg:px-[1.25rem] lg:text-[1.5rem]"
            >{{ genre.name }}</span
          >
        </button>
      </div>
      <div
        v-if="filteredEvents.length"
        class="flex flex-col justify-center items-center flex-wrap gap-[2.5rem] sm:gap-[4rem] sm:flex-row"
      >
        <div
          v-for="event in filteredEvents"
          :key="event.id"
          class="h-[416px] w-[248px] flex flex-col items-center p-[.5rem] bg-darkBG border-solid border-[1px] z-[1] border-baseColor xs:h-[434px] xs:w-[320px] sm:h-[580px] sm:w-[445px]"
        >
          <img
            class="object-cover h-[260px] w-[100%] sm:h-[348px]"
            :src="event.coverImg"
            :alt="`Promo Image for ${event.title}`"
          />
          <div class="ml-[.25rem] w-[100%] flex flex-col justify-center">
            <h1
              class="font-bold leading-none text-[1.25rem] z-[1] relative top-[-.5rem] drop-shadow-xl xs:text-[1.75rem] xs:top-[-.75rem] sm:text-[2.25rem] sm:top-[-1rem]"
            >
              {{ event.title }}
            </h1>
            <h3
              class="relative font-[500] text-[1.25rem] leading-tight mt-[.5rem] xs:text-[1.5rem] xs:mt-[.25rem] sm:text-[2rem]"
            >
              {{ event.date }}
            </h3>
            <RouterLink
              :to="{ name: 'singleeventview', params: { id: event.id } }"
              class="flex flex-col w-fit mt-[1rem] mr-auto text-[1rem] relative group sm:mt-[1.5rem] sm:mb-[1.25rem]"
            >
              <span
                class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] sm:py-[.5rem] sm:px-[1.25rem] sm:text-[1.5rem]"
                >Read More</span
              >
              <span
                class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] sm:py-[.5rem] sm:px-[1.25rem] sm:text-[1.5rem]"
                >Read More</span
              >
            </RouterLink>
          </div>
        </div>
      </div>
      <div
        v-else
        class="mt-[2rem] text-[1rem] flex justify-center text-normalText italic md:text-[1.25rem]"
      >
        No events found
      </div>
    </section>
    <section
      class="absolute bottom-[272px] left-0 right-0 flex flex-col items-center gap-[456px] z-[-1] xs:top-[727px] xs:bottom-[281px] xs:gap-[474px] sm:top-[824px] sm:bottom-[354px] sm:gap-[644px] md:top-[760px] lg:top-[799px] lg:bottom-[386px] xl:top-[842px] xxxl:top-[874px] xxxl:bottom-[386px]"
    >
      <div
        v-for="(line, index) in numLines"
        :key="index"
        class="bg-[url('../images/squareGrid.svg')] w-[100%] h-[456px] bg-baseColor xs:h-[474px] sm:h-[644px]"
      ></div>
    </section>
  </div>
</template>

<style scoped>
.display {
  display: none;
}

.active {
  background-color: #1ecece;
  border-color: #1ecece;
  transition: ease-in 0.2s;
}

.active:hover {
  color: #f4f4f4;
  border-color: #1ecece;
  transition: ease-in 0.2s;
}
</style>
