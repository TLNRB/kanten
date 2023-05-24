<script setup>
const { event } = defineProps(['event'])
</script>

<template>
  <!-- Events -->
  <div>
    <div
      class="flex flex-col gap-[1rem] w-[260px] bg-darkBG items-center border-[1px] border-baseColor p-[.75rem] xs:w-[325px] sm:w-[460px] md:gap-[1.5rem]"
    >
      <!-- Cover Image -->
      <img :src="event.coverImg" alt="" />
      <!-- Title -->
      <div class="flex flex-col mr-auto text-[1.25rem] px-[.75rem]">
        <p class="font-[500] text-baseColor">Title:</p>
        <p class="font-[500]">{{ event.title }}</p>
      </div>
      <!-- Short Desc -->
      <div class="flex flex-col mr-auto text-[1.25rem] px-[.5rem]">
        <p class="font-[500] text-baseColor">Short Description:</p>
        <p class="font-[500]">{{ event.shortDesc }}</p>
      </div>
      <!-- Long Desc -->
      <div class="flex flex-col mr-auto text-[1.25rem] px-[.5rem]">
        <p class="font-[500] text-baseColor">Long Description:</p>
        <p class="font-[500]">{{ event.longDesc }}</p>
      </div>
      <!-- Date -->
      <div class="flex flex-col mr-auto text-[1.25rem] px-[.5rem]">
        <p class="font-[500] text-baseColor">Date:</p>
        <p class="font-[500]">{{ event.date }}</p>
      </div>
      <!-- Time -->
      <div class="flex flex-col mr-auto text-[1.25rem] px-[.5rem]">
        <p class="font-[500] text-baseColor">Time:</p>
        <p class="font-[500]">{{ event.time }}</p>
      </div>
      <!-- Price -->
      <div class="flex flex-col mr-auto text-[1.25rem] px-[.5rem]">
        <p class="font-[500] text-baseColor">Price:</p>
        <p class="font-[500]">{{ event.price }}</p>
      </div>
      <!-- Genre -->
      <div class="flex flex-col mr-auto text-[1.25rem] px-[.5rem]">
        <p class="font-[500] text-baseColor">Genre:</p>
        <p class="font-[500]">{{ event.genre }}</p>
      </div>
      <!-- Age -->
      <div class="flex flex-col mr-auto text-[1.25rem] px-[.5rem]">
        <p class="font-[500]">{{ event.age }}</p>
      </div>
      <!-- Performer -->
      <div class="flex flex-col mr-auto text-[1.25rem] px-[.5rem]">
        <p class="font-[500] text-baseColor">Performer:</p>
        <p class="font-[500]">{{ event.performer }}</p>
      </div>
      <!-- Address -->
      <div class="flex flex-col mr-auto text-[1.25rem] px-[.5rem]">
        <p class="font-[500] text-baseColor">Address:</p>
        <p class="font-[500]">{{ event.address }}</p>
      </div>
      <!-- Ticket -->
      <div class="flex flex-col mr-auto text-[1.25rem] px-[.5rem]">
        <p class="font-[500] text-baseColor">Ticket URL:</p>
        <a class="font-[500]" :href="event.ticketURL" target="_blank">{{ event.ticketURL }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
