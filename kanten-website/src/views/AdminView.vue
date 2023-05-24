<script setup>
import { reactive } from 'vue'
import AdminEvents from '../components/Admin/AdminEvents.vue'

const options = reactive([
  { id: 0, name: 'Events', active: true },
  { id: 1, name: 'Genres Gallery', active: false },
  { id: 2, name: 'Studio Gallery', active: false }
])
</script>

<template>
  <main
    class="bg-[url('../images/gridGray.svg')] overflow-x-hidden flex flex-col mt-[6.875rem] py-[4rem] px-[1rem] md:px-[4rem] md:mt-[7.875rem] xl:mt-[8.375rem] xxl:px-[12.5rem]"
  >
    <h1
      class="flex items-center justify-center relative mx-auto text-[2rem] uppercase xs:text-[2.5rem] md:text-[5rem] leading-none"
    >
      <span class="font-bold text-baseColor z-[1]">Admin</span>
      <span class="font-bold absolute top-[1.5px] left-[1.5px] z-[0] md:top-[2.5px] md:left-[2.5px]"
        >Admin</span
      >
    </h1>
    <div
      class="mt-[3rem] md:mt-[4rem] flex flex-wrap items-center justify-center gap-[1.25rem] md:gap-[2rem]"
    >
      <button
        v-for="option in options"
        :key="option.id"
        class="flex flex-col text-center text-[1.25rem] relative group"
      >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          :class="[option.active ? 'active' : '']"
          >{{ option.name }}</span
        >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          >{{ option.name }}</span
        >
      </button>
    </div>
    <!-- Sections goes here -->
    <AdminEvents />
  </main>
</template>

<style scoped>
.active {
  background-color: #1ecece;
  transition: ease-in 0.2s;
}

.active:hover {
  color: #f4f4f4;
  transition: ease-in 0.2s;
}
</style>
