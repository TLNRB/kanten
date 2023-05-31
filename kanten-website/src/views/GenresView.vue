<script setup>
import { ref } from 'vue'
</script>

<template>
  <main class="mt-[5rem] pt-[2rem] overflow-x-hidden md:mt-[7.875rem] lg:pt-[2rem] xl:mt-[8rem]">
    <div v-for="item in state" :key="item.id">
      <div class="flex justify-center">
        <video class="h-[50rem]" autoplay muted :src="item.video" type="video/mp4"></video>
      </div>
      <p>{{ item.maindescription }}</p>
      <div class="group">
        <div
          class="relative z-[1] w-fit px-[1rem] py-[0.1rem] bg-darkBG border-[1px] group-hover:border-[1px] ease-in duration-[.15s]"
        >
          <RouterLink :to="{ name: 'singlegenreview', params: { id: item.id } }">
            <h3
              class="bg-darkBG text-[1.25rem] xs:text-[1.75rem] sm:text-[1rem] md:text-[1.25rem] xl:text-[1.5rem]"
            >
              Read more
            </h3>
          </RouterLink>
        </div>
        <div
          class="borderStroke group-hover:mt-[-2.5px] md:group-hover:mt-[-2.5px] sm:group-hover:mt-[-1px] lg:group-hover:mt-[-2.8px] xl:group-hover:mt-[-2px] group-hover:ml-[0] duration-[.2s]"
        >
          <h3
            class="bg-darkBG text-[1.25rem] xs:text-[1.75rem] sm:text-[1rem] md:text-[1.25rem] xl:text-[1.5rem]"
          >
            Read more
          </h3>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.borderStroke {
  /* color: #f4f4f4; */
  margin-top: 4px;
  margin-left: 4px;
  border: 1px solid #f4f4f4;
  position: relative;
  width: fit-content;
  padding: 0.1rem 1rem;
}
@media screen and (max-width: 360px) {
  .borderStroke {
    top: -2.05rem;
  }
}
@media screen and (min-width: 360px) {
  .borderStroke {
    top: -2.8rem;
  }
}
@media screen and (min-width: 560px) {
  .borderStroke {
    top: -1.7rem;
  }
}
@media screen and (min-width: 768px) {
  .borderStroke {
    top: -2.05rem;
  }
}
@media screen and (min-width: 1200px) {
  .borderStroke {
    top: -2.45rem;
  }
}
</style>
