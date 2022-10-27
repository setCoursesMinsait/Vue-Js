
<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.counter.count}} </h2>
  <h2>Computed: {{ countComputed }} </h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">random</button>

  <h1>Map State</h1>
  <h1>mapState: {{ count }} </h1>
  <h1>lastMutation: {{ lastMutation }} </h1>

  <h2>Direct Getter: {{ $store.getters.squareCount }} </h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
      countComputed(){
          return this.$store.state.counter.count
    },
    ...mapState('counter',['count', 'lastMutation', 'isLoading'])
    //   count: state => state.count,
    //   lastMutation: state => state.lastMutation
    // })
  },

  methods: {
    increment(){
      this.$store.commit('counter/increment')
    },

    incrementBy(){
      this.$store.commit('counter/incrementBy',5)
    },
    ...mapActions('counter',['incrementRandomInt'])
    // incrementRandomInt(){
    //   this.$store.dispatch( 'incrementRandomInt' )
    // }

  }

}
</script>