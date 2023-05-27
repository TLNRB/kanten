<script setup>
import { ref } from 'vue'

/* Props */
const { newEvent, storeEvents } = defineProps(['newEvent', 'storeEvents'])

/* Emits */
const emit = defineEmits(['saved', 'canceled', 'imageSelected'])

const error = ref('')
const image = ref('')
const handleChange = (e) => {
  const file = e.target.files[0]
  image.value = file
  emit('imageSelected', image)
}

const saveChanges = () => {
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
    (!storeEvents.coverImgName && storeEvents.coverImg) ||
    (storeEvents.coverImgName && !storeEvents.coverImg)
  ) {
    error.value = 'Fill in every information or wait for image upload (5s)'
  } else {
    emit('saved')
    error.value = ''
    image.value = ''
  }
}

const cancelChanges = () => {
  if (
    (storeEvents.coverImgName && storeEvents.coverImg) ||
    (!storeEvents.coverImgName && !storeEvents.coverImg)
  ) {
    emit('canceled')
    error.value = ''
    image.value = ''
  } else {
    error.value = 'Wait for image upload'
  }
}
</script>

<template>
  <form class="w-[250px] mx-auto my-[3rem] sm:w-[500px] sm:mx-auto" @submit.prevent="saveChanges">
    <!-- Title input -->
    <div class="flex flex-col mb-[1rem]">
      <label class="font-[500]">Title</label>
      <div class="relative">
        <input
          class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%]"
          type="text"
          v-model="newEvent.title"
        />
        <div
          class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%]"
        ></div>
      </div>
    </div>
    <!-- Short description input -->
    <div class="flex flex-col mb-[1rem]">
      <label class="font-[500]">Short Description</label>
      <div class="relative">
        <textarea
          class="w-[99%] h-[100px] bg-darkBG border-[1px] py-[.5rem] px-[1rem] outline-none sm:w-[100%]"
          name="message"
          placeholder="Short description (15-25 words).."
          v-model="newEvent.shortDesc"
        />
        <div
          class="w-[99%] h-[100px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%]"
        ></div>
      </div>
    </div>
    <!-- Detailed description input -->
    <div class="flex flex-col mb-[1rem]">
      <label class="font-[500]">Detailed Description</label>
      <div class="relative">
        <textarea
          class="w-[99%] h-[400px] bg-darkBG border-[1px] py-[.5rem] px-[1rem] outline-none sm:w-[100%]"
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
    <div class="flex flex-col mb-[3.5rem]">
      <label class="font-[500]">Cover Image</label>
      <div class="relative">
        <label class="absolute bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none w-[100%]">
          <span>{{ image ? image.name : newEvent.coverImgName }}</span>
          <input type="file" @change="handleChange" />
        </label>

        <div
          class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%]"
        ></div>
      </div>
    </div>
    <!-- Date input -->
    <div class="flex flex-col mb-[1rem]">
      <label class="font-[500]">Date</label>
      <div class="relative">
        <input
          class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none select-none sm:w-[100%]"
          type="date"
          v-model="newEvent.date"
        />
        <div
          class="w-[99%] h-[44px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%]"
        ></div>
      </div>
    </div>
    <!-- Time & Price input -->
    <div class="flex gap-[1rem]">
      <!-- Time input -->
      <div class="flex flex-col w-[100%] mb-[1rem]">
        <label class="font-[500]">Time</label>
        <div class="relative">
          <input
            class="w-[100%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none"
            type="text"
            placeholder="e.g. 20:00"
            v-model="newEvent.time"
          />
          <div
            class="w-[100%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1]"
          ></div>
        </div>
      </div>
      <!-- Price input -->
      <div class="flex flex-col w-[100%] mb-[1rem]">
        <label class="font-[500]">Price</label>
        <div class="relative">
          <input
            class="w-[98%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%]"
            type="text"
            placeholder="e.g. 50,-"
            v-model="newEvent.price"
          />
          <div
            class="w-[98%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%]"
          ></div>
        </div>
      </div>
    </div>
    <!-- Genre & Age input -->
    <div class="flex gap-[1rem]">
      <!-- Genre input -->
      <div class="flex flex-col w-[100%] mb-[1rem]">
        <label class="font-[500]">Genre</label>
        <div class="relative">
          <select
            class="w-[100%] h-[42px] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none"
            v-model="newEvent.genre"
          >
            <option value="manaClub">Mana Club</option>
            <option value="vertex">Vertex</option>
            <option value="deft">Deft</option>
            <option value="dub">DUB</option>
            <option value="other">Other</option>
          </select>

          <div
            class="w-[100%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1]"
          ></div>
        </div>
      </div>
      <!-- Age input -->
      <div class="flex flex-col w-[100%] mb-[1rem]">
        <label class="font-[500]">Age</label>
        <div class="relative">
          <input
            class="w-[98%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%]"
            type="text"
            placeholder="e.g. 16+"
            v-model="newEvent.age"
          />
          <div
            class="w-[98%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%]"
          ></div>
        </div>
      </div>
    </div>
    <!-- Performer input -->
    <div class="flex flex-col mb-[1rem]">
      <label class="font-[500]">Performer</label>
      <div class="relative">
        <input
          class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%]"
          type="text"
          v-model="newEvent.performer"
        />
        <div
          class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%]"
        ></div>
      </div>
    </div>
    <!-- Address input -->
    <div class="flex flex-col mb-[1rem]">
      <label class="font-[500]">Address</label>
      <div class="relative">
        <input
          class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%]"
          type="text"
          v-model="newEvent.address"
        />
        <div
          class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%]"
        ></div>
      </div>
    </div>
    <!-- Ticket URL -->
    <div class="flex flex-col mb-[1rem]">
      <label class="font-[500]">URL for Tickets</label>
      <div class="relative">
        <input
          class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%]"
          type="url"
          v-model="newEvent.ticket"
        />
        <div
          class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%]"
        ></div>
      </div>
    </div>
    <!-- Error -->
    <p class="pt-[.5rem] pl-[.5rem] text-[1rem] text-red-500">{{ error }}</p>
    <!-- Submit Button -->
    <div class="flex gap-[1.5rem] justify-center mx-auto text-[1.25rem] px-[.5rem]">
      <button type="submit" class="flex flex-col mt-[1.5rem] w-fit text-[1rem] relative group">
        <span
          class="font-[500] py-[.25rem] px-[1rem] border-[1px] bg-green-700 border-green-700 z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
          >Yes</span
        >
        <span
          class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
          >Yes</span
        >
      </button>
      <button
        type="button"
        class="flex flex-col mt-[1.5rem] w-fit text-[1rem] relative group"
        @click="cancelChanges"
      >
        <span
          class="font-[500] py-[.25rem] px-[1rem] border-[1px] bg-red-700 border-red-700 z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s]"
          >No</span
        >
        <span
          class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s]"
          >No</span
        >
      </button>
    </div>
  </form>
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
