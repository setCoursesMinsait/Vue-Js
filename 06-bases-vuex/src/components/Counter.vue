<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct Access: {{ $store.state.count }} </h2>
  <!-- <h2>Computed: {{ countComputed }} </h2> -->
  <h1>mapState</h1>
  <h2>mapState: {{count}}</h2>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['count'])
  // computed: {
  //   countComputed() {
  //     return this.$store.state.count
  //   }
  // }
}
</script>