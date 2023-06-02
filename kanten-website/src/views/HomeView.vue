<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
/* ---------- Importing Section Components ---------- */
import Preloader from '../components/Preloader.vue'
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
  <Home :statueK="statueK" :loading="loading" />
  <About :statue="statue" :wavyLines="wavyLinesBlack" :boldLines="boldLinesBlack" />
  <Events :storeEvents="storeEvents" />
  <Collaborators :collabs="collabs" :sculpture="sculpture" :loop="loop" />
  <Newsletter />
  <Contact />
</template>

<style scoped>
.display {
  display: none;
}
</style>
