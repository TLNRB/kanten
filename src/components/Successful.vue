<script setup>
import { RouterLink } from 'vue-router'

const { text } = defineProps(['text'])

/* Emits */
const emit = defineEmits(['close-modal'])

const closeModal = () => {
  emit('close-modal')
}
</script>

<template>
  <section
    class="bg-[url('../images/gridGray.svg')] min-h-[100vh] overflow-hidden flex flex-col justify-center py-[6.875rem] px-[1rem] md:px-[4rem] lg:py-[7.875rem] xl:py-[8.375rem] xxl:px-[12.5rem]"
  >
    <h1
      class="flex items-center justify-center relative mx-auto text-[2.5rem] uppercase leading-none xs:text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem]"
    >
      <span class="font-bold text-baseColor z-[1]">Thank You!</span>
      <span
        class="font-bold absolute top-[2px] w-[100%] left-[2px] z-[0] md:top-[3px] md:left-[3px]"
        >Thank You!</span
      >
    </h1>
    <p
      class="text-[1rem] text-normalText text-center font-[500] leading-snug my-[2rem] mx-auto sm:text-[1.25rem] md:my-[2rem] md:text-[1.5rem]"
    >
      {{ text }}
    </p>
    <RouterLink
      to="/"
      class="flex flex-col mt-[1rem] w-fit mx-auto text-[1.25rem] relative group sm:mt-[2rem]"
      @click="closeModal"
    >
      <span
        class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
        >Back to Home</span
      >
      <span
        class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
        >Back to Home</span
      >
    </RouterLink>
  </section>
</template>

<style scoped></style>
