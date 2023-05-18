<script setup>
import { ref, onMounted } from 'vue'

//Defining image props
const { statue, wavyLinesBlue, boldLinesWhite } = defineProps([
  'statue',
  'wavyLinesBlue',
  'boldLinesWhite'
])

let initialWord = ref('rhythm')
let i = 1
let words = ['rhythm', 'passion', 'connection']

//Rotating words
const wordRotate = () => {
  if (i % 3 != 2) {
    initialWord.value = words[i]
    i++
  } else {
    initialWord.value = words[i]
    i = 0
  }
}

function startInterval() {
  setInterval(() => {
    wordRotate()
  }, 1000) // Refresh every 3 seconds
}

// Start word rotation
onMounted(() => {
  startInterval()
})
</script>

<template>
  <section
    class="bg-[url('../images/squareGrid.svg')] py-[4rem] px-[1rem] md:px-[4rem] lg:py-[6.25rem] xl:px-[12.5rem]"
  >
    <div
      class="mb-[4rem] flex items-center justify-center gap-[.5rem] md:gap-[2rem] xl:gap-[2.5rem]"
    >
      <div class="flex flex-col items-center gap-[1rem]">
        <h2
          class="flex flex-col items-center leading-none text-[2.5rem] font-bold uppercase sm:text-[3rem] md:text-[4rem]"
        >
          Who
          <span class="relative font-bold"
            >Are<span class="absolute top-[2px] left-[2px] font-bold text-baseColor z-[-1]"
              >Are</span
            ></span
          >
          We?
        </h2>
        <img :src="wavyLinesBlue" alt="Wavy lines" />
      </div>
      <img
        class="h-[200px] sm:h-[260px] md:h-[360px]"
        :src="statue"
        alt="Illustrated statue with a glass"
      />
    </div>
    <div class="flex items-center justify-center gap-[1.5rem] mb-[2rem]">
      <p class="text-[1.5rem] font-[500] xs:text-[2rem] md:text-[2.5rem]">
        We are
        <span class="font-[500] text-baseColor">{{ initialWord }}</span>
      </p>
      <img
        class="hidden translate-y-[2px] sm:block sm:w-[142px]"
        :src="boldLinesWhite"
        alt="Bold indented lines"
      />
    </div>
    <div
      class="border-r-[1px] border-baseColor pb-[.375rem] md:border-r-0 md:border-l-[1px] xl:mx-[4rem]"
    >
      <h4 class="pr-[1rem] text-[1.25rem] font-semibold md:px-[1rem] md:text-[1.5rem]">
        Kanten is more than just a nightclub.
      </h4>
      <hr class="my-[1rem] w-[80%] ml-auto border-baseColor md:ml-0 md:mr-0" />
      <p
        class="pr-[1rem] text-[1.25rem] leading-snug md:px-[1rem] md:w-[80%] md:text-[1.5rem] lg:w-[70%] xl:w-[60%]"
      >
        It’s a community that brings people together through music. We strive to create a safe and
        inclusive space where everyone is welcome to express themselves and connect with others.
      </p>
      <div
        class="mt-[2.5rem] flex flex-wrap items-center justify-center gap-[1.25rem] px-[1rem] md:gap-[2rem] md:mt-[3rem]"
      >
        <button class="flex flex-col text-center text-[1.25rem] relative group">
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
            >Volunteer now</span
          >
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
            >Volunteer now</span
          >
        </button>
        <button class="flex flex-col text-center text-[1.25rem] relative group">
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
            >Be a member</span
          >
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
            >Be a member</span
          >
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
