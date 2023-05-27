<script setup>
import { ref } from 'vue'

const { newEvent, storeEvents } = defineProps(['newEvent', 'storeEvents'])

const emit = defineEmits(['imageSelected', 'addEvent'])

const error = ref('')
const image = ref('')
const handleChange = (e) => {
  const file = e.target.files[0]
  image.value = file
  emit('imageSelected', image)
}

const addEvent = () => {
  if (
    !newEvent.title ||
    !newEvent.shortDesc ||
    !newEvent.longDesc ||
    !newEvent.date ||
    !newEvent.time ||
    !newEvent.price ||
    !newEvent.genre ||
    !newEvent.age ||
    !newEvent.performer ||
    !newEvent.address ||
    !newEvent.ticket ||
    !storeEvents.coverImgName ||
    !storeEvents.coverImg
  ) {
    error.value = 'Fill in every information or wait for image upload (5s)'
  } else {
    emit('addEvent')
    error.value = ''
    image.value = ''
  }
}
</script>

<template>
  <!-- Events -->
  <div class="my-[3rem] md:mt-[4rem]">
    <form class="sm:w-[500px] sm:mx-auto md:w-[645px] md:text-[1.5rem]" @submit.prevent="addEvent">
      <!-- Title input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Title</label>
        <div class="relative">
          <input
            class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            type="text"
            v-model="newEvent.title"
          />
          <div
            class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
          ></div>
        </div>
      </div>
      <!-- Short description input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]"
          >Short Description
          <span class="text-darkerText text-[1rem] italic">(15-25 words)</span></label
        >
        <div class="relative">
          <textarea
            class="w-[99%] h-[100px] bg-darkBG border-[1px] py-[.5rem] px-[1rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            name="message"
            placeholder="Short description.."
            v-model="newEvent.shortDesc"
          />
          <div
            class="w-[99%] h-[100px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%]"
          ></div>
        </div>
      </div>
      <!-- Detailed description input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Detailed Description</label>
        <div class="relative">
          <textarea
            class="w-[99%] h-[400px] bg-darkBG border-[1px] py-[.5rem] px-[1rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            name="message"
            placeholder="Detailed description.."
            v-model="newEvent.longDesc"
          />
          <div
            class="w-[99%] h-[400px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%]"
          ></div>
        </div>
      </div>
      <!-- Cover image input -->
      <div class="flex flex-col mb-[3.5rem] md:mb-[5.25rem]">
        <label class="font-[500]">Cover Image</label>
        <div class="relative">
          <label
            class="absolute bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none w-[100%] md:py-[.75rem] md:px-[1.25rem]"
          >
            <span>{{ image ? image.name : 'Choose File' }}</span>
            <input type="file" @change="handleChange" />
          </label>

          <div
            class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
          ></div>
        </div>
      </div>
      <!-- Date input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Date</label>
        <div class="relative">
          <input
            class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none select-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            type="date"
            v-model="newEvent.date"
          />
          <div
            class="w-[99%] h-[44px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[64px]"
          ></div>
        </div>
      </div>
      <!-- Time & Price input -->
      <div class="flex gap-[1rem] md:gap-[2rem]">
        <!-- Time input -->
        <div class="flex flex-col w-[100%] mb-[1rem] md:mb-[1.25rem]">
          <label class="font-[500]">Time</label>
          <div class="relative">
            <input
              class="w-[100%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none md:py-[.75rem] md:px-[1.25rem]"
              type="text"
              placeholder="e.g. 20:00"
              v-model="newEvent.time"
            />
            <div
              class="w-[100%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] md:h-[62px]"
            ></div>
          </div>
        </div>
        <!-- Price input -->
        <div class="flex flex-col w-[100%] mb-[1rem] md:mb-[1.25rem]">
          <label class="font-[500]">Price</label>
          <div class="relative">
            <input
              class="w-[98%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
              type="text"
              placeholder="e.g. 50,-"
              v-model="newEvent.price"
            />
            <div
              class="w-[98%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
            ></div>
          </div>
        </div>
      </div>
      <!-- Genre & Age input -->
      <div class="flex gap-[1rem] md:gap-[2rem]">
        <!-- Genre input -->
        <div class="flex flex-col w-[100%] mb-[1rem] md:mb-[1.25rem]">
          <label class="font-[500]">Genre</label>
          <div class="relative">
            <select
              class="w-[100%] h-[42px] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none md:h-[62px] md:py-[.75rem] md:px-[1.25rem]"
              v-model="newEvent.genre"
            >
              <option disabled>Genres..</option>
              <option value="manaclub">Mana Club</option>
              <option value="deft">Deft</option>
              <option value="dub">DUB</option>
              <option value="vertex">Vertex</option>
              <option value="other">Other</option>
            </select>

            <div
              class="w-[100%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] md:h-[62px]"
            ></div>
          </div>
        </div>
        <!-- Age input -->
        <div class="flex flex-col w-[100%] mb-[1rem] md:mb-[1.25rem]">
          <label class="font-[500]">Age</label>
          <div class="relative">
            <input
              class="w-[98%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
              type="text"
              placeholder="e.g. 16+"
              v-model="newEvent.age"
            />
            <div
              class="w-[98%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
            ></div>
          </div>
        </div>
      </div>
      <!-- Performer input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Performer</label>
        <div class="relative">
          <input
            class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            type="text"
            v-model="newEvent.performer"
          />
          <div
            class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
          ></div>
        </div>
      </div>
      <!-- Address input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Address</label>
        <div class="relative">
          <input
            class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            type="text"
            v-model="newEvent.address"
          />
          <div
            class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
          ></div>
        </div>
      </div>
      <!-- Ticket URL -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">URL for Tickets</label>
        <div class="relative">
          <input
            class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            type="url"
            v-model="newEvent.ticket"
          />
          <div
            class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
          ></div>
        </div>
      </div>
      <!-- Error -->
      <p class="pt-[.5rem] pl-[.5rem] text-[1rem] text-red-500">{{ error }}</p>
      <!-- Submit Button -->
      <button
        class="flex flex-col mt-[2.5rem] mx-auto text-[1rem] relative group sm:mt-[3rem]"
        type="submit"
      >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          >Add Event</span
        >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          >Add Event</span
        >
      </button>
    </form>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
}

input[type='file'] {
  display: none;
}

input[type='date']::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
  user-select: none;
}

input[type='date']::-moz-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
  user-select: none;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #606060;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #606060;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #606060;
}
</style>
