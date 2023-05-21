<script setup>
/* ---------- Importing Images ---------- */
import sculpture from '../images/sculpture.svg'
import grid from '../images/gridGray.svg'
import wavyLines from '../images/wavyLinesThree.svg'
</script>

<template>
  <section
    class="bg-[url('../images/gridGray.svg')] flex flex-col mt-[6.875rem] pt-[1rem] md:px-[4rem] md:mt-[7.875rem] lg:py-[6rem] xl:mt-[8.375rem] xxl:px-[12.5rem]"
  >
    <div class="mb-[-2.75rem] flex items-center justify-center gap-[1rem] px-[1rem] z-[2]">
      <div class="flex flex-col items-center justify-center gap-[1rem]">
        <div class="flex flex-col w-[100%]">
          <p class="flex flex-col leading-none text-[2.5rem] uppercase relative mr-auto">
            <span class="font-bold z-[1]">Studio</span>
            <span class="font-bold text-baseColor absolute top-[2px] left-[2px] z-[0]">Studio</span>
          </p>
          <p class="ml-auto font-semibold text-baseColor text-[1.5rem] leading-none">at Kanten</p>
        </div>
        <img :src="wavyLines" alt="Wavy lines" />
      </div>
      <div>
        <img class="h-[12rem]" :src="sculpture" alt="Sculpture" />
      </div>
    </div>
    <div class="bg-baseColor text-darkText px-[1rem] pt-[2.5rem] pb-[1.5rem]">
      <div class="h-[1rem] mr-[1rem] border-r-[1px] border-darkText"></div>
      <hr class="border-darkText" />
      <p
        class="mr-[1rem] pt-[1rem] pr-[1rem] text-[1.125rem] leading-snug border-r-[1px] border-darkText"
      >
        With Kraftværket's location in Østerbyen, we want to raise interest in music, especially
        among local young people. We will, for example, do with teaching at eye level and with
        knowledge of young people in the area. The power plant can be used by anyone who plays or
        wants to play music.
      </p>
    </div>
    <hr class="my-[2rem] border-[1px] border-baseColor" />
    <div class="py-[1.5rem] px-[1rem]">
      <div class="flex flex-col w-fit ml-auto">
        <p class="flex flex-col leading-none text-[2.5rem] uppercase relative translate-x-[-2rem]">
          <span class="font-bold z-[1]">Photo</span>
          <span class="font-bold text-baseColor absolute top-[2px] left-[2px] z-[0]">Photo</span>
        </p>
        <p class="ml-auto font-semibold text-baseColor text-[1.5rem] leading-none">of Studio</p>
      </div>
      <div></div>
    </div>
    <hr class="my-[2rem] border-[1px] border-baseColor" />
  </section>
</template>

<style scoped></style>
