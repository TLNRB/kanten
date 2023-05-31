<script setup>
import { ref } from 'vue'
import genresData from '../data/genresData.js'
import { useRouter } from 'vue-router'

/*----- Routing -----*/
const router = useRouter()
const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <main class="mt-[5rem] pt-[2rem] md:mt-[7.875rem] lg:pt-[2rem] xl:mt-[10rem]"></main>
</template>

<style scoped>
.borderStroke {
  /* color: #f4f4f4; */
  margin-top: 4px;
  margin-left: 4px;
  position: relative;
  width: fit-content;
  padding: 0.1rem 1rem;
}
.deft {
  border: 1px solid #20e062;
}
.dub {
  border: 1px solid #ffd930;
}
.manaclub {
  border: 1px solid #a809e5;
}
.vertex {
  border: 1px solid #ea3397;
}
@media screen and (max-width: 360px) {
  .borderStroke {
    top: -2.05rem;
  }
}
@media screen and (min-width: 360px) {
  .borderStroke {
    top: -2.6rem;
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
