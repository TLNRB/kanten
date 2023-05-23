<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
/* ---------- Importing Images ---------- */
import sculpture from '../images/sculpture.svg'
import wavyLinesLong from '../images/wavyLinesThreeLong.svg'
import wavyLines from '../images/wavyLinesThree.svg'

/* ---------- Importing Gallery Images ---------- */
import allGallery from '../data/studioGalleryDB.js'

const gallery = ref(allGallery)

/* ---------- Assigning a column number between (1-3) to each image ---------- */
/* const assignNumber = () => {
  for (let i = 0; i < gallery.length; i++) {
    gallery.value[i].cols = (i % 3) + 1
    console.log(gallery.value)
  }
} */

/* ---------- Filtering images based on column value ---------- */
const filteredImages = (colNum) => {
  return gallery.value.filter((image) => image.cols == colNum)
}

const screenWidth = ref(window.innerWidth)

/* ---------- Resize handling ---------- */
function handleResize() {
  screenWidth.value = window.innerWidth
}

/*---------- Add resize event listener when component is mounted ---------- */
onMounted(() => {
  window.addEventListener('resize', handleResize)
  /* assignNumber() */
})
/*---------- Remove resize event listener when component is mounted ---------- */
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <section
    class="bg-[url('../images/gridGray.svg')] overflow-x-hidden flex flex-col mt-[6.875rem] pt-[1rem] sm:pt-[2rem] md:mt-[7.875rem] lg:pt-[4rem] xl:mt-[8.375rem]"
  >
    <div
      class="mb-[-2.75rem] flex items-center justify-center gap-[1rem] px-[1rem] z-[2] md:px-[4rem] md:mb-[-.75rem] md:translate-x-[-8.15rem] lg:translate-x-[-11.5rem] lg:mb-[-1rem] xl:translate-x-[-18.25rem] xxl:px-[12.5rem] xxl:translate-x-[-23.75rem]"
    >
      <div
        class="flex flex-col items-center justify-center gap-[1rem] sm:w-[340px] sm:mb-[-2rem] md:mb-0 lg:w-[410px]"
      >
        <div class="flex flex-col w-[100%]">
          <p
            class="flex flex-col leading-none text-[2.5rem] uppercase relative mr-auto sm:text-[4rem] lg:text-[5rem]"
          >
            <span class="font-bold z-[1]">Studio</span>
            <span class="font-bold text-baseColor absolute top-[2px] left-[2px] z-[0]">Studio</span>
          </p>
          <p
            class="ml-auto font-semibold text-baseColor text-[1.5rem] leading-none sm:text-[2.5rem] lg:text-[3rem]"
          >
            at Kanten
          </p>
        </div>
        <img :src="screenWidth < 560 ? wavyLines : wavyLinesLong" alt="Wavy lines" />
      </div>
      <div>
        <img class="h-[12rem] sm:h-[16rem] md:hidden" :src="sculpture" alt="Sculpture" />
      </div>
    </div>
    <div
      class="bg-baseColor text-darkText px-[1rem] pt-[2.5rem] pb-[1.5rem] md:px-[4rem] md:pt-[1.5rem] md:flex md:justify-center lg:pb-[3rem] xxl:px-[12.5rem]"
    >
      <div
        class="md:translate-x-[-4.5rem] lg:translate-x-[-6rem] xl:translate-x-[-6.5rem] xxl:translate-x-[-7.25rem]"
      >
        <div
          class="h-[1rem] mr-[1rem] border-r-[1px] border-darkText sm:w-[470px] sm:mx-auto md:ml-0 lg:w-[600px] xl:w-[800px] xxl:w-[950px]"
        ></div>
        <hr
          class="border-darkText sm:w-[470px] sm:mx-auto md:ml-0 lg:w-[600px] xl:w-[800px] xxl:w-[950px]"
        />
        <div
          class="mr-[1rem] pt-[1rem] pr-[1rem] text-[1.125rem] leading-snug border-r-[1px] border-darkText sm:font-[500] sm:w-[470px] sm:mx-auto md:relative md:ml-0 lg:w-[600px] lg:text-[1.5rem] lg:leading-tight xl:w-[800px] xxl:w-[950px]"
        >
          <p class="">
            For several years, Esbjerg has lacked regular rehearsal rooms with the possibility of
            recording, and here Kanten will provide the opportunity to use a sound studio and a
            high-quality rehearsal room. By virtue of Kanten's vision to help the musical growth
            layer to create music, a sound engineer will be offered who, according to agreement, can
            teach sound studio technique - as needed.
            <span class="hidden xs:block"
              >With Kraftværket's location in Østerbyen, we want to raise interest in music,
              especially among local young people. The power plant can be used by anyone who plays
              or wants to play music.</span
            >
          </p>
          <img
            class="hidden h-[12rem] sm:h-[16rem] md:block md:absolute md:right-[-10rem] md:bottom-[-1rem] lg:h-[26rem] lg:right-[-14rem] xxl:right-[-16rem]"
            :src="sculpture"
            alt="Sculpture"
          />
        </div>
      </div>
    </div>
    <hr class="my-[2rem] border-[1px] border-baseColor" />
    <div class="py-[1.5rem] px-[1rem] md:px-[4rem] xxl:px-[12.5rem]">
      <div class="flex flex-col w-fit ml-auto pb-[1.5rem] sm:w-[340px] md:pb-[2rem] lg:w-[410px]">
        <p
          class="flex flex-col leading-none text-[2.5rem] uppercase relative translate-x-[-3rem] sm:translate-x-[2.5rem] sm:text-[4rem] lg:text-[5rem]"
        >
          <span class="font-bold z-[1]">Photo</span>
          <span class="font-bold text-baseColor absolute top-[2px] left-[2px] z-[0]">Photo</span>
        </p>
        <p
          class="ml-auto font-semibold text-baseColor text-[1.5rem] leading-none sm:text-[2.5rem] lg:text-[3rem]"
        >
          of Studio
        </p>
      </div>
      <div class="flex flex-col justify-between md:flex-row">
        <div class="flex flex-col w-[100%] md:w-[32.5%]">
          <img
            v-for="image in filteredImages(1)"
            :key="image.id"
            class="w-[100%] pb-[.625rem] sm:pb-[1rem]"
            :src="image.src"
            :alt="image.desc"
          />
        </div>
        <div class="flex flex-col w-[100%] md:w-[32.5%]">
          <img
            v-for="image in filteredImages(2)"
            :key="image.id"
            class="w-[100%] pb-[.625rem] sm:pb-[1rem]"
            :src="image.src"
            :alt="image.desc"
          />
        </div>
        <div class="flex flex-col w-[100%] md:w-[32.5%]">
          <img
            v-for="image in filteredImages(3)"
            :key="image.id"
            class="w-[100%] pb-[.625rem] sm:pb-[1rem]"
            :src="image.src"
            :alt="image.desc"
          />
        </div>
        <!-- <div class="flex flex-col w-[100%] md:w-[32.5%]">
          <img class="w-[100%] pb-[.625rem] sm:pb-[1rem]" :src="studio" alt="" />
          <img class="w-[100%] pb-[.625rem] sm:pb-[1rem]" :src="westeros" alt="" />
          <img class="w-[100%] pb-[.625rem] sm:pb-[1rem]" :src="twd" alt="" />
        </div>
        <div class="flex flex-col w-[100%] md:w-[32.5%]">
          <img class="w-[100%] pb-[.625rem] sm:pb-[1rem]" :src="westeros" alt="" />
          <img class="w-[100%] pb-[.625rem] sm:pb-[1rem]" :src="studio" alt="" />
          <img class="w-[100%] pb-[.625rem] sm:pb-[1rem]" :src="studio" alt="" />
        </div>
        <div class="flex flex-col w-[100%] md:w-[32.5%]">
          <img class="w-[100%] pb-[.625rem] sm:pb-[1rem]" :src="twd" alt="" />
          <img class="w-[100%] pb-[.625rem] sm:pb-[1rem]" :src="studio" alt="" />
          <img class="w-[100%] pb-[.625rem] sm:pb-[1rem]" :src="westeros" alt="" />
        </div> -->
      </div>
    </div>
    <hr class="my-[2rem] border-[1px] border-baseColor" />
  </section>
</template>

<style scoped></style>