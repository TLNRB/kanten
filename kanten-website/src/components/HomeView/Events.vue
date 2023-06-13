<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const { storeEvents } = defineProps(['storeEvents'])

//Routing
const router = useRouter()

const navigate = (id) => {
  router.push({ name: 'singleeventview', params: { id: id } })
}

// Converting the date to english format
const dateFormatter = (date) => {
  const values = date.split('-')
  return `${values[2]}. ${values[1]}`
}

let sortedEvents = ref([])

/* Getting the three events closest to todays date */
const getClosestDates = () => {
  const currentDate = new Date()
  const tempArray = storeEvents.events.sort(
    (a, b) => Math.abs(currentDate - new Date(a.date)) - Math.abs(currentDate - new Date(b.date))
  )
  for (let i = 0; i < 3; i++) {
    sortedEvents.value.push(tempArray[i])
  }
}

let timeout
let counter = 0

const timeOutClear = () => {
  clearInterval(timeout)
}

onMounted(() => {
  storeEvents.getEvents()
  timeout = setInterval(() => {
    if (counter == 15 || storeEvents.events.length != 0) {
      getClosestDates()
      timeOutClear()
    } else {
      counter++
    }
  }, 1000)
})
</script>

<template>
  <section class="py-[4rem] px-[1rem] md:px-[4rem] lg:py-[6rem] xxl:px-[12.5rem] xxl:gap-[9rem]">
    <div class="flex flex-col justify-center items-center gap-[.25rem] mb-[2rem] md:mb-[4rem]">
      <p
        class="flex items-center gap-[.5rem] leading-none text-[1.125rem] xs:text-[1.25rem] md:text-[2.5rem]"
      >
        <span class="font-semibold leading-[18px] md:leading-[34px]">Feel the<br />hype of</span>
        <span
          class="text-[2rem] font-bold uppercase translate-y-[2px] xs:text-[2.5rem] md:text-[5rem]"
          >Upcoming</span
        >
      </p>
      <div class="flex items-center gap-[.5rem] leading-none">
        <p class="flex flex-col relative text-[2rem] uppercase xs:text-[2.5rem] md:text-[5rem]">
          <span class="font-bold text-baseColor z-[1]">Events</span>
          <span
            class="font-bold absolute top-[1.5px] left-[1.5px] z-[0] md:top-[2.5px] md:left-[2.5px]"
            >Events</span
          >
        </p>
        <span class="font-semibold text-[1.25rem] md:text-[2.5rem]">at Kanten</span>
      </div>
    </div>
    <div>
      <p class="text-[1.25rem] leading-snug mb-[2rem] md:mb-[4rem] md:text-[1.5rem]">
        From pulsating Hip Hop beats to electrifying Rave nights, soulful House sessions to the
        rhythm of Dancehall, Reggae, and Dub, we curate an unparalleled lineup that caters to every
        music lover’s taste.
      </p>
    </div>
    <div v-if="sortedEvents.length">
      <!-- Event info -->
      <div
        class="flex items-center justify-between text-[.75rem] leading-tight uppercase pb-[.5rem] border-b-[1px] border-baseColor text-normalText xs:text-[.875rem] sm:text-[1rem] md:text-[1.25rem] md:px-[1rem] md:pb-[1rem] md:leading-none lg:px-[2rem]"
      >
        <div class="w-[70px] xs:w-auto">
          <p class="font-[500]">Date</p>
          <p class="font-[500]">Time</p>
        </div>
        <p class="mr-auto font-[500] xs:mx-auto">Performer</p>
        <p class="w-[50px] font-[500] text-right xs:w-auto">Price</p>
      </div>
      <!-- Events -->
      <div
        v-for="event in sortedEvents"
        :key="event.id"
        class="flex items-center justify-between uppercase leading-tight cursor-pointer py-[1rem] border-b-[1px] border-baseColor text-[1rem] xs:text-[1.125rem] sm:text-[1.25rem] md:text-[2rem] md:px-[1rem] md:py-[1.5rem] md:leading-none lg:py-[1.75rem] lg:px-[2rem]"
        @click="navigate(event.id)"
      >
        <div class="w-[70px] xs:w-auto">
          <p class="font-[500]">{{ dateFormatter(event.date) }}</p>
          <p class="font-[500] md:text-[1.5rem] text-normalText">{{ event.time }}</p>
        </div>
        <p class="mr-auto font-[500] xs:mx-auto">{{ event.performer }}</p>
        <p class="w-[50px] text-right font-[500] xs:w-auto">{{ event.price }},-</p>
      </div>
    </div>
    <div
      v-else
      class="mt-[2rem] text-[1rem] flex justify-center text-normalText italic md:text-[1.25rem]"
    >
      No events found
    </div>
    <RouterLink
      to="events"
      class="flex flex-col mt-[2.5rem] w-fit text-[1.25rem] relative group sm:mt-[3rem]"
    >
      <span
        class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
        >Explore All Events</span
      >
      <span
        class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
        >Explore All Events</span
      >
    </RouterLink>
  </section>
</template>

<style scoped></style>
