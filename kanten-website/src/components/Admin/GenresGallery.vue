<script setup>
const { image } = defineProps(['image'])
</script>

<template>
  <!-- Events -->
  <div>
    <div
      class="flex flex-col gap-[1rem] w-[260px] bg-darkBG items-center border-[1px] border-baseColor p-[.75rem] xs:w-[325px] sm:w-[460px] md:gap-[1.5rem]"
    >
      <!-- Cover Image -->
      <img :src="image.src" alt="" />
      <!-- Title -->
      <div class="flex flex-col mr-auto text-[1.25rem] px-[.75rem]">
        <p class="font-[500] text-baseColor">Title:</p>
        <p class="font-[500]">{{ image.desc }}</p>
      </div>
      <div class="flex gap-[1rem] mr-auto text-[1.25rem] px-[.5rem] mb-[1rem]">
        <!-- Edit -->
        <button class="flex flex-col mt-[1.5rem] w-fit mx-auto text-[1rem] relative group">
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] bg-baseColor border-baseColor z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
            >Edit</span
          >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
            >Edit</span
          >
        </button>
        <!-- Delete -->
        <button class="flex flex-col mt-[1.5rem] w-fit mx-auto text-[1rem] relative group">
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] bg-red-700 border-red-700 z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
            >Delete</span
          >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
            >Delete</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
