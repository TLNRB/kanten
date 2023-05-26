<script setup>
import { ref } from 'vue'

const selectedFile = ref('')
const handleFileChange = (event) => {
  const file = event.target.files[0]
  selectedFile.value = file
}
</script>

<template>
  <div class="my-[3rem] md:mt-[4rem]">
    <form class="sm:w-[500px] sm:mx-auto md:w-[645px] md:text-[1.5rem]">
      <!-- Genre input -->
      <div class="flex flex-col w-[100%] mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Genre</label>
        <div class="relative">
          <select
            class="w-[100%] h-[42px] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none md:h-[62px] md:py-[.75rem] md:px-[1.25rem]"
          >
            <option value="manaclub">Mana Club</option>
            <option value="deft">Deft</option>
            <option value="dub">DUB</option>
            <option value="vertex">Vertex</option>
          </select>

          <div
            class="w-[100%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] md:h-[62px]"
          ></div>
        </div>
      </div>
      <!-- Image input -->
      <div class="flex flex-col mb-[3.5rem] md:mb-[5.25rem]">
        <label class="font-[500]">Image</label>
        <div class="relative">
          <label
            class="absolute bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none w-[100%] md:py-[.75rem] md:px-[1.25rem]"
          >
            <span>{{ selectedFile ? selectedFile.name : 'Choose File' }}</span>
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
          />
          <div
            class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
          ></div>
        </div>
      </div>
      <!-- Submit Button -->
      <button class="flex flex-col mt-[2.5rem] mx-auto text-[1rem] relative group sm:mt-[3rem]">
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
