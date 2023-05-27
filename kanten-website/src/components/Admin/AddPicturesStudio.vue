<script setup>
import { ref } from 'vue'

const { newStudio, storeStudio } = defineProps(['newStudio', 'storeStudio'])

const emit = defineEmits(['imageSelected', 'addStudio'])

const error = ref('')
const image = ref('')
const handleFileChange = (e) => {
  const file = e.target.files[0]
  image.value = file
  emit('imageSelected', image)
}

const addStudio = () => {
  if (!newStudio.title || !storeStudio.coverImgName || !storeStudio.coverImg) {
    error.value = 'Fill in every information or wait for image upload (5s)'
  } else {
    emit('addStudio')
    error.value = ''
    image.value = ''
  }
}
</script>

<template>
  <!-- Events -->
  <div class="my-[3rem] md:mt-[4rem]">
    <form class="sm:w-[500px] sm:mx-auto md:w-[645px] md:text-[1.5rem]" @submit.prevent="addStudio">
      <!-- Image input -->
      <div class="flex flex-col mb-[3.5rem] md:mb-[5.25rem]">
        <label class="font-[500]">Image</label>
        <div class="relative">
          <label
            class="absolute bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none w-[100%] md:py-[.75rem] md:px-[1.25rem]"
          >
            <span>{{ image ? image.name : 'Choose File' }}</span>
            <input type="file" @change="handleFileChange" />
          </label>

          <div
            class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
          ></div>
        </div>
      </div>
      <!-- Title input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Title</label>
        <div class="relative">
          <input
            class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            type="text"
            v-model="newStudio.title"
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
          >Add Picture</span
        >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          >Add Picture</span
        >
      </button>
    </form>
  </div>
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
