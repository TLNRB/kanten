<script setup>
import { toRefs, ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

/* ---------- Import Stores ---------- */
import { useStoreEvents } from '../stores/storeEvents'
/* ---------- Stores ---------- */
const storeEvents = useStoreEvents()

const router = useRouter()
const goBack = () => {
  router.go(-1)
}

const props = defineProps({
  id: String
})
const { id } = toRefs(props)

const event = computed(() => {
  return storeEvents.events.find((item) => item.id == id.value)
})

/*----- Spliting the detailed description -----*/
// Split the text into an array of paragraphs
const paragraphs = ref([])

// Split the text into paragraphs after every two sentences
const splitTextIntoParagraphs = () => {
  const sentences = event.value.longDesc.split('. ')
  let temp = ''
  let counter = 0

  for (let i = 0; i < sentences.length; i++) {
    temp += sentences[i] + '. '

    if ((i + 1) % 2 === 0) {
      paragraphs.value[counter] = temp
      temp = ''
      counter++
    }
  }

  // If there are remaining sentences, add them as the last paragraph
  if (temp !== '') {
    paragraphs.value[counter] = temp
  }
}

let formattedDate = ref('')

// Converting the date to english format
const dateFormatter = () => {
  const values = event.value.date.split('-')
  formattedDate.value = `${values[2]}. ${values[1]}. ${values[0]}`
}

onMounted(() => {
  splitTextIntoParagraphs()
  dateFormatter()
  storeEvents.getEvents()
})
</script>

<template>
  <main class="mt-[6.875rem] overflow-x-hidden relative lg:mt-[7.875rem] xl:mt-[8.375rem]">
    <div class="absolute top-[2rem] left-[1rem] md:left-[2rem] xl:left-[3rem] xl:top-[3rem]">
      <button
        class="h-[32px] w-[32px] rounded-full ease-in duration-[.2s] sm:h-[44px] sm:w-[44px]"
        :class="event.genre"
        @click="goBack()"
      >
        <font-awesome-icon
          class="text-[1.375rem] translate-y-[3px] ease-in duration-[.05s] sm:text-[1.75rem] sm:translate-y-[2px]"
          :icon="['fas', 'arrow-left']"
        />
      </button>
    </div>
    <img
      class="w-[100%] object-cover h-[300px] md:h-[400px] lg:h-[500px] xxl:h-[600px]"
      :src="event.coverImg"
    />
    <div class="flex flex-col justify-center px-[1rem] md:px-[4rem] xxl:px-[12.5rem]">
      <h1
        class="font-bold relative text-[1.5rem] leading-tight drop-shadow-xl top-[-.75rem] xs:text-[1.75rem] sm:top-[-1.25rem] sm:text-[2.5rem] sm:leading-none lg:text-[4rem] lg:top-[-1.5rem]"
      >
        {{ event.title }}
      </h1>
      <h3
        class="text-[1.25rem] font-[500] leading-tight sm:text-[1.5rem] lg:text-[2rem] uppercase"
        :class="event.genre"
      >
        {{ event.genre }}
      </h3>
      <div
        class="flex flex-col gap-[1.5rem] mt-[1.5rem] mb-[2.5rem] sm:mb-[3rem] lg:mt-[2rem] lg:mb-[4rem] lg:flex-row lg:items-center lg:justify-between"
      >
        <p class="sm:text-[1.25rem] lg:w-[80%] xl:text-[1.5rem]">
          {{ event.shortDesc }}
        </p>
        <a
          :href="event.ticket"
          target="_blank"
          class="flex flex-col w-fit mr-auto text-[1rem] relative group lg:mr-0"
        >
          <span
            class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] sm:py-[.5rem] sm:px-[1.25rem] sm:text-[1.5rem]"
            :class="event.genre"
            >Buy Tickets</span
          >
          <span
            class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] sm:py-[.5rem] sm:px-[1.25rem] sm:text-[1.5rem]"
            >Buy Tickets</span
          >
        </a>
      </div>
    </div>
    <div
      class="text-darkBG flex flex-col gap-[4rem] items-center pt-[2rem] pb-[3rem] px-[1rem] md:pt-[3rem] md:pb-[1.75rem] md:px-[4rem] lg:flex-row-reverse lg:justify-between lg:pt-[4rem] lg:pb-[2.5rem] xxl:px-[12.5rem]"
      :class="event.genre"
    >
      <div class="w-[100%] lg:w-[40%] xl:w-[400px]">
        <div
          class="flex items-center justify-between gap-[1.5rem] leading-none pb-[1rem] border-b-[1px] border-darkBG sm:pb-[1.5rem]"
        >
          <p class="text-[1rem] font-[500] uppercase sm:text-[1.25rem]">Date＆Time</p>
          <p class="text-[1.25rem] font-[500] sm:text-[1.5rem]">{{ formattedDate }}</p>
        </div>
        <div
          class="flex items-center justify-between gap-[1.5rem] leading-none py-[1rem] border-b-[1px] border-darkBG sm:py-[1.5rem]"
        >
          <p class="text-[1rem] font-[500] uppercase sm:text-[1.25rem]">Performer</p>
          <p class="text-[1.25rem] font-medium sm:text-[1.5rem]">
            {{ event.performer }}
          </p>
        </div>
        <div
          class="flex items-center justify-between gap-[1.5rem] leading-none py-[1rem] border-b-[1px] border-darkBG sm:py-[1.5rem]"
        >
          <p class="text-[1rem] font-[500] uppercase sm:text-[1.25rem]">Price</p>
          <p class="text-[1.25rem] font-medium sm:text-[1.5rem]">{{ event.price }},-</p>
        </div>
        <div
          class="flex items-center justify-between gap-[1.5rem] leading-none pt-[1rem] sm:pt-[1.5rem]"
        >
          <p class="text-[1rem] font-[500] uppercase sm:text-[1.25rem]">Age</p>
          <p class="text-[1.25rem] font-medium sm:text-[1.5rem]">{{ event.age }}+</p>
        </div>
      </div>
      <div class="sm:text-[1.25rem] lg:w-[60%] lg:text-[1.5rem]">
        <p
          v-for="(paragraph, index) in paragraphs"
          :key="index"
          class="pb-[1.25rem] lg:pb-[1.5rem]"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </main>
  <!--   <div v-else>Loading...</div> -->
