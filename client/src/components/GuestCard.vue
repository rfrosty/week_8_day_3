<template lang="html">
  <div>
    <h2>{{guest.name}}</h2>
    <p>Email Address: {{guest.emailAddress}}</p>
    <p v-if="guest.checkInStatus === 'true' ">Checked In</p>
    <p v-else="">Not Checked In</p>
    <button type="button" v-on:click="deleteGuest">Delete</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import GuestService from '../services/GuestService.js'


export default {
  name: 'guest-card',
  props: ['guest'],
  methods: {
    deleteGuest(){
      GuestService.deleteGuest(this.guest._id)
        .then(() => eventBus.$emit('guest-deleted', this.guest._id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
