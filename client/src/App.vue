<template>
  <div id="app">
    <guest-form></guest-form>
    <guest-grid/>
  </div>
</template>

<script>
import GuestGrid from './components/GuestGrid.vue';
import GuestForm from './components/Form.vue';

export default {
  name: 'app',
  components: {
    'guest-grid': GuestGrid,
    'guest-form': GuestForm
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