</template>

<style scoped>
h3.other {
  color: #1ecece;
}

div.other {
  background-color: #1ecece;
}

span.other {
  border-color: #1ecece;
  background-color: #1ecece;
  color: #282828;
}

span.other:hover {
  background-color: #181818;
  color: #1ecece;
}

button.other {
  background-color: #1ecece;
  color: #282828;
}

button.other:hover {
  background-color: #f4f4f4;
}

h3.deft {
  color: #20e062;
}

div.deft {
  background-color: #20e062;
}

span.deft {
  border-color: #20e062;
  background-color: #20e062;
  color: #282828;
}

span.deft:hover {
  background-color: #181818;
  color: #20e062;
}

button.deft {
  color: #282828;
  background-color: #20e062;
}

button.deft:hover {
  background-color: #f4f4f4;
}

h3.manaClub {
  color: #a809e5;
}

div.manaClub {
  background-color: #a809e5;
}

span.manaClub {
  border-color: #a809e5;
  background-color: #a809e5;
}

span.manaClub:hover {
  background-color: #181818;
  color: #a809e5;
  border-color: #f4f4f4;
}

button.manaClub {
  background-color: #a809e5;
}

button.manaClub:hover {
  color: #282828;
  background-color: #f4f4f4;
}

h3.vertex {
  color: #ea3397;
}

div.vertex {
  background-color: #ea3397;
}

span.vertex {
  border-color: #ea3397;
  background-color: #ea3397;
  color: #282828;
}

span.vertex:hover {
  background-color: #181818;
  color: #ea3397;
}

button.vertex {
  color: #282828;
  background-color: #ea3397;
}

button.vertex:hover {
  background-color: #f4f4f4;
}

h3.dub {
  color: #ffd930;
}

div.dub {
  background-color: #ffd930;
}

span.dub {
  border-color: #ffd930;
  background-color: #ffd930;
  color: #282828;
}

span.dub:hover {
  background-color: #181818;
  color: #ffd930;
}

button.dub {
  color: #282828;
  background-color: #ffd930;
}

button.dub:hover {
  background-color: #f4f4f4;
}
</style>
