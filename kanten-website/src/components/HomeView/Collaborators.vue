<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { collabs, sculpture, loop } = defineProps(['collabs', 'sculpture', 'loop'])

const slider = ref(null)
let styleSheet
/*---------- Calculating left value dynamically ----------*/
function calculateLeft() {
  const windowWidth = window.innerWidth
  const divWidth = slider.value.offsetWidth
  const leftValue = -(divWidth - windowWidth + 10)

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
    class="py-[4rem] pb-[11.5rem] relative overflow-x-hidden overflow-y-visible sm:pt-[7rem] sm:pb-[8rem] md:pt-0 md:pb-[0] bg-baseColor"
  >
    <div class="md:h-[200px] bg-darkBG translate-y-[-5px]"></div>
    <div class="flex justify-center items-center px-[1rem] md:px-[4rem] md:py-[6rem]">
      <img class="absolute md:w-[600px]" :src="loop" alt="Loop graphic element" />
      <div class="flex flex-col items-center justify-center sm:flex-row sm:gap-[2rem]">
        <img
          class="sm:translate-y-[-4rem] md:w-[225px] md:translate-y-[-13rem]"
          :src="sculpture"
          alt="Sculpture"
        />
        <div class="mx-auto text-center text-[1.25rem] font-semibold md:translate-y-[-8rem]">
          <div class="flex items-center gap-[.5rem] w-fit mx-auto">
            <p
              class="text-[1.25rem] font-semibold text-darkText md:text-[2.5rem] md:tracking-tight lg:text-[3rem]"
            >
              Powered by
            </p>
            <p class="flex flex-col relative uppercase leading-none">
              <span
                class="text-[2.5rem] font-bold text-darkText z-[1] md:text-[5rem] md:tracking-tighter"
                >Our</span
              >
              <span
                class="absolute top-[2px] left-[2px] text-[2.5rem] font-bold text-lightText z-[0] md:text-[5rem] md:tracking-tighter"
                >Our</span
              >
            </p>
          </div>
          <p
            class="text-[2.5rem] font-bold text-darkText leading-none uppercase translate-x-[-1.5rem] translate-y-[-.25rem] xs:translate-x-[-2.5rem] md:text-[5rem] md:tracking-tight"
          >
            Amazing
          </p>
          <p
            class="flex flex-col relative leading-none w-fit translate-x-[4.5rem] translate-y-[-.25rem] md:translate-x-[8rem]"
          >
            <span
              class="text-[1.25rem] font-bold text-darkText z-[1] md:text-[2.5rem] md:tracking-tight lg:text-[3rem]"
              >Collaborators</span
            >
            <span
              class="absolute top-[1px] left-[1px] text-[1.25rem] font-bold text-lightText z-[0] md:text-[2.5rem] md:tracking-tight lg:text-[3rem]"
              >Collaborators</span
            >
          </p>
        </div>
      </div>
    </div>
    <div
      ref="slider"
      class="slider flex items-center justify-start gap-[3rem] bottom-[3rem] w-fit absolute xs:gap-[4rem] md:bottom-[6rem] md:gap-[6rem] lg:gap-[8rem] xl:gap-[10rem]"
    >
      <div
        v-for="collab in collabs"
        :key="collab.id"
        class="w-[80px] h-[80px] flex items-center justify-center md:w-[100px] md:h-[100px] xxl:w-[120px] xxl:h-[120px]"
      >
        <img
          class="h-[60px] object-contain md:h-[80px] xxl:h-[100px]"
          :src="collab.img"
          :alt="collab.desc"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.slider {
  animation: slide 12.5s linear infinite alternate;
}
</style>
