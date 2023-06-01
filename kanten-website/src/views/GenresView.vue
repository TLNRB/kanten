<script setup>
import { ref, reactive, onMounted } from 'vue'
import allGenresData from '../data/genresData.js'
import { RouterLink } from 'vue-router'
/* Immport Images */
import wavyLinesBlack from '../images/wavyLinesBlack.svg'

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

    <!-- <div class="sm:translate-y-[-2rem] lg:translate-y-[-3.75rem]">
      <video
        :src="filteredGenre.video"
        autoplay
        muted
        type="video/mp4"
        class="w-[100%] scale-[130%] sm:scale-100 md:w-[768px] md:mx-auto lg:w-[1060px] xl:w-[1150px]"
      ></video>
      <div
        class="bg-[url('../images/squareGrid.svg')] flex pt-[20%] pb-[2rem] px-[1rem] xs:pt-[17.5%] sm:py-[4rem] md:px-[4rem] lg:items-center xxl:px-[12.5rem]"
        :class="`background-${activeFilter}`"
      >
        <img
          class="hidden w-[200px] lg:block xl:w-[240px] xxxl:w-[280px]"
          :src="wavyLinesBlack"
          alt="Wavy Lines"
        />
        <div
          class="flex flex-col gap-[2.5rem] text-darkText leading-snug sm:w-[500px] sm:mx-auto md:w-[550px]"
        >
          <p class="font-[500] sm:text-[1.25rem] lg:text-[1.5rem] lg:text-center">
            {{ filteredGenre.mainDesc }}
          </p>
          <RouterLink
            :to="`/genres/${activeFilter}`"
            class="flex flex-col w-fit mr-auto text-[1rem] relative group lg:mx-auto"
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
        <img
          class="hidden w-[200px] lg:block xl:w-[240px] xxxl:w-[280px]"
          :src="wavyLinesBlack"
          alt="Wavy Lines"
        />
      </div>
    </div> -->
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
