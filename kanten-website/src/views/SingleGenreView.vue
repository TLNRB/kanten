<script setup>
import { toRefs, computed } from 'vue';
import singlegenre from '../data/singlegenre'
import { useRouter } from 'vue-router';
const router = useRouter()
const goBack = () => {
    router.go(-1)
}
const {state} = singlegenre()
const props = defineProps({
    id: String
})
const { id } = toRefs(props)

const genre = computed( () => {
    return state.value.find(item => item.id == id.value)
})


</script>

<template>
  <main 
    v-if="genre"
    class="mt-[5rem] pt-[2rem] md:mt-[7.875rem]  lg:pt-[2rem] xl:mt-[10rem] "
    >
    <div class="flex flex-col md:flex-row mx-[1.3rem] md:mx-[4.5rem] xxl:mx-[12.6rem]">
      <img class="hidden lg:block md:w-[10rem] h-fit lg:w-[25rem] xl:w-[30rem]  " :src="genre.logo" alt="">
      <img class=" block lg:hidden md:w-[12rem] " :src="genre.statue" alt="">

      <div class="lg:top-[6rem] xl:top-[7rem] xl:ml-[-1.2rem] lg:ml-[-1rem] relative">
        <h1 class="font-bold text-[2rem] xs:text-[2.5rem] relative top-[-2rem] md:top-[0] md:h-fit xs:top-[-3rem] h-[1.5rem] sm:text-[3rem] md:text-[2rem] lg:text-[4rem] xl:text-[5rem]">{{ genre.title }}</h1>
      <div >
        <p class="font-medium text-[1rem] xs:text-[1.25rem] sm:text-[1.3rem] sm:font-normal md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] pb-[1rem]">{{ genre.description1 }}</p>
        <p class="font-medium text-[1rem] xs:text-[1.25rem] sm:text-[1.3rem] sm:font-normal md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem]">{{ genre.description2 }}</p>
      </div>
     
      <div
             class=" group top-[0.5rem] xs:top-[1rem] lg:top-[4rem] xl:top-[5.5rem] relative flex justify-end">
             <div > 
                 <div 
                 class=" relative z-[1] w-fit px-[1rem] py-[0.1rem]  bg-darkBG   group-hover:border-[1px]  ease-in duration-[.15s] " :class="genre.category" >
                 <button class="" @click="goBack()">
                       <h3 
                       class=" bg-darkBG text-[1.25rem] xs:text-[1.5rem] sm:text-[1rem] md:text-[1.25rem] xl:text-[1.5rem] ">
                       Go back
                      </h3>  
                    </button>
                 </div>
                 <div
                 class="borderStroke  group-hover:mt-[-2.5px] xs:group-hover:mt-[0] md:group-hover:mt-[-2.5px] sm:group-hover:mt-[-1px] lg:group-hover:mt-[-2.8px] xl:group-hover:mt-[-2px] group-hover:ml-[0] duration-[.2s]" :class="genre.category">
                 <h3 
                       class=" bg-darkBG text-[1.25rem] xs:text-[1.5rem] sm:text-[1rem] md:text-[1.25rem] xl:text-[1.5rem] ">
                       Go back
                   </h3>       
            </div>
          </div>
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
  position: relative;
  width: fit-content;
  padding: 0.1rem 1rem;
}
.deft{
    border: 1px solid #20E062;
}
.dub{
    border: 1px solid #FFD930;
}
.manaclub{
    border: 1px solid #A809E5;
}
.vertex{
    border: 1px solid #EA3397;
}
 @media screen and (max-width: 360px) {
    .borderStroke{
        top: -2.05rem;
    }
}
@media screen and (min-width: 360px) {
    .borderStroke{
        top: -2.6rem;
    }
}
@media screen and (min-width: 560px) {
    .borderStroke{
        top: -1.7rem;
    }
}
@media screen and (min-width: 768px) {
    .borderStroke{
        top: -2.05rem;
    }
}
@media screen and (min-width: 1200px) {
    .borderStroke{
       top: -2.45rem
    }
} 
</style>