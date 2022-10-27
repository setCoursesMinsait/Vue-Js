<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MyCounter />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: { 
    MyCounter: defineAsyncComponent( () => import('@/components/MyCounters.vue'))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
