<script setup>
import { ref } from 'vue'
import mouse from '../images/mouse.svg'
import statue from '../images/statueK.svg'
</script>

<template>
  <main class="mt-[2rem] mb-[4rem] pt-[2.75rem] pb-[2.25rem] overflow-x-hidden md:mt-0">
    <div>
      <img
        class="h-[20rem] mx-auto xs:h-[25rem] sm:h-[30rem]"
        :src="statue"
        alt="Statue blowing a bubble gum between Kanten's K letters"
      />
      <div
        class="mb-[3rem] mx-auto text-center text-[2.5rem] uppercase leading-[45px] xs:text-[3rem] sm:leading-[55px] sm:text-[4rem]"
      >
        <p class="flex flex-col relative mx-auto w-fit xs:translate-x-[-30px]">
          <span class="font-bold text-baseColor z-[1]">Experience</span>
          <span class="textStroke">Experience</span>
        </p>
        <p class="font-bold xs:translate-x-[35px]">The Edge Of</p>
        <p class="flex flex-col relative mx-auto w-fit xs:translate-x-[-30px]">
          <span class="font-bold text-baseColor z-[1]">Culture At</span>
          <span class="textStroke">Culture At</span>
        </p>
        <div class="flex items-center justify-center gap-[1rem]">
          <img
            class="h-[22px] scale-x-[-1] xs:h-[24px] xs:translate-y-[4px]"
            :src="mouse"
            alt="Mouse"
          />
          <p class="font-bold text-center">Kanten</p>
          <img class="h-[22px] xs:h-[24px] xs:translate-y-[4px]" :src="mouse" alt="Mouse" />
        </div>
      </div>
      <button class="flex flex-col mx-auto text-[1.25rem] relative group">
        <span
          class="btn border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
          >Join The Commuinty</span
        >
        <span
          class="btn border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
          >Join The Commuinty</span
        >
      </button>
    </div>
  </main>
</template>

<style scoped>
.textStroke {
  /* color: #f4f4f4; */
  position: absolute;
  top: 1.5px;
  left: 1.5px;
  width: max-content;
  font-weight: bold;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: #f4f4f4;
  -webkit-text-stroke-width: 0.5px;
}

.btn {
  font-weight: 600;
  padding: 0.375rem 1.125rem;
}
</style>
