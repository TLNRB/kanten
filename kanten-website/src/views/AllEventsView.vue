<script setup>
import { ref } from 'vue'
 
import singleevent from '../data/singleevent'
/* ---------- Importing Section Components ---------- */
import Event from '../components/EventView/Event.vue'
/* ---------- Importing Images ---------- */

const {state} = singleevent()

</script>

<template>

  <Event />

  <section 
     class="pb-[0.5rem] px-[1rem] md:px-[4rem] xxl:px-[12.5rem]">
       <div 
         class="flex flex-col flex-wrap	 sm:flex-row  justify-between">
          <div
              v-for="item in state" 
              :key="item.id"
              class="flex mb-[3rem] xs:w-[100%] xs:justify-center sm:w-[47%] lg:w-[31%]   flex-col p-2 bg-darkBG border-solid border-[1px] z-[1] border-baseColor">
               <img class="object-cover h-[18rem] "
               :src="item.image"
                /> 
               <h1 
               class=" ml-[0.25rem] font-bold text-[1.75rem] z-[1] relative top-[-3rem] xs:text-[2rem] sm:text-[1.4rem] md:text-[1.75rem] xl:text-[2rem]">
               {{ item.title }}
               </h1>
              <h3 
               class=" ml-[0.25rem] relative top-[-3rem] text-[1.75rem] xs:text-[2.25rem] sm:text-[1.5rem] md:text-[1.75rem] xl:text-[2rem]">
               {{ item.date }}
              </h3>
              <div class="ml-[0.25rem] group h-[0.9rem] xs:h-[1.8rem] sm:h-[0.5rem] md:h-[1rem] xl:h-[1.3rem]">
                 <div 
                 class="bg-darkBG relative z-[1] top-[-2rem] w-fit px-[1rem] py-[0.1rem] border-solid border-[1px] border-baseColor group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s]">
                    <RouterLink :to="{ name:'singleeventview', params:  { id:item.id}}" >
                       <h3 
                       class=" bg-darkBG text-[1.25rem] xs:text-[1.75rem] sm:text-[1rem] md:text-[1.25rem] xl:text-[1.5rem] ">
                       Read more
                      </h3>  
                   </RouterLink>          
                 </div>
                <div
                 class="borderStroke group-hover:mt-[0] sm:group-hover:mt-[-1px] md:group-hover:mt-[-2.5px] xl:group-hover:mt-[-1.9px] group-hover:ml-[0] duration-[.2s]">
                 <h3 
                 class=" text-[1.25rem] xs:text-[1.75rem] sm:text-[1rem] md:text-[1.25rem] xl:text-[1.5rem]">
                 Read more
              </h3>           
            </div>
        </div>
    </div>
       </div>
   </section>
   <section class="h-[0rem]">    
    <div class="bg-baseColor relative top-[-50rem] sm:top-[-40rem] md:top-[-45rem] h-[25rem]"></div>
  </section>
  <section class="h-[0rem]">    
    <div class="bg-baseColor relative top-[-110rem] xs:top-[-130rem] sm:hidden h-[25rem]"></div>
  </section>


</template>

<style scoped>
.borderStroke {
  /* color: #f4f4f4; */
  margin-top: 4px;
  margin-left: 4px;
  border: 1px solid #F4F4F4;
  top: -4.55rem;
  position: relative;
  width: fit-content;
  padding: 0.1rem 1rem;
}
@media screen and (max-width: 360px) {
    .borderStroke{
        top: -4.15rem;
    }
}
@media screen and (min-width: 360px) {
    .borderStroke{
        top: -4.9rem;
    }
}
@media screen and (min-width: 560px) {
    .borderStroke{
        top: -3.8rem;
    }
}
@media screen and (min-width: 768px) {
    .borderStroke{
        top: -4rem;
    }
}
@media screen and (min-width: 1200px) {
    .borderStroke{
        top: -4.5rem;
    }
}
</style>
