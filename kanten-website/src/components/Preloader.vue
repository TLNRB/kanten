<script setup>
import { ref, onMounted } from 'vue'
//Import animation
import logoAnimation from '../images/logoAnimation.mp4'
import gsap from 'gsap'

const preLoader = ref(null)

onMounted(() => {
  gsap.to(preLoader.value, {
    y: '-100%',
    duration: 0.75,
    ease: 'Power1.easeIn',
    delay: 2.25
  })
})
</script>

<template>
  <main
    class="bg-darkBG min-h-[100vh] overflow-x-hidden flex justify-center items-center py-[2rem]"
    ref="preLoader"
  >
    <video
      class="xs:w-[350px] sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px]"
      :src="logoAnimation"
      autoplay
      playsinline
      webkit-playsinline
      muted
      type="video/mp4"
    ></video>
  </main>
</template>

<style scoped></style>
