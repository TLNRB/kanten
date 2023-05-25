<script setup>

import { toRefs, computed } from 'vue';
import singleevent from '../data/singleevent'
import { useRouter } from 'vue-router';

const router = useRouter()
const goBack = () => {
    router.go(-1)
}
const {state} = singleevent()
const props = defineProps({
    id: String
})
const { id } = toRefs(props)

const event = computed( () => {
    return state.value.find(item => item.id == id.value)
})

</script>

<template>
   <button @click="goBack()">Go back</button>
  test::{{ id }}
  <main 
    v-if="event"
    class="mt-[5rem] pt-[2rem]   overflow-x-hidden md:mt-[7.875rem]  lg:pt-[2rem] xl:mt-[8rem]"
    >
    <img class=" w-[100%] object-cover h-[20rem] sm:h-[30rem]"
        :src="event.image"
    /> 
    <div 
      class="px-[1rem] md:px-[4rem] xxl:px-[12.5rem]">
      <h1 
        class="font-bold h-[4rem] sm:h-[6.5rem] xl:h-[7.5rem] text-lightText w-[80%] lg:w-[50%] relative top-[-1.25rem] xl:top-[-2rem] sm:top-[-2.4rem] text-[1.5rem] xs:text-[1.6rem] sm:text-[2.8rem] lg:text-[3rem] ">
          {{ event.title }} 
      </h1>
      <h3 
         class=" text-[1.2rem] xs:text-[1.4rem] sm:text-[1.8rem] lg:text-[2rem] "  :class="event.category">
          {{ event.category }}
      </h3>
      <div class="lg:flex xl:mb-[2rem] justify-between items-baseline">
         <p 
           class="py-[1rem] lg:w-[80%] text-[1.2rem] sm:text-[1.4rem] xl:text-[1.6rem]">
             An event for party lovers and everyone else. If you like rave music this event is for you!
         </p>
         <div
             class="xl:h-[1.3rem]">
                 <div 
                 class=" relative z-[1] w-fit px-[1rem] py-[0.1rem] " :class="event.category">
                    <a href="">
                       <h2 
                       class="category text-darkBG text-[1.25rem]  sm:text-[1rem] md:text-[1.25rem] xl:text-[1.5rem] ">
                       Buy tickets
                      </h2>  
                    </a>     
                 </div>
                <div
                 class="borderStroke">
                 <h3 
                 class=" text-[1.25rem]  sm:text-[1rem] md:text-[1.25rem] xl:text-[1.5rem]">
                 Buy tickets
              </h3>           
            </div>
          </div>
       </div>
      </div>
      <div 
         class=" text-darkBG lg:flex justify-between items-center flex-row-reverse  py-[1rem] lg:py-[3rem] px-[1rem] md:px-[4rem] xxl:px-[12.5rem] "  :class="event.category">
         <div class="lg:w-[40%]">
             <div
                class="flex py-[1rem] lg:py-[2rem] justify-between items-center border-b-[1px] border-darkBG ">
                 <h3 
                   class="text-[1.25rem] ">
                    DATE＆TIME
                 </h3>
                 <h3 
                   class="text-[1.5rem] font-medium">
                   {{ event.date }}
                 </h3>
             </div>
             <div 
               class="flex py-[1rem] lg:py-[2rem] justify-between items-center border-b-[1px] border-darkBG ">
                 <h3 
                   class="text-[1.25rem] ">
                     PERFOMER
                 </h3>
                 <h3
                   class="text-[1.5rem] font-medium">
                    {{ event.performer }}
                 </h3>
             </div>
             <div 
               class="flex py-[1rem] lg:py-[2rem] justify-between items-center  ">
                <h3 
                  class="text-[1.25rem] ">
                   PRICE
                </h3>
                <h3 
                  class="text-[1.5rem] font-medium">
                    {{ event.price }},-
                </h3>
           </div>
          </div>
          <div class="py-[1rem] lg:w-[55%] text-[1rem] sm:text-[1.2rem] xl:text-[1.4rem]">
            <p class="pb-[1.2rem] xl:pb-[2rem]">{{ event.description1 }}</p>
            <p class="pb-[1.2rem] xl:pb-[2rem]">{{ event.description2 }}</p>
            <p class="pb-[1.2rem] xl:pb-[2rem]">{{ event.description3 }}</p>
            <p class="pb-[1.2rem] xl:pb-[2rem]">{{ event.description4 }}</p>
          </div>
        </div>
  </main>
    <div v-else> Loading...</div>
</template>

<style scoped>
h3.OTHER{
  color: #1ECECE;
}
div.OTHER{
  background-color: #1ECECE;
}
h3.DEFT{
  color: #20E062;
}
div.DEFT{
  background-color: #20E062;
}
h3.MANA.CLUB{
  color: #A809E5;
}
div.MANA.CLUB{
  background-color: #A809E5;
}
h3.VERTEX{
  color: #EA3397;
}
div.VERTEX{
  background-color: #EA3397;
}
h3.DUB{
  color: #FFD930;
}
div.DUB{
  background-color: #FFD930;
}
.borderStroke {
  /* color: #f4f4f4; */
  margin-top: 3px;
  margin-left: 3px;
  border: 1px solid #F4F4F4;
  top: -2.55rem;
  position: relative;
  width: fit-content;
  padding: 0.1rem 1rem;
}
@media screen and (max-width: 560px) {
    .borderStroke{
        top: -2rem;
    }
}

@media screen and (min-width: 560px) {
    .borderStroke{
        top: -1.8rem;
    }
}
@media screen and (min-width: 768px) {
    .borderStroke{
        top: -2rem;
    }
}
@media screen and (min-width: 1200px) {
    .borderStroke{
        top: -2.5rem;
    }
}
</style>
