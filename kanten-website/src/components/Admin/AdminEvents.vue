<script setup>
import { reactive } from 'vue'
</script>

<template>
  <!-- Events -->
  <div class="my-[3rem] md:mt-[4rem]">
    <form class="sm:w-[500px] sm:mx-auto md:w-[645px] md:text-[1.5rem]">
      <!-- Name input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Name</label>
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
      <!-- Email input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Email</label>
        <div class="relative">
          <input
            class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            type="email"
          />
          <div
            class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
          ></div>
        </div>
      </div>
      <!-- Phone input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Phone</label>
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
      <!-- Address input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Address</label>
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
      <!-- Postnumber & City input -->
      <div class="flex gap-[1rem] md:gap-[2rem]">
        <!-- Postnumber input -->
        <div class="flex flex-col w-[100%] mb-[1rem] md:mb-[1.25rem]">
          <label class="font-[500]">Postnumber</label>
          <div class="relative">
            <input
              class="w-[100%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none md:py-[.75rem] md:px-[1.25rem]"
              type="text"
            />
            <div
              class="w-[100%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] md:h-[62px]"
            ></div>
          </div>
        </div>
        <!-- City input -->
        <div class="flex flex-col w-[100%] mb-[1rem] md:mb-[1.25rem]">
          <label class="font-[500]">City</label>
          <div class="relative">
            <input
              class="w-[98%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
              type="text"
            />
            <div
              class="w-[98%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
            ></div>
          </div>
        </div>
      </div>
      <!-- Date input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Date</label>
        <div class="relative">
          <input
            class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none select-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            type="date"
          />
          <div
            class="w-[99%] h-[44px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[64px]"
          ></div>
        </div>
      </div>
      <!-- SUbmit Button -->
      <button class="flex flex-col mt-[2.5rem] mx-auto text-[1rem] relative group sm:mt-[3rem]">
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
</style>
