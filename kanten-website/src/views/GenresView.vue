<script setup>
import { ref, reactive, onMounted } from 'vue'
import Preloader from '../components/Preloader.vue'
import allGenresData from '../data/genresData.js'
import { RouterLink } from 'vue-router'

const genresData = ref(allGenresData)

/* ---------- Genres with filter ---------- */
let activeFilter = 'manaClub'
let filteredGenre = ref(genresData.value[0])
const genres = reactive([
  { id: 0, name: 'Mana Club', filter: 'manaClub', active: true },
  { id: 1, name: 'Vertex', filter: 'vertex', active: false },
  { id: 2, name: 'Deft', filter: 'deft', active: false },
  { id: 3, name: 'Dub', filter: 'dub', active: false }
])

const handleGenreState = (id) => {
  genres.forEach((genre) => {
    if (genre.id == id) {
      genre.active = true
      activeFilter = genre.filter
      filteredGenre.value = genresData.value.find((genre) => genre.category == activeFilter)
    } else {
      genre.active = false
    }
  })
}

//Preloader
const loading = ref(true)
document.body.style.overflow = 'hidden'

// Simulate a delay to show the preloader
onMounted(() => {
  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = 'visible'
  }, 3250)
})
</script>

<template>
  <Preloader class="absolute top-0 left-0 right-0 z-[11]" :class="{ display: !loading }" />
  <main class="mt-[6.875rem] py-[2.5rem] overflow-x-hidden lg:mt-[7.875rem] xl:mt-[8.375rem]">
    <div
      class="mt-[1rem] mb-[2.5rem] flex flex-wrap items-center justify-center gap-[1.25rem] px-[1rem] md:px-[4rem] md:gap-[2rem] lg:mb-[1rem] md:mt-[1.5rem] lg:mt-[3rem] xxl:px-[12.5rem]"
    >
      <button
        v-for="genre in genres"
        :key="genre.id"
        class="flex flex-col text-center text-[1.25rem] relative group"
        @click="handleGenreState(genre.id)"
      >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          :class="[genre.active ? `active-${genre.filter}` : `notActive-${activeFilter}`]"
          >{{ genre.name }}</span
        >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          >{{ genre.name }}</span
        >
      </button>
    </div>

    <div
      v-for="genre in genresData"
      :key="genre.id"
      class="relative"
      :class="[genre.category == activeFilter ? 'block' : 'hidden']"
    >
      <img
        class="w-[275px] mx-auto px-[1rem] xs:w-[360px] sm:w-[560px] md:w-[768px] lg:w-[900px]"
        :src="genre.cover"
        :alt="`${genre.title} logo`"
      />
      <div :class="`background-${activeFilter}`">
        <div
          class="flex flex-col gap-[2.5rem] text-darkText leading-snug mt-[-3.5rem] pt-[6rem] pb-[2rem] px-[1rem] xs:mt-[-4.5rem] xs:pt-[7rem] sm:mt-[-7.5rem] sm:pt-[10.5rem] sm:pb-[3rem] md:px-[4rem] md:w-[700px] md:mx-auto md:mt-[-9rem] md:pt-[12rem] md:pb-[4rem] lg:mt-[-11rem] lg:pt-[2rem]"
          :class="[
            genre.category == 'manaClub' || genre.category == 'deft'
              ? 'lg:translate-x-[35%] lg:w-[590px] '
              : 'lg:translate-x-[-42.5%] lg:w-[535px] xxl:translate-x-[-45%] xxl:w-[525px]'
          ]"
        >
          <p class="font-[500] sm:text-[1.25rem] lg:text-[1.5rem]">
            {{ genre.mainDesc }}
          </p>
          <RouterLink
            :to="`/genres/${activeFilter}`"
            class="flex flex-col w-fit mr-auto text-[1rem] relative group"
          >
            <span
              class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] border-darkBG text-darkText z-[1] ease-in duration-[.2s] sm:py-[.5rem] sm:px-[1.25rem] sm:text-[1.5rem]"
              :class="`background-${activeFilter}`"
              >Explore Events</span
            >
            <span
              class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] border-darkBG absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] sm:py-[.5rem] sm:px-[1.25rem] sm:text-[1.5rem]"
              >Explore Events</span
            >
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.display {
  display: none;
}

/*----- Mana Club Styling -----*/
.active-manaClub {
  background-color: #a809e5;
  border-color: #a809e5;
  transition: all ease-in 0.2s;
}
.notActive-manaClub {
  background-color: #181818;
  border-color: #a809e5;
  transition: all ease-in 0.2s;
}
.notActive-manaClub:hover {
  background-color: #181818;
  border-color: #f4f4f4;
  color: #a809e5;
  transition: all ease-in 0.2s;
}
.background-manaClub {
  background-color: #a809e5;
  transition: all ease-in 0.2s;
}

/*----- Vertex Styling -----*/
.active-vertex {
  background-color: #ea3397;
  border-color: #ea3397;
  transition: all ease-in 0.2s;
}
.notActive-vertex {
  background-color: #181818;
  border-color: #ea3397;
  transition: all ease-in 0.2s;
}
.notActive-vertex:hover {
  background-color: #181818;
  border-color: #f4f4f4;
  color: #ea3397;
  transition: all ease-in 0.2s;
}
.background-vertex {
  background-color: #ea3397;
  transition: all ease-in 0.2s;
}

/*----- Deft Styling -----*/
.active-deft {
  background-color: #20e062;
  border-color: #20e062;
  transition: all ease-in 0.2s;
}
.notActive-deft {
  background-color: #181818;
  border-color: #20e062;
  transition: all ease-in 0.2s;
}
.notActive-deft:hover {
  background-color: #181818;
  border-color: #f4f4f4;
  color: #20e062;
  transition: all ease-in 0.2s;
}
.background-deft {
  background-color: #20e062;
  transition: all ease-in 0.2s;
}

/*----- Dub Styling -----*/
.active-dub {
  background-color: #ffd930;
  border-color: #ffd930;
  transition: all ease-in 0.2s;
}
.notActive-dub {
  background-color: #181818;
  border-color: #ffd930;
  transition: all ease-in 0.2s;
}
.notActive-dub:hover {
  background-color: #181818;
  border-color: #f4f4f4;
  color: #ffd930;
  transition: all ease-in 0.2s;
}
.background-dub {
  background-color: #ffd930;
  transition: all ease-in 0.2s;
}
</style>
