<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import Preloader from '../components/Preloader.vue'
import { RouterLink } from 'vue-router'

/* ---------- Importing Images ---------- */
import handLeft from '../images/handLeft.svg'
import handRight from '../images/handRight.svg'
import lock from '../images/lock.svg'

//Preloader
const loading = ref(true)
document.body.style.overflow = 'hidden'

//Coontent animation
const title = ref(null)
const word = ref(null)
const leftHand = ref(null)
const rightHand = ref(null)

// Simulate a delay to show the preloader
onMounted(() => {
  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = 'visible'
  }, 3250)
  const tl = gsap.timeline({
    delay: loading ? 3.2 : 0
  })

  tl.from(title.value, {
    color: '#f4f4f4',
    duration: 0.4,
    ease: 'Power1'.easeInOut
  })
    .from(
      word.value,

      {
        color: '#f4f4f4',
        duration: 0.35,
        ease: 'Power1'.easeInOut
      },
      0.3
    )
    .from(
      leftHand.value,

      {
        x: window.innerWidth > 1060 ? -50 : -25,
        opacity: 0,
        duration: 0.75
      },
      0.5
    )
    .from(
      rightHand.value,

      {
        x: window.innerWidth > 1060 ? 50 : 25,
        opacity: 0,
        duration: 0.75
      },
      0.5
    )

  onUnmounted(() => {
    tl.kill()
  })
})
</script>

<template>
  <Preloader class="absolute top-0 left-0 right-0 z-[11]" :class="{ display: !loading }" />
  <section
    class="overflow-x-hidden flex flex-col mt-[6.875rem] py-[3rem] sm:py-[4rem] md:mt-[7.875rem] lg:pb-[5rem] xl:mt-[8.375rem]"
  >
    <!-- Title -->
    <div class="mb-[3rem] px-[1rem] sm:mb-[4rem] md:px-[4rem] xxl:px-[12.5rem]">
      <h1 class="flex flex-col items-center mb-[2rem] md:mb-[6rem]">
        <p class="text-[2.5rem] font-bold uppercase leading-none sm:text-[4rem] lg:text-[5rem]">
          Join the
        </p>
        <p
          class="flex flex-col leading-none text-[2.5rem] uppercase relative sm:text-[4rem] lg:text-[5rem]"
        >
          <span class="font-bold text-baseColor z-[1]" ref="title">Community</span>
          <span class="font-bold absolute top-[2px] left-[2px] z-[0]">Community</span>
        </p>
      </h1>
      <p
        class="font-[500] leading-snug text-center sm:text-[1.25rem] md:w-[650px] md:mx-auto lg:w-[450px] lg:text-[1.5rem] lg:leading-tight xxxl:w-[490px]"
      >
        Kanten is made and driven by
        <span class="font-[500] text-baseColor" ref="word">you</span> just as much as by us! Join us
        on this awesome journey and make this city a better place!
      </p>
    </div>
    <!-- Call to action -->
    <div
      class="bg-baseColor text-darkText relative py-[1.5rem] px-[1rem] sm:py-[2rem] md:px-[4rem] md:py-[3rem] lg:pt-[3rem] xxl:px-[12.5rem]"
    >
      <p
        class="font-[500] text-center mb-[1.5rem] leading-snug sm:text-[1.25rem] md:w-[650px] md:mx-auto lg:w-[450px] lg:text-[1.5rem] lg:leading-tight xxxl:w-[490px]"
      >
        If you would like to become a part of this never ending journey, join our independent and
        cohesive team today!
      </p>
      <div
        class="flex justify-center items-center lg:absolute lg:justify-between lg:px-[4rem] lg:w-[100%] lg:top-[-5rem] lg:left-[0] lg:right-[0] xl:top-[-5.5rem] xxl:px-[12.5rem] xxxl:top-[-6.5rem]"
      >
        <img
          class="w-[120px] sm:w-[200px] md:w-[250px] lg:w-[275px] xl:w-[300px] xxxl:w-[350px]"
          ref="leftHand"
          :src="handLeft"
          alt="Hand pointing ro the right"
        />
        <img
          class="w-[120px] sm:w-[200px] md:w-[250px] lg:w-[275px] xl:w-[300px] xxxl:w-[350px]"
          ref="rightHand"
          :src="handRight"
          alt="Hand pointing to the left"
        />
      </div>
      <div
        class="mt-[1.5rem] flex flex-wrap items-center justify-center gap-[1.25rem] md:gap-[2rem] lg:mt-[4rem]"
      >
        <RouterLink to="volunteer" class="flex flex-col text-center text-[1.25rem] relative group">
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-baseColor border-darkBG z-[1] group-hover:text-darkBG group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
            >Volunteer now</span
          >
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
            >Volunteer now</span
          >
        </RouterLink>
        <RouterLink to="membership" class="flex flex-col text-center text-[1.25rem] relative group">
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-baseColor border-darkBG z-[1] group-hover:text-darkBG group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
            >Be a member</span
          >
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
            >Be a member</span
          >
        </RouterLink>
      </div>
    </div>
    <!-- Privacy text -->
    <div
      class="flex pt-[3rem] px-[1rem] sm:pt-[4rem] md:px-[4rem] md:pt-[4rem] md:gap-[2.5rem] lg:pt-[5rem] xxl:px-[12.5rem] leading-snug"
    >
      <img class="hidden md:block" :src="lock" alt="Lock" />
      <div class="flex justify-center flex-col gap-[1.5rem] sm:text-[1.25rem] lg:text-[1.5rem]">
        <h4 class="font-semibold">Your privacy is important to us!</h4>
        <p>
          By signing up, we will ask for a few important information about you, such as your name,
          phone number etc., but do not worry, we will always respect and keep your private data
          safe and sound!
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.display {
  display: none;
}
</style>
