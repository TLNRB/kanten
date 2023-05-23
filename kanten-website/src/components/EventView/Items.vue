<script setup>
import { ref } from 'vue'
//Defining image props
const { event1, event2, event3, event4 } = defineProps(['event1', 'event2', 'event3'])

let initialWord = ref('rhythm')
let i = 1
let words = ['rhythm', 'passion', 'connection']
</script>

<template>
   <section class="pb-[0.5rem] px-[1rem] md:px-[4rem]  xxl:px-[12.5rem]">
     <div class=" flex justify-between">
        <div class="flex xs:w-[100%] xs:justify-center sm:w-[45%]  lg:w-[30%] xxl:w-[30%] ">
        <span class="flex flex-col p-2 bg-darkBG border-solid border-[1px] z-[1] border-baseColor">
             <img
          :src="event1"
        /> 
        <h1 class="font-bold text-[2rem] z-[1] relative top-[-3rem] xs:text-[2.5rem] sm:text-[1.7rem] md:text-[2rem] xl:text-[2.3rem]">Kandidatkoncert 
         Timur Allisstone</h1>
    </span>
        <!-- <span class="borderStroke">
            <img
          class=""
          :src="event1"
        /> 
            <p>hefghgfd</p>
        </span> -->
       </div>
     </div>
   </section>
  
</template>

<style scoped>
.borderStroke {
  /* color: #f4f4f4; */
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 2px;
  margin-left: 2px;
  border: 1px solid #F4F4F4;
}
</style>
