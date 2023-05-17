<script setup>
/* ---------- Importing Section Components ---------- */
import Home from '../components/HomeView/Home.vue'
/* ---------- Importing Images ---------- */
import mouse from '../images/mouse.svg'
import statue from '../images/statueK.svg'
import statueWithGlass from '../images/statueWIthGlasses.svg'
import wavyLines from '../images/wavyLines.svg'
import boldLines from '../images/boldIndentedLines.svg'
</script>

<template>
  <Home :mouse="mouse" :statue="statue" />
  <section
    class="bg-[url('../images/squareGrid.svg')] h-[100vh] pt-[4rem] px-[1rem] md:px-[2rem] xl:px-[3rem]"
  >
    <div class="flex items-center gap-[.5rem]">
      <div class="flex flex-col items-center gap-[1rem]">
        <h2 class="flex flex-col items-center leading-none text-[2.5rem] font-bold uppercase">
          Who
          <span class="relative font-bold"
            >Are<span class="absolute top-[2px] left-[2px] font-bold text-baseColor z-[-1]"
              >Are</span
            ></span
          >
          We?
        </h2>
        <img :src="wavyLines" alt="Wavy lines" />
      </div>
      <img class="h-[200px]" :src="statueWithGlass" alt="Illustrated statue with a glass" />
    </div>
    <div>
      <p></p>
      <img :src="boldLines" alt="Bold indented lines" />
    </div>
    <h4>Kanten is more than just a nightclub.</h4>
    <hr />
    <p>
      It’s a community that brings people together through music. We strive to create a safe and
      inclusive space where everyone is welcome to express themselves and connect with others.
    </p>
    <div>
      <button class="flex flex-col mx-auto text-[1.25rem] relative group">
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
          >Volunteer now</span
        >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
          >Volunteer now</span
        >
      </button>
      <button class="flex flex-col mx-auto text-[1.25rem] relative group">
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
          >Be a member</span
        >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
          >Be a member</span
        >
      </button>
    </div>
  </section>
</template>

<style scoped></style>
