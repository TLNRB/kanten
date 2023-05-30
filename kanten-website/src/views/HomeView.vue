<script setup>
import { ref, onMounted, watch } from 'vue'
/* ---------- Importing Section Components ---------- */
import Home from '../components/HomeView/Home.vue'
import About from '../components/HomeView/About.vue'
import Events from '../components/HomeView/Events.vue'
import Collaborators from '../components/HomeView/Collaborators.vue'
import Newsletter from '../components/HomeView/Newsletter.vue'
import Contact from '../components/HomeView/Contact.vue'
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

/* ---------- Import Stores ---------- */
import { useStoreEvents } from '../stores/storeEvents'
/* ---------- Stores ---------- */
const storeEvents = useStoreEvents()

const collabs = ref(allCollabs)

onMounted(() => {})
</script>

<template>
  <Home :statueK="statueK" />
  <About :statue="statue" :wavyLines="wavyLinesBlack" :boldLines="boldLinesBlack" />
  <Events :storeEvents="storeEvents" />
  <Collaborators :collabs="collabs" :sculpture="sculpture" :loop="loop" />
  <Newsletter />
  <Contact />
</template>

<style scoped></style>
