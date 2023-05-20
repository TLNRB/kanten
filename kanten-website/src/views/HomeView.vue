<script setup>
import { ref } from 'vue'
/* ---------- Importing Section Components ---------- */
import Home from '../components/HomeView/Home.vue'
import About from '../components/HomeView/About.vue'
import Events from '../components/HomeView/Events.vue'
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
  <Events />
  <Collaborators :collabs="collabs" :sculpture="sculpture" :loop="loop" />
</template>

<style scoped></style>
