import { createStore } from 'vuex' //importando el create store
import counterStore from './counter'

export default createStore({
  

  modules: {
    counter: counterStore
  }

})