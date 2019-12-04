<template>
  <div id="app">
    <guest-grid/>
  </div>
</template>

<script>
import GuestGrid from './components/GuestGrid.vue';

export default {
  name: 'app',
  components: {
    'guest-grid': GuestGrid
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
