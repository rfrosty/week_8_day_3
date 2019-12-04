<template lang="html">
  <form v-on:submit="addGuest" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required>

    <label for="emailAddress">Email:</label>
    <input type="text" id="emailAddress" v-model="emailAddress">

    <label for="true">Checked In</label>
    <input type="radio" id="true" v-model="emailAddress" value="true">

    <label for="false">Not Checked In</label>
    <input type="radio" id="false" v-model="emailAddress" value="false">
  </form>
</template>

<script>
import {eventBus} from '../main.js'
import GuestService from '../services/GuestService.js'

export default {
  name: "guest-form",
  data(){
    return {
      name: '',
      emailAddress: '',
      checkInStatus: false
    }
  },
  methods: {
    addGuest(event){
      event.preventDefault()
      const guest = {
        name: this.name,
        emailAddress: this.emailAddress,
        checkInStatus: this.checkInStatus
      }
      GuestService.postGuest(guest)
        .then(res => eventBus.$emit('guest-added', res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
