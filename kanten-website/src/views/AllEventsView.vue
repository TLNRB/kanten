<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
/* ---------- Importing Section Components ---------- */
import Event from '../components/EventView/Event.vue'
import singleevent from '../data/singleevent'
/* ---------- Importing Images ---------- */
const { state } = singleevent()

let numLines = ref(0)

const backgroundLines = () => {
  /* const lines = [] */
  console.log(numLines.value)
  if (state.value.length % 2 == 0) {
    numLines.value = state.value.length / 2
  } else {
    numLines.value = Math.floor(state.value.length / 2)
    numLines.value++
  }

  const screenWidth = window.innerWidth

  // Calculate the number of lines based on screen width and number of cards
  if (screenWidth < 1082) {
    // Small screens
    return numLines.value
  } else {
    // Large screens
    if (state.value.length % 6 == 0) {
      numLines.value = state.value.length / 6
      return numLines.value
    } else {
      numLines.value = Math.floor(state.value.length / 6)
      numLines.value++
      return numLines.value
    }
  }
}

// Update the number of lines on window resize
const updateBackgroundLines = () => {
  backgroundLines() // Trigger re-computation of background lines
}

onMounted(() => {
  backgroundLines()
  window.addEventListener('resize', updateBackgroundLines)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateBackgroundLines)
})
</script>

<template>
  <div class="relative">
    <Event />

    <section class="pb-[4rem] px-[1rem] md:px-[4rem] lg:pb-[6rem] xxl:px-[12.5rem]">
      <div
        class="flex flex-col justify-center items-center flex-wrap gap-[2.5rem] sm:gap-[4rem] sm:flex-row"
      >
        <div
          v-for="item in state"
          :key="item.id"
          class="h-[416px] w-[248px] flex flex-col items-center p-[.5rem] bg-darkBG border-solid border-[1px] z-[1] border-baseColor xs:h-[434px] xs:w-[320px] sm:h-[580px] sm:w-[445px]"
        >
          <img class="object-cover h-[260px] w-[100%] sm:h-[348px]" :src="item.image" />
          <div class="ml-[.25rem] flex flex-col justify-center">
            <h1
              class="font-bold leading-none text-[1.25rem] z-[1] relative top-[-.5rem] drop-shadow-md xs:text-[1.75rem] xs:top-[-.75rem] sm:text-[2.25rem] sm:top-[-1rem] sm:drop-shadow-xl"
            >
              {{ item.title }}
            </h1>
            <h3
              class="relative font-[500] text-[1.25rem] leading-tight mt-[.5rem] xs:text-[1.5rem] xs:mt-[.25rem] sm:text-[2rem]"
            >
              {{ item.date }}
            </h3>
            <RouterLink
              :to="{ name: 'singleeventview', params: { id: item.id } }"
              class="flex flex-col w-fit mt-[1rem] mr-auto text-[1rem] relative group sm:mt-[1.5rem] sm:mb-[1.25rem]"
            >
              <span
                class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] sm:py-[.5rem] sm:px-[1.25rem] sm:text-[1.5rem]"
                >Read More</span
              >
              <span
                class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] sm:py-[.5rem] sm:px-[1.25rem] sm:text-[1.5rem]"
                >Read More</span
              >
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <section
      class="absolute top-[587px] bottom-[272px] left-0 right-0 flex flex-col items-center gap-[456px] z-[-1] xs:top-[553px] xs:bottom-[282px] xs:gap-[474px] sm:top-[656px] sm:bottom-[354px] sm:gap-[644px] lg:top-[665px] lg:bottom-[386px]"
    >
      <div
        v-for="(line, index) in numLines"
        :key="index"
        class="bg-[url('../images/squareGrid.svg')] w-[100%] h-[456px] bg-baseColor xs:h-[474px] sm:h-[644px]"
      ></div>
    </section>
  </div>
</template>

<style scoped></style>
