<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { RouterLink } from 'vue-router'

const { statueK, loading } = defineProps(['statueK', 'loading'])

//Coontent animation
const title = ref(null)
const image = ref(null)

// Simulate a delay to show the preloader
onMounted(() => {
  const tl = gsap.timeline({
    delay: loading ? 3.1 : 0
  })

  tl.from(image.value, {
    y: window.innerWidth > 1060 ? 0 : -50,
    x: window.innerWidth > 1060 ? 50 : 0,
    opacity: 0,
    duration: 0.75
  }).from(
    title.value,

    {
      y: window.innerWidth > 1060 ? 0 : -50,
      x: window.innerWidth > 1060 ? -50 : 0,
      opacity: 0,
      duration: 0.75
    },
    window.innerWidth > 1060 ? 0 : 0.25
  )

  onUnmounted(() => {
    tl.kill()
  })
})
</script>

<template>
  <main
    class="mt-[6.875rem] pt-[2rem] pb-[4rem] px-[1rem] overflow-x-hidden md:mt-[7.875rem] md:px-[4rem] lg:pt-[8rem] lg:pb-[18rem] xl:mt-[8.375rem] xxl:px-[12.5rem]"
  >
    <div class="lg:flex lg:flex-row-reverse lg:items-center lg:justify-center gap-[0rem]">
      <img
        class="h-[20rem] mx-auto xs:h-[25rem] sm:h-[30rem] xl:h-[36rem]"
        ref="image"
        :src="statueK"
        alt="Statue blowing a bubble gum between Kanten's K letter"
      />
      <div
        class="mx-auto mt-[2rem] text-center text-[2.5rem] xs:text-[3rem] sm:text-[4rem] sm:mt-[3rem] xl:text-[5rem] xxxl:text-[6rem]"
        ref="title"
      >
        <div class="flex flex-col items-center w-fit mx-auto sm:flex-row sm:gap-[1rem]">
          <p class="flex flex-col relative uppercase leading-none sm:leading-none">
            <span class="font-bold text-baseColor z-[1]">Experience</span>
            <span class="textStroke">Experience</span>
          </p>
          <p
            class="font-semibold text-[1.25rem] leading-snug xs:text-[1.5rem] sm:text-[2rem] xxl:text-[2.5rem]"
          >
            the Edge
          </p>
        </div>
        <div class="flex flex-col items-center w-fit mx-auto sm:flex-row sm:gap-[1rem]">
          <p
            class="font-semibold text-[1.25rem] leading-snug xs:text-[1.5rem] sm:text-[2rem] xxl:text-[2.5rem]"
          >
            of Culture at
          </p>
          <p
            class="flex flex-col relative w-fit mx-auto leading-snug translate-y-[-6px] uppercase sm:leading-none sm:translate-y-0"
          >
            <span class="font-bold text-baseColor z-[1]">Kanten</span>
            <span class="textStroke">Kanten</span>
          </p>
        </div>
        <p class="text-[1.25rem] font-semibold mb-[1.25rem] sm:text-[2rem] sm:mt-[1.25rem]">
          – where music meets community.
        </p>
        <hr
          class="border-baseColor mx-auto xs:w-[282px] sm:w-[456px] xl:w-[536px] xxl:w-[566px] xxxl:w-[646px]"
        />
        <RouterLink
          to="community"
          class="flex flex-col mt-[2.5rem] w-fit mx-auto text-[1.25rem] relative group sm:mt-[3rem]"
        >
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
            >Join The Community</span
          >
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
            >Join The Community</span
          >
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.textStroke {
  /* color: #f4f4f4; */
  position: absolute;
  top: 2px;
  left: 2px;
  width: max-content;
  font-weight: bold;
  color: #f4f4f4;
}
</style>
