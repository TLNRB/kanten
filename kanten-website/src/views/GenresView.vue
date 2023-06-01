<script setup>
import { ref, reactive, onMounted } from 'vue'
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
</script>

<template>
  <main class="mt-[6.875rem] pt-[2.5rem] overflow-x-hidden] lg:mt-[7.875rem] xl:mt-[8.375rem]">
    <div
      class="mt-[1rem] mb-[4rem] flex flex-wrap items-center justify-center gap-[1.25rem] px-[1rem] md:px-[4rem] md:gap-[2rem] md:mt-[2rem] lg:mt-[3rem] xxl:px-[12.5rem]"
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
    <!-- <div
      v-for="genre in genresData"
      :key="genre.id"
      class="translate-y-[-2rem]"
      :class="[activeFilter == genre.category ? 'block' : 'hidden']"
    >
      <video
        :src="filteredGenre.video"
        autoplay
        muted
        type="video/mp4"
        class="w-[100%] md:w-[750px] md:mx-auto"
      ></video>
      <div
        class="text-darkText leading-snug relative py-[4rem] px-[1rem] md:px-[4rem] xxl:px-[12.5rem]"
        :class="`background-${activeFilter}`"
      >
        <div
          class="flex flex-col gap-[2.5rem] md:absolute md:w-[400px] md:top-[-6rem] md:right-[50%] md:translate-x-[82.5%] md:text-white"
        >
          <p class="font-[500] sm:text-[1.25rem]">
            {{ filteredGenre.mainDesc }}
          </p>
          <RouterLink
            :to="`/${activeFilter}`"
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
    </div> -->
    <div class="translate-y-[-2rem]">
      <video
        :src="filteredGenre.video"
        autoplay
        muted
        type="video/mp4"
        class="w-[100%] md:w-[750px] md:mx-auto"
      ></video>
      <div
        class="text-darkText leading-snug relative py-[4rem] px-[1rem] md:px-[4rem] xxl:px-[12.5rem]"
        :class="`background-${activeFilter}`"
      >
        <div
          class="flex flex-col gap-[2.5rem] md:absolute md:w-[400px] md:top-[-6rem] md:right-[50%] md:translate-x-[82.5%] md:text-white"
          :class="[
            activeFilter == 'manaClub' || activeFilter == 'deft'
              ? 'md:top-[-6rem] md:right-[50%] md:translate-x-[82.5%]'
              : 'md:top-[-6rem] md:left-[50%] md:translate-x-[-82.5%]'
          ]"
        >
          <p class="font-[500] sm:text-[1.25rem]">
            {{ filteredGenre.mainDesc }}
          </p>
          <RouterLink
            :to="`/${activeFilter}`"
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
