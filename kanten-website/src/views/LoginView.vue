<script setup>
import { reactive } from 'vue'
import { useStoreAuth } from '../stores/storeAuth.js'

/*----- Store -----*/
const storeAuth = useStoreAuth()

const credentials = reactive({
  email: '',
  password: '',
  error: ''
})

const onLogin = () => {
  if (!credentials.email || !credentials.password) {
    credentials.error = 'enter and email or password'
  } else {
    storeAuth.loginUser(credentials.email, credentials.password)
  }
  credentials.email = ''
  credentials.password = ''
}
</script>

<template>
  <section
    class="relative overflow-hidden flex flex-col justify-center mt-[6.875rem] py-[10rem] px-[1rem] md:mt-[7.875rem] md:px-[4rem] md:pb-[6rem] lg:pt-[4rem] xl:mt-[8.375rem] xxl:px-[12.5rem]"
  >
    <h1
      class="flex items-center justify-center relative mx-auto text-[2rem] uppercase xs:text-[2.5rem] md:text-[5rem] leading-none"
    >
      <span class="font-bold text-baseColor z-[1]">Login</span>
      <span class="font-bold absolute top-[1.5px] left-[1.5px] z-[0] md:top-[2.5px] md:left-[2.5px]"
        >Login</span
      >
    </h1>

    <form class="sm:w-[500px] sm:mx-auto md:w-[645px] md:text-[1.5rem]" @submit.prevent="onLogin">
      <!-- Email input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Email</label>
        <div class="relative">
          <input
            class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            type="email"
            v-model="credentials.email"
          />
          <div
            class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
          ></div>
        </div>
      </div>
      <!-- Password input -->
      <div class="flex flex-col mb-[1rem] md:mb-[1.25rem]">
        <label class="font-[500]">Password</label>
        <div class="relative">
          <input
            class="w-[99%] bg-darkBG border-[1px] px-[1rem] py-[.5rem] outline-none sm:w-[100%] md:py-[.75rem] md:px-[1.25rem]"
            type="password"
            v-model="credentials.password"
          />
          <div
            class="w-[99%] h-[42px] border-[1px] border-baseColor absolute top-[6px] left-[6px] z-[-1] sm:w-[100%] md:h-[62px]"
          ></div>
        </div>
      </div>
      <!-- Submit Button -->
      <button
        class="flex flex-col mt-[2.5rem] mx-auto text-[1rem] relative group sm:mt-[3rem]"
        type="submit"
      >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-darkBG border-baseColor z-[1] group-hover:text-baseColor group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          >Login</span
        >
        <span
          class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
          >Login</span
        >
      </button>
    </form>
  </section>
</template>

<style scoped></style>
