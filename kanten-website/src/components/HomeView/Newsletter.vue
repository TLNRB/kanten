<script setup></script>

<template>
  <section
    class="flex flex-col py-[4rem] px-[1rem] md:px-[4rem] lg:py-[6rem] xxl:px-[12.5rem] overflow-x-hidden"
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
      class="flex items-center pl-[1.5rem] pt-[1rem] pb-[2rem] border-[1px] border-baseColor relative xs:pl-[2.5rem] sm:w-[525px] sm:mx-auto sm:pl-[3rem] md:w-[630px] md:pb-[4rem] md:pt-[2rem] xl:w-[700px]"
    >
      <div class="w-[85%] xs:w-[92.5%] sm:w-[91%] xl:w-[92.5%]">
        <input
          class="w-[100%] mb-[1rem] text-[1rem] py-[.25rem] border-b-[1px] border-baseColor bg-transparent outline-none sm:text-[1.125rem] sm:py-[.5rem] md:text-[1.25rem] md:py-[.75rem]"
          type="text"
          placeholder="Full name"
        />
        <input
          class="w-[100%] py-[.25rem] text-[1rem] border-b-[1px] border-baseColor bg-transparent outline-none sm:text-[1.125rem] sm:py-[.5rem] md:text-[1.25rem] md:py-[.75rem]"
          type="email"
          placeholder="Email"
        />
      </div>
      <div
        class="absolute translate-y-[.5rem] right-[-2.8rem] sm:right-[-3.5rem] md:right-[-5.5rem] md:translate-y-[1rem]"
      >
        <button class="flex flex-col text-[1.25rem] relative group">
          <span
            class="font-[600] py-[.375rem] px-[1.125rem] rotate-[-90deg] uppercase w-[132px] border-[1px] bg-baseColor border-baseColor z-[1] group-hover:border-lightText ease-in duration-[.15s] delay-[.05s] sm:w-[154px] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem] md:w-[224px]"
            >Send</span
          ><span
            class="font-[600] py-[.375rem] px-[1.125rem] rotate-[-90deg] uppercase w-[132px] border-[1px] border-lightText absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] sm:w-[154px] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem] md:w-[224px]"
            >Send</span
          >
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped></style>
