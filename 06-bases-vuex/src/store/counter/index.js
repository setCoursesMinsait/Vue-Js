import getRandomInt from "../../helpers/getRandomInt";

const counterStore = {
  //TODO: falta algo
  namespaced: true,
  state: () =>( {
    count: 1,
    lastMutation: 'none',
    isLoading: false,
    lastRandomInt: 0
  }),

  mutations: {
      increment( state ){
        state.count++
        state.lastMutation = 'increment'
      },
      incrementBy( state, val ){
        state.count += val
        state.lastMutation = 'incrementBy ' + val
        state.lastRandomInt = val
      },
      setLoading( state, val ){
        state.isLoading = val
        state.lastMutation = 'setLoading' + val
      }
  },

  actions: {
    async incrementRandomInt( {commit} ) {

      commit( 'setLoading', true )

      const randomInt = await getRandomInt()

      commit('incrementBy', randomInt)
      commit('setLoading', false)
    }
  },

  getters: {
    squareCount( state ){
      return state.count * state.count
    }
  }
}

export default counterStore