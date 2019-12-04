<template lang="html">
  <div>
    <h2>{{guest.name}}</h2>
    <p>Email Address: {{guest.emailAddress}}</p>
    <p v-if="guest.checkInStatus">Checked In</p>
    <!-- <p>I'm a guest card</p> -->
  </div>
</template>

<script>
import GuestService from '../services/GuestService.js'


export default {
  name: 'guest-card',
  props: ['guest']
}
</script>

<style lang="css" scoped>
</style>
