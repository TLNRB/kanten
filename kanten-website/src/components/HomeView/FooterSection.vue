<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/* ---------- Define Props---------- */
const { logoRect, logo } = defineProps(['logoRect', 'logo'])

/* ---------- Resize handling ---------- */
const screenWidth = ref(window.innerWidth)

function handleResize() {
  screenWidth.value = window.innerWidth
}

/*---------- Add resize event listener when component is mounted ---------- */
onMounted(() => {
  window.addEventListener('resize', handleResize)
})
/*---------- Remove resize event listener when component is mounted ---------- */
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <footer
    class="flex flex-col bg-baseColor text-darkText pt-[2rem] pb-[1.25rem] px-[1rem] md:px-[4rem] lg:pt-[4rem] lg:pb-[1.5rem] xxl:px-[12.5rem]"
  >
    <div class="flex justify-between items-center pb-[2.5rem] border-b-[1px] border-darkText">
      <div class="flex justify-center items-center w-[80px] md:w-[100px]">
        <img
          class="w-[50px] sm:w-[80px] md:w-[100px] cursor-pointer"
          :src="screenWidth < 560 ? logo : logoRect"
          alt="Kanten rectangle logo"
        />
      </div>
      <div
        class="flex flex-col items-center w-[80px] md:gap-[.25rem] md:text-[1.125rem] md:w-[100px]"
      >
        <p class="cursor-pointer font-semibold hover:text-lightText ease-in duration-[.15s]">
          Home
        </p>
        <p class="cursor-pointer font-semibold hover:text-lightText ease-in duration-[.15s]">
          Events
        </p>
        <p class="cursor-pointer font-semibold hover:text-lightText ease-in duration-[.15s]">
          Genres
        </p>
        <p class="cursor-pointer font-semibold hover:text-lightText ease-in duration-[.15s]">
          Studio
        </p>
        <p class="cursor-pointer font-semibold hover:text-lightText ease-in duration-[.15s]">
          Community
        </p>
      </div>
      <div
        class="flex flex-col items-center gap-[1.6rem] w-[80px] text-[1.25rem] md:w-[100px] md:gap-[2.25rem] md:text-[1.5rem]"
      >
        <font-awesome-icon
          class="cursor-pointer hover:text-lightText ease-in duration-[.15s]"
          :icon="['fab', 'facebook-f']"
        />
        <font-awesome-icon
          class="cursor-pointer hover:text-lightText ease-in duration-[.15s]"
          :icon="['fab', 'linkedin-in']"
        />
        <font-awesome-icon
          class="cursor-pointer hover:text-lightText ease-in duration-[.15s]"
          :icon="['fab', 'instagram']"
        />
      </div>
    </div>
    <p class="mx-auto pt-[1rem] text-[.875rem] md:pt-[1.25rem] md:text-[1rem]">
      &copy; 2023 Kanten. All Rights Reserved
    </p>
  </footer>
</template>

<style scoped></style>
