<script setup>
import { ref } from 'vue'
/* ---------- Importing Section Components ---------- */
import Home from '../components/HomeView/Home.vue'
import About from '../components/HomeView/About.vue'
import Collaborators from '../components/HomeView/Collaborators.vue'
/* ---------- Importing Images ---------- */
import mouse from '../images/mouse.svg'
import statue from '../images/statueK.svg'
import statueWithGlass from '../images/statueWIthGlasses.svg'
import wavyLines from '../images/wavyLines.svg'
import boldLines from '../images/boldIndentedLines.svg'
import sculpture from '../images/sculpture.svg'
import loop from '../images/loop.svg'
import zigzag from '../images/zigzag.svg'
/* ---------- Importing Collabs ---------- */
import allCollabs from '../data/collaborations.js'

const collabs = ref(allCollabs)
</script>

<template>
  <Home :mouse="mouse" :statue="statue" />
  <About :statueWithGlass="statueWithGlass" :wavyLines="wavyLines" :boldLines="boldLines" />
  <!-- <img :src="zigzag" alt="Zig zag line" /> -->
  <section class="py-[4rem]">
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
