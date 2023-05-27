<script setup>
import { ref } from 'vue'

/* Props */
const { newGenre, storeGenres } = defineProps(['newGenre', 'storeGenres'])

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
    !newGenre.title ||
    !newGenre.genre ||
    (!storeGenres.coverImgName && storeGenres.coverImg) ||
    (storeGenres.coverImgName && !storeGenres.coverImg)
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
    (storeGenres.coverImgName && storeGenres.coverImg) ||
    (!storeGenres.coverImgName && !storeGenres.coverImg)
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
    <!-- Cover image input -->
    <div class="flex flex-col mb-[3.5rem]">
      <label class="font-[500]">Cover Image</label>
      <div class="relative">
        <label class="absolute bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none w-[100%]">
          <span>{{ image ? image.name : newGenre.coverImgName }}</span>
          <input type="file" @change="handleChange" />
        </label>

        <div
          class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%]"
        ></div>
      </div>
    </div>
    <!-- Genre input -->
    <div class="flex flex-col w-[100%] mb-[1rem]">
      <label class="font-[500]">Genre</label>
      <div class="relative">
        <select
          class="w-[100%] h-[42px] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none"
          v-model="newGenre.genre"
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
    <!-- Title input -->
    <div class="flex flex-col mb-[1rem]">
      <label class="font-[500]">Title</label>
      <div class="relative">
        <input
          class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%]"
          type="text"
          v-model="newGenre.title"
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
input[type='file'] {
  display: none;
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
