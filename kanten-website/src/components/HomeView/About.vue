<script setup>
import { ref, onMounted } from 'vue'

//Defining image props
const { statue, wavyLines, boldLines } = defineProps(['statue', 'wavyLines', 'boldLines'])

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
  <section class="bg-colorBG">
    <div
      class="bg-[url('../images/squareGrid.svg')] text-darkText py-[4rem] px-[1rem] md:px-[4rem] lg:flex lg:items-center lg:gap-[2rem] lg:py-[2rem] lg:justify-center xxl:px-[12.5rem] xxl:gap-[9rem]"
    >
      <div
        class="mb-[3rem] flex items-center justify-center gap-[.5rem] md:gap-[2rem] lg:flex-col lg:gap-0 lg:my-auto xl:gap-[1rem]"
      >
        <div class="flex items-end justify-center lg:translate-y-[-8rem]">
          <div class="flex flex-col items-center gap-[1rem] lg:lg:translate-y-[-1rem]">
            <h2
              class="flex flex-col items-center leading-none text-[2.5rem] text-darkText font-bold uppercase sm:text-[3rem] md:text-[4rem]"
            >
              Who
              <span class="relative font-bold z-0"
                >Are<span class="absolute top-[2px] left-[2px] font-bold text-lightText z-[-1]"
                  >Are</span
                ></span
              >
              We?
            </h2>
            <img
              class="xs:w-[180px] sm:w-[260px] md:w-[280px] lg:hidden"
              :src="wavyLines"
              alt="Wavy lines"
            />
          </div>
          <img
            class="h-[200px] sm:h-[260px] md:h-[360px] lg:h-[400px] xxxl:h-[435px]"
            :src="statue"
            alt="Illustrated statue with a glass"
          />
        </div>
        <img
          class="hidden lg:block lg:w-[405px] lg:translate-y-[-4rem]"
          :src="wavyLines"
          alt="Wavy lines"
        />
      </div>
      <div>
        <div
          class="flex items-center justify-center gap-[1.5rem] mb-[2rem] md:mb-[2.5rem] lg:justify-start lg:ml-[1rem] lg:mb-[2rem]"
        >
          <p
            class="text-[1.5rem] font-[500] xs:text-[2rem] md:text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem]"
          >
            We are
            <span class="font-[500] text-lightText">{{ initialWord }}</span>
          </p>
          <img
            class="hidden translate-y-[2px] sm:block sm:w-[142px] md:w-[220px] lg:hidden xl:block"
            :src="boldLines"
            alt="Bold indented lines"
          />
        </div>
        <div
          class="border-r-[1px] border-darkBG pb-[.375rem] sm:mx-auto sm:w-[440px] md:w-[600px] lg:w-[450px] xl:w-[600px]"
        >
          <h4
            class="pr-[1rem] text-[1.25rem] font-bold md:px-[1rem] md:text-[2rem] md:pr-[2rem] lg:text-[1.5rem] xl:text-[2rem]"
          >
            Kanten is more than just a nightclub.
          </h4>
          <hr class="my-[1rem] w-[80%] ml-auto border-darkBG" />
          <p
            class="pr-[1rem] text-[1.25rem] leading-snug md:px-[1rem] md:text-[1.75rem] md:pr-[2rem] lg:text-[1.5rem] xl:text-[1.75rem]"
          >
            It’s a community that brings people together through music. We strive to create a safe
            and inclusive space where everyone is welcome to express themselves and connect with
            others.
          </p>
          <div
            class="mt-[2.5rem] flex flex-wrap items-center justify-center gap-[1.25rem] px-[1rem] md:gap-[2rem] md:mt-[3rem] lg:mt-[2.5rem] xl:mt-[3rem]"
          >
            <button class="flex flex-col text-center text-[1.25rem] relative group">
              <span
                class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-baseColor border-darkBG z-[1] group-hover:text-darkBG group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
                >Volunteer now</span
              >
              <span
                class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
                >Volunteer now</span
              >
            </button>
            <button class="flex flex-col text-center text-[1.25rem] relative group">
              <span
                class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-baseColor border-darkBG z-[1] group-hover:text-darkBG group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
                >Be a member</span
              >
              <span
                class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
                >Be a member</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.class {
  background-color: #1ecece;
}
</style>
