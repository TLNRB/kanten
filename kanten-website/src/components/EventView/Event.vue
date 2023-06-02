<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const { loading } = defineProps(['loading'])

//Coontent animation
const title1 = ref(null)
const title2 = ref(null)
const text = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    delay: loading ? 3.1 : 0
  })

  tl.from(title1.value, {
    left: window.innerWidth > 768 ? 0 : 0,
    top: window.innerWidth > 768 ? 0 : 0,
    duration: 0.3,
    ease: 'Power1'.easeInOut
  })
    .from(
      title2.value,

      {
        left: window.innerWidth > 768 ? 0 : 0,
        top: window.innerWidth > 768 ? 0 : 0,
        duration: 0.3,
        ease: 'Power1'.easeInOut
      },
      0
    )
    .from(
      text.value,

      {
        y: window.innerWidth > 1060 ? -40 : -20,
        opacity: 0,
        duration: 0.6
      },
      0
    )

  onUnmounted(() => {
    tl.kill()
  })
})
</script>

<template>
  <main
    class="mt-[6.875rem] pt-[4rem] pb-[2rem] px-[1rem] overflow-x-hidden lg:mt-[7.875rem] md:px-[4rem] lg:pt-[6rem] lg:pb-[4rem] xl:mt-[8.375rem] xxl:px-[12.5rem]"
  >
    <div
      class="mx-auto text-center flex flex-col text-[2.5rem] xs:text-[3rem] sm:text-[4rem] xl:text-[5rem] xxxl:text-[6rem]"
    >
      <div
        class="flex flex-col items-center w-fit mx-auto xs:flex-row xs:gap-[.75rem] sm:flex-row sm:gap-[1rem]"
      >
        <p
          class="font-semibold text-[1.25rem] translate-y-[-.25rem] leading-none xs:text-[1.5rem] sm:text-[2rem] xxl:text-[2.5rem]"
        >
          The
        </p>

        <p class="flex flex-col relative uppercase leading-none sm:leading-none">
          <span class="font-bold text-lightText z-[1]">Upcoming</span>
          <span
            class="absolute top-[2px] left-[2px] font-bold text-baseColor w-max md:left-[3px] md:top-[3px]"
            ref="title1"
            >Upcoming</span
          >
        </p>
      </div>

      <div
        class="flex flex-col items-center w-fit mx-auto xs:flex-row xs:gap-[.75rem] sm:flex-row sm:gap-[1rem]"
      >
        <p
          class="flex flex-col relative w-fit mx-auto leading-snug translate-y-[-12px] uppercase sm:leading-none sm:translate-y-0"
        >
          <span class="font-bold text-lightText z-[1]">Events</span>
          <span
            class="absolute top-[2px] left-[2px] font-bold text-baseColor w-max md:left-[3px] md:top-[3px]"
            ref="title2"
            >Events</span
          >
        </p>

        <p
          class="font-semibold text-[1.25rem] translate-y-[-1rem] leading-none xs:text-[1.5rem] xs:translate-y-[-.75rem] sm:text-[2rem] sm:translate-y-[-.25rem] xxl:text-[2.5rem]"
        >
          at Kanten
        </p>
      </div>
    </div>
    <div
      class="pt-[1rem] xs:text-[1rem] sm:text-[1.25rem] sm:pt-[2.5rem] sm:pb-[1rem] leading-snug lg:pt-[4rem] xl:text-[1.5rem] xxxl:max-w-[1463px] xxxl:mx-auto"
      ref="text"
    >
      Mark your calendars and prepare for unforgettable nights filled with non-stop music, wild
      energy, and incredible vibes. Don’t miss out on the hottest events in town – join us at
      Kanten!
    </div>
  </main>
</template>

<style scoped></style>
