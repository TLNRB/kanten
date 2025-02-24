<script setup>
import { reactive } from 'vue'
import jQuery from 'jquery'
/* import $ from 'jquery' */

// Add the JavaScript code here
;(function ($) {
  window.fnames = new Array()
  window.ftypes = new Array()
  fnames[1] = 'FNAME'
  ftypes[1] = 'text'
  fnames[2] = 'LNAME'
  ftypes[2] = 'text'
  fnames[0] = 'EMAIL'
  ftypes[0] = 'email'
})(jQuery)
var $mcj = jQuery.noConflict(true)

/*----- Newsletter-----*/
//V-model volunteer info storing
const newsletter = reactive({
  firstName: '',
  lastName: '',
  email: ''
})

let timeout

//Clear values newsletter
const valueClear = () => {
  newsletter.firstName = ''
  newsletter.lastName = ''
  newsletter.email = ''
  clearTimeout(timeout)
}

//Add Volunteer
const addNewsletter = () => {
  timeout = setTimeout(valueClear, 1500)
}
</script>

<template>
  <section
    class="flex flex-col pt-[4rem] pb-[3rem] px-[1rem] md:pb-[4rem] md:px-[4rem] lg:py-[6rem] xxl:px-[12.5rem] overflow-x-hidden"
  >
    <h3
      class="text-[2rem] font-bold uppercase leading-none mb-[2rem] mx-auto md:mb-[4rem] md:text-[5rem]"
    >
      Stay In The<br />
      <p class="flex flex-col items-center relative w-fit mx-auto">
        <span
          class="text-[2rem] text-baseColor font-bold uppercase leading-none z-[1] md:text-[5rem]"
          >Groove</span
        >
        <span
          class="text-[2rem] font-bold uppercase leading-none absolute top-[1.5px] left-[1.5px] z-0 md:text-[5rem] md:top-[2.5px] md:left-[2.5px]"
          >Groove</span
        >
      </p>
    </h3>
    <p
      class="text-[1.25rem] leading-tight mb-[1.5rem] sm:w-[525px] sm:mx-auto md:text-[1.75rem] md:w-[630px] md:mb-[2rem] xl:w-[75%]"
    >
      Join our exclusive newsletter to never miss a beat. Be the first to know about upcoming events
      and special promotions, delivered straight to your inbox.
    </p>
    <p
      class="text-[1.25rem] font-semibold leading-tight mb-[2rem] sm:w-[525px] sm:mx-auto md:text-[1.75rem] md:w-[630px] md:mb-[4rem] xl:w-[75%]"
    >
      Sign up now and be part of the pulse of Kanten!
    </p>
    <form
      action="https://easv365.us21.list-manage.com/subscribe/post?u=3a19b897ead04d1b8b178747e&amp;id=a998603a54&amp;f_id=006655e1f0"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
      novalidate
      class="flex flex-col items-center pl-[1.5rem] pt-[1rem] pb-[2rem] border-[1px] border-baseColor relative xs:pl-[2.5rem] sm:w-[525px] sm:mx-auto sm:pl-[3rem] md:w-[630px] md:pb-[4rem] md:pt-[2rem] xl:w-[700px]"
    >
      <div class="w-[85%] xs:w-[91.5%] sm:w-[92%] xl:w-[92.5%]">
        <input
          class="w-[100%] mb-[1rem] text-[1rem] py-[.25rem] border-b-[1px] border-baseColor bg-transparent outline-none sm:text-[1.125rem] sm:py-[.5rem] md:text-[1.25rem] md:py-[.75rem]"
          type="text"
          name="FNAME"
          required
          placeholder="First name"
          v-model="newsletter.firstName"
        />
        <input
          class="w-[100%] mb-[1rem] text-[1rem] py-[.25rem] border-b-[1px] border-baseColor bg-transparent outline-none sm:text-[1.125rem] sm:py-[.5rem] md:text-[1.25rem] md:py-[.75rem]"
          type="text"
          name="LNAME"
          required
          placeholder="Last name"
          v-model="newsletter.lastName"
        />
        <input
          class="w-[100%] py-[.25rem] text-[1rem] border-b-[1px] border-baseColor bg-transparent outline-none sm:text-[1.125rem] sm:py-[.5rem] md:text-[1.25rem] md:py-[.75rem]"
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          required
          placeholder="Email"
          v-model="newsletter.email"
        />
      </div>
      <div
        class="absolute translate-y-[3.25rem] right-[-4.5rem] sm:translate-y-[4.25rem] sm:right-[-5.5em] md:right-[-7.75rem] md:translate-y-[5.5rem] rotate-[-90deg] w-[181px] sm:w-[214px] md:w-[295px]"
      >
        <button
          class="flex flex-col text-[1.25rem] relative group"
          type="submit"
          name="subscribe"
          @click="addNewsletter"
        >
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] uppercase border-[1px] bg-baseColor border-baseColor z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem] w-[181px] sm:w-[214px] md:w-[295px]"
            >Send</span
          ><span
            class="font-[600] py-[.375rem] px-[1.125rem] uppercase border-[1px] border-lightText absolute top-[4px] right-[4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem] w-[181px] sm:w-[214px] md:w-[295px]"
            >Send</span
          >
        </button>
      </div>
    </form>
    <p v-if="message">{{ message }}</p>
  </section>
</template>

<style scoped>
.fname {
  background-color: transparent;
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
