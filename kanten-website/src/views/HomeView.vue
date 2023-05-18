<script setup>
import { ref } from 'vue'
/* ---------- Importing Section Components ---------- */
import Home from '../components/HomeView/Home.vue'
import About from '../components/HomeView/About.vue'
import Collaborators from '../components/HomeView/Collaborators.vue'
/* ---------- Importing Images ---------- */
import statueK from '../images/statueK.svg'
import statue from '../images/statue.svg'
import boldLinesWhite from '../images/boldIndentedLinesWhite.svg'
import boldLinesBlack from '../images/boldIndentedLinesBlack.svg'
import wavyLinesBlue from '../images/wavyLinesBlue.svg'
import wavyLinesBlack from '../images/wavyLinesBlack.svg'
import sculpture from '../images/sculpture.svg'
import loop from '../images/loop.svg'
/* ---------- Importing Collabs ---------- */
import allCollabs from '../data/collaborations.js'

const collabs = ref(allCollabs)
</script>

<template>
  <Home :statueK="statueK" />
  <About :statue="statue" :wavyLines="wavyLinesBlack" :boldLines="boldLinesBlack" />
  <section class="flex justify-center items-center py-[4rem] px-[1rem] md:px-[2rem] xl:px-[3rem]">
    <div></div>
    <div class="flex flex-col items-center justify-center md:flex-row">
      <img class="md:w-[164px]" :src="sculpture" alt="Sculpture" />
      <p class="text-[1.25rem] font-semibold text-center md:text-[1.5rem]">
        Powered by<span
          class="relative text-[2rem] uppercase font-bold top-[3px] left-[5px] md:text-[3rem] md:left-[8px] md:top-[7px]"
          >Our<span
            class="absolute top-[-1px] left-[1px] font-bold text-baseColor z-[-1] md:top-[-3px]"
            >Our</span
          ></span
        ><br />
        <span
          class="text-[2rem] font-bold uppercase leading-none translate-x-[-1rem] md:text-[3rem]"
          >Amazing</span
        ><br />
        <span
          class="relative text-[2rem] uppercase font-bold top-[-5px] md:text-[3rem] md:top-[-10px]"
          >Collaborators<span
            class="absolute top-[-1px] left-[1px] font-bold text-baseColor z-[-1] md:top-[-3px]"
            >Collaborators</span
          ></span
        >
      </p>
      <img class="absolute" :src="loop" alt="Loop graphic element" />
    </div>
  </section>
  <Collaborators :collabs="collabs" />
</template>

<style scoped></style>
