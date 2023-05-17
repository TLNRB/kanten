<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
/* ---------- Importing Section Components ---------- */
import Home from '../components/HomeView/Home.vue'
import About from '../components/HomeView/About.vue'
/* ---------- Importing Images ---------- */
import mouse from '../images/mouse.svg'
import statue from '../images/statueK.svg'
import statueWithGlass from '../images/statueWIthGlasses.svg'
import wavyLines from '../images/wavyLines.svg'
import boldLines from '../images/boldIndentedLines.svg'
/* ---------- Importing Collabs ---------- */
import allCollabs from '../data/collaborations.js'

const collabs = ref(allCollabs)

const slider = ref(null)
let styleSheet
/*---------- Calculating left value dynamically ----------*/
function calculateLeft() {
  const windowWidth = window.innerWidth
  const divWidth = slider.value.offsetWidth
  const leftValue = -(divWidth - windowWidth)

  // Update left value within keyframe animation
  const keyframes = `@keyframes slide {
        0% {
          left: 0;
        }
        100% {
          left: ${leftValue}px;
        }
      }`

  //Creating one style in head for the first time
  if (!styleSheet) {
    styleSheet = document.createElement('style')
    document.head.appendChild(styleSheet)
  }

  //Updating the style in head on change
  styleSheet.innerHTML = keyframes
}

onMounted(() => {
  calculateLeft()
  window.addEventListener('resize', calculateLeft)
})

onUnmounted(() => {
  window.removeEventListener('resize', calculateLeft)
})
</script>

<template>
  <Home :mouse="mouse" :statue="statue" />
  <About :statueWithGlass="statueWithGlass" :wavyLines="wavyLines" :boldLines="boldLines" />
  <section class="py-[6.5rem] relative overflow-x-hidden xl:py-[8.125rem]">
    <div
      ref="slider"
      class="slider flex items-center justify-start gap-[2rem] top-[4rem] w-fit opacity-50 absolute sm:gap-[4rem] md:gap-[5rem] lg:gap-[6rem] xl:gap-[10rem] xl:top-[5.625rem]"
    >
      <div
        v-for="collab in collabs"
        :key="collab.id"
        class="w-[80px] h-[80px] flex items-center justify-center xl:w-[100px] xl:h-[100px]"
      >
        <img class="h-[50px] xl:h-[70px]" :src="collab.img" :alt="collab.desc" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.slider {
  animation: slide 12.5s linear infinite alternate;
}
</style>
