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
/* ---------- Importing Collabs ---------- */
import allCollabs from '../data/collaborations.js'

const collabs = ref(allCollabs)
</script>

<template>
  <Home :mouse="mouse" :statue="statue" />
  <About :statueWithGlass="statueWithGlass" :wavyLines="wavyLines" :boldLines="boldLines" />
  <Collaborators :collabs="collabs" />
</template>

<style scoped></style>
