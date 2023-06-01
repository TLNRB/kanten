<script setup>
import { ref, onMounted } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import allGenresData from '../../data/genresData.js'
import { RouterLink, useRouter } from 'vue-router'
/* ---------- Import Stores ---------- */
import { useStoreGenres } from '../../stores/storeGenres.js'

/* ---------- Stores ---------- */
const storeGenres = useStoreGenres()

const genresData = ref(allGenresData)

/*----- Filter the correct genre images -----*/
const filterImages = () => {
  storeGenres.filteredGenres = storeGenres.genres.filter((image) => image.genre == 'deft')
}

/*----- Finding the correct genre -----*/
let genre = ref('')

const genresFilter = () => {
  genre.value = genresData.value.find((item) => item.category == 'deft')
}

/*----- Routing -----*/
const router = useRouter()
const goBack = () => {
  router.go(-1)
}

let timeout
let counter = 0

const timeOutClear = () => {
  clearInterval(timeout)
}

onMounted(() => {
  storeGenres.getGenres()
  genresFilter()
  timeout = setInterval(() => {
    if (counter == 15 || storeGenres.genres.length != 0) {
      filterImages()
      timeOutClear()
    } else {
      counter++
    }
  }, 1000)
})
</script>

<template>
  <main
    class="mt-[6.875rem] py-[2.5rem] overflow-x-hidden md:pt-[4rem] lg:mt-[7.875rem] lg:pt-[8rem] xl:mt-[8.375rem]"
  >
    <div
      class="px-[1rem] md:px-[4rem] lg:flex lg:justify-center lg:items-center lg:mt-[5rem] lg:mb-[6rem] xxl:px-[12.5rem] xxl:mt-[3rem]"
    >
      <img
        class="xs:h-[375px] xs:mx-auto sm:h-[520px] md:h-[600px] lg:h-[500px] lg:translate-y-[-4rem] lg:brightness-[85%] xxl:h-[550px]"
        :src="genre.logo"
        :alt="`${genre.title} Logo`"
      />
      <div
        class="flex flex-col gap-[1rem] mb-[1rem] translate-y-[-1.5rem] sm:mb-[1.5rem] md:translate-y-[-2.5rem] md:mb-[.5rem] lg:translate-y-0 lg:ml-[-1rem]"
      >
        <h1
          class="text-[2.5rem] font-bold leading-tight uppercase xs:text-[3rem] sm:text-[4.5rem] md:text-[5rem] lg:translate-y-[1rem] lg:text-[4.5rem] lg:translate-x-[-5px]"
        >
          {{ genre.title }}
        </h1>
        <p class="sm:text-[1.25rem]">{{ genre.shortDesc }}</p>
        <p class="sm:text-[1.25rem]">{{ genre.longerDesc }}</p>
        <button
          @click="goBack()"
          class="flex flex-col w-fit mt-[1rem] ml-auto text-[1rem] relative group sm:mt-[1.5rem] sm:mb-[1.25rem]"
        >
          <span
            class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-deft z-[1] group-hover:text-deft group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] sm:py-[.5rem] sm:px-[1.25rem] sm:text-[1.5rem]"
            >Go Back</span
          >
          <span
            class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] sm:py-[.5rem] sm:px-[1.25rem] sm:text-[1.5rem]"
            >Go Back</span
          >
        </button>
      </div>
    </div>
    <div
      class="bg-[url('../images/squareGrid.svg')] flex flex-col gap-[1rem] items-center bg-deft text-darkText py-[2rem] px-[1rem] sm:py-[2.5rem] md:py-[4rem] md:px-[4rem] xxl:px-[12.5rem]"
    >
      <h2 class="text-[2.5rem] font-bold uppercase sm:text-[4rem] md:text-[4.5rem] md:leading-none">
        Gallery
      </h2>
      <p class="font-[500] text-center leading-tight sm:text-[1.25rem] sm:font-semibold">
        Check out some pictures from the previous years!
      </p>
      <div v-if="storeGenres.filteredGenres.length" class="my-[1rem] sm:mt-[2rem]">
        <swiper
          class="h-[240px] w-[85vw] mx-[1rem] md:mx-[4rem] xs:h-[300px] sm:h-[380px] md:h-[460px] lg:h-[500px] lg:w-[881px] xxl:h-[550px] xxl:w-[900px]"
          :slides-per-view="1"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="image in storeGenres.filteredGenres" :key="image.id"
            ><img class="h-[100%] w-[100%] object-cover" :src="image.coverImg" :alt="image.title"
          /></swiper-slide>
          ...
        </swiper>
      </div>
      <div
        v-else
        class="mt-[2rem] text-[1rem] flex justify-center text-darkText italic md:text-[1.25rem]"
      >
        No images found
      </div>
      <RouterLink
        to="/events"
        class="flex flex-col w-fit mt-[1rem] mx-auto text-[1rem] relative group sm:mt-[1.5rem]"
      >
        <span
          class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] bg-deft border-darkBG text-darkText z-[1] group-hover:text-lightText ease-in duration-[.15s] delay-[.05s] sm:py-[.5rem] sm:px-[1.25rem] sm:text-[1.5rem]"
          >Explore Events</span
        >
        <span
          class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] border-darkBG absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] sm:py-[.5rem] sm:px-[1.25rem] sm:text-[1.5rem]"
          >Explore Events</span
        >
      </RouterLink>
    </div>
  </main>
</template>

<style scoped></style>
