<script setup>
import { ref } from 'vue'
/* ---------- Importing Section Components ---------- */
import Event from '../components/EventView/Event.vue'
import Items from '../components/EventView/Items.vue';
/* ---------- Importing Images ---------- */
import event1 from '../images/event1.png'
import event2 from '../images/event2.png'
import event3 from '../images/event3.png'
import event4 from '../images/event4.png'
</script>

<template>
  <Event />
  <Items :event1="event1" :event2="event2" :event3="event3" :event4="event4" /> 

</template>

<style scoped></style>
