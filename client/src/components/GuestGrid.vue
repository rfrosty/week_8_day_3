<template lang="html">
  <div>
    <guest-card v-for="(guest, index) in guests" :key="index" :guest="guest"/>
  </div>
</template>

<script>
import GuestService from '../services/GuestService.js';
import GuestCard from './GuestCard.vue';
import {eventBus} from '../main.js'

export default {
  data(){
  return {
    guests: []
  };
},
mounted(){
  GuestService.getGuests()
    .then(guests => this.guests = guests);

  eventBus.$on('guest-added', (guest) => {
    this.guests.push(guest)
  })
},
components: {
  'guest-card': GuestCard
}
}
</script>

<style lang="css" scoped>
</style>
