<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { collabs, sculpture, loop } = defineProps(['collabs', 'sculpture', 'loop'])

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
  <section
    class="pt-[4rem] pb-[6rem] relative overflow-x-hidden sm:pt-[8rem] xl:py-[8.125rem] bg-baseColor"
  >
    <div class="flex justify-center items-center px-[1rem] md:px-[4rem] md:hidden">
      <img class="absolute" :src="loop" alt="Loop graphic element" />
      <div class="flex flex-col items-center justify-center sm:flex-row sm:gap-[2rem]">
        <img class="sm:translate-y-[-4rem] md:w-[164px]" :src="sculpture" alt="Sculpture" />
        <div class="mx-auto text-center text-[1.25rem] font-semibold md:text-[1.5rem]">
          <div class="flex items-center gap-[.5rem] w-fit mx-auto">
            <p class="text-[1.25rem] font-semibold text-darkText">Powered by</p>
            <p class="flex flex-col relative uppercase leading-none">
              <span class="text-[2.5rem] font-bold text-darkText z-[1]">Our</span>
              <span
                class="absolute top-[2px] left-[2px] text-[2.5rem] font-bold text-lightText z-[0]"
                >Our</span
              >
            </p>
          </div>
          <p
            class="text-[2.5rem] font-bold text-darkText leading-none uppercase translate-x-[-1.5rem] translate-y-[-.25rem] xs:translate-x-[-2.5rem]"
          >
            Amazing
          </p>
          <p
            class="flex flex-col relative leading-none w-fit translate-x-[4.5rem] translate-y-[-.25rem]"
          >
            <span class="text-[1.25rem] font-bold text-darkText z-[1]">Collaborators</span>
            <span
              class="absolute top-[1px] left-[1px] text-[1.25rem] font-bold text-lightText z-[0]"
              >Collaborators</span
            >
          </p>
        </div>
      </div>
    </div>
    <!-- <div
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
    </div> -->
  </section>
</template>

<style scoped>
.slider {
  animation: slide 12.5s linear infinite alternate;
}
</style>
