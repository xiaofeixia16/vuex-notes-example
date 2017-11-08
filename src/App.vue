<template>
  <div id="app">
    <Notes></Notes>
  </div>
</template>

<script>

import Notes from './components/Notes'
import 'semantic-ui-css/semantic.min.css'

export default {
  name: 'app',
  components: {
    Notes
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
