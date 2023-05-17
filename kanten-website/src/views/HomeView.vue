<script setup>
/* ---------- Importing Section Components ---------- */
import Home from '../components/HomeView/Home.vue'
import About from '../components/HomeView/About.vue'
/* ---------- Importing Images ---------- */
import mouse from '../images/mouse.svg'
import statue from '../images/statueK.svg'
import statueWithGlass from '../images/statueWIthGlasses.svg'
import wavyLines from '../images/wavyLines.svg'
import boldLines from '../images/boldIndentedLines.svg'
</script>

<template>
  <Home :mouse="mouse" :statue="statue" />
  <About :statueWithGlass="statueWithGlass" :wavyLines="wavyLines" :boldLines="boldLines" />
</template>

<style scoped></style>
