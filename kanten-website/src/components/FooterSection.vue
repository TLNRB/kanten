<script setup>
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import logoRectWhite from '../images/logoRect.svg'
import logoRectBlack from '../images/logoRectBlack.svg'
import logoBlack from '../images/logoSquareBlack.svg'
import logoWhite from '../images/logoSquare.svg'

/* ---------- Setting the footer colors based on the page ---------- */
const footerData = reactive({
  backgroundColor: '', // Holds the background color of the footer
  textColor: '', // Holds the text color of the footer
  display: '', // Holds the display value of the footer
  image: '' // Holds the logo route of the footer
})

const route = useRoute()

const updateFooter = () => {
  // Set footer based on the route name
  switch (route.name) {
    case 'studio':
      footerData.backgroundColor = '#181818'
      footerData.textColor = '#F4F4F4'
      footerData.display = 'flex'
      footerData.image = screenWidth.value < 560 ? logoWhite : logoRectWhite
      break
    case 'membership':
      footerData.display = 'none'
      break
    case 'volunteer':
      footerData.display = 'none'
      break
    case 'login':
      footerData.display = 'none'
      break
    case 'admin':
      footerData.display = 'none'
      break
    case 'notfound':
      footerData.display = 'none'
      break
    default:
      footerData.backgroundColor = '#1ECECE'
      footerData.textColor = '#242424'
      footerData.display = 'flex'
      footerData.image = screenWidth.value < 560 ? logoBlack : logoRectBlack
      break
  }
}

watch(route, () => {
  updateFooter()
})

/* ---------- Routing---------- */
const router = useRouter()
const navigateTo = (route) => {
  router.push(route)
}

/* ---------- Define Props---------- */
const { sections } = defineProps(['sections'])

/* ---------- Resize handling ---------- */
const screenWidth = ref(window.innerWidth)

function handleResize() {
  screenWidth.value = window.innerWidth
  /* Updating the footer logo based on the screen size */
  updateFooter()
}

/*---------- Add resize event listener when component is mounted ---------- */
onMounted(() => {
  window.addEventListener('resize', handleResize)
  updateFooter()
})

/*---------- Remove resize event listener when component is mounted ---------- */
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <footer
    :style="{
      backgroundColor: footerData.backgroundColor,
      color: footerData.textColor,
      display: footerData.display
    }"
    class="flex flex-col pt-[2rem] pb-[1.25rem] px-[1rem] md:px-[4rem] lg:pt-[4rem] lg:pb-[1.5rem] xxl:px-[12.5rem]"
  >
    <div class="flex justify-between items-center pb-[2.5rem] border-b-[1px] border-darkText">
      <div class="flex justify-center items-center w-[80px] md:w-[100px]">
        <img
          class="w-[50px] sm:w-[80px] md:w-[100px] cursor-pointer"
          :src="footerData.image"
          @click="router.push('/')"
          alt="Kanten logo"
        />
      </div>
      <div
        class="flex flex-col items-center w-[80px] md:gap-[.25rem] md:text-[1.125rem] md:w-[100px]"
      >
        <p
          class="cursor-pointer font-semibold hover:text-lightText ease-in duration-[.15s]"
          v-for="section in sections"
          :key="section.id"
          @click="navigateTo(section.route)"
        >
          {{ section.title }}
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
