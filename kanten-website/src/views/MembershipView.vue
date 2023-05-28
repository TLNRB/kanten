<script setup>
import { ref, reactive } from 'vue'
import Successful from '../components/Successful.vue'
/* import zebraPattern from '../images/zebraPattern.svg' */

/*----- Sign Up -----*/
//V-model member info storing
const newMember = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  postnumber: '',
  city: '',
  birthday: ''
})

//Values
const text = 'We are pleased to welcome you as our newest member at Kanten.'
const error = ref('')
const signedUp = ref(false)

//Clear values events
const valueClear = () => {
  newMember.name = ''
  newMember.email = ''
  newMember.phone = ''
  newMember.address = ''
  newMember.postnumber = ''
  newMember.city = ''
  newMember.birthday = ''

  error.value = ''
}

//Add Member
const addMember = () => {
  if (
    !newMember.name ||
    !newMember.email ||
    !newMember.phone ||
    !newMember.address ||
    !newMember.postnumber ||
    !newMember.city ||
    !newMember.birthday
  ) {
    error.value = 'Fill in all the required fields!'
  } else {
    openModal()
    valueClear()
  }
}

//Open Modal
const openModal = () => {
  signedUp.value = true
}

//Close Modal
const closeModal = () => {
  signedUp.value = false
}
</script>

<template>
  <section
    v-if="!signedUp"
    class="relative overflow-hidden min-h-[100vh] flex flex-col justify-center pt-[6.875rem] pb-[4rem] px-[1rem] xs:pt-[7.875rem] md:px-[4rem] md:pt-[9.875rem] md:pb-[5rem] xl:pt-[11rem] xl:pb-[6rem] xxl:px-[12.5rem]"
  >
    <div class="flex flex-col items-center justify-center w-[240px] mx-auto my-[1rem] md:w-[645px]">
      <p class="text-[1.25rem] font-semibold mr-auto leading-tight md:text-[3rem] md:leading-none">
        Become a
      </p>
      <h1
        class="flex flex-col relative text-[2rem] uppercase xs:text-[2.5rem] md:text-[5rem] leading-none"
      >
        <span class="font-bold text-baseColor z-[1]">Member</span>
        <span
          class="font-bold absolute top-[1.5px] left-[1.5px] z-[0] md:top-[2.5px] md:left-[2.5px]"
          >Member</span
        >
      </h1>
      <p
        class="text-[1.25rem] font-semibold text-baseColor ml-auto leading-tight md:text-[3rem] md:leading-none"
      >
        of Kanten
      </p>
    </div>
    <form class="sm:w-[500px] sm:mx-auto md:w-[645px] md:text-[1.5rem]" @submit.prevent="addMember">
      <!-- Name input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Name</label>
        <div class="relative">
          <input
            class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            type="text"
            v-model="newMember.name"
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
            v-model="newMember.email"
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
            v-model="newMember.phone"
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
            v-model="newMember.address"
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
              v-model="newMember.postnumber"
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
              v-model="newMember.city"
            />
            <div
              class="w-[98%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
            ></div>
          </div>
        </div>
      </div>
      <!-- Birthday input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Birthday</label>
        <div class="relative">
          <input
            class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none select-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            type="date"
            v-model="newMember.birthday"
          />
          <div
            class="w-[99%] h-[44px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[64px]"
          ></div>
        </div>
      </div>
      <!-- Error -->
      <p
        class="flex justify-center items-center text-[1rem] text-red-500 md:text-[1.25rem]"
        :class="{ 'mt-[2rem]': error }"
      >
        {{ error }}
      </p>
      <!-- SUbmit Button -->
      <button
        class="flex flex-col mt-[2.5rem] mx-auto text-[1rem] relative group sm:mt-[3rem]"
        type="submit"
      >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          >Sign Up</span
        >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          >Sign Up</span
        >
      </button>
    </form>
    <img class="absolute left-0 right-0 bottom-0" :src="zebraPattern" alt="" />
  </section>
  <!-- Successful modal -->
  <Successful v-else :text="text" @close-modal="closeModal" />
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
