import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    systemout: {
      text: 'Hello', 
      status: 'default',
      
    }
  },
  mutations: {
    systemoutState(state, systemoutProps) { 
      state.systemout.text = systemoutProps.text; 
      state.systemout.status = systemoutProps.status; 
      setTimeout(() => {
        state.systemout.text = '';
        state.systemout.status = 'default'
      }, 5000);
    },
  },
  actions: {
  },
  modules: {
  }
})
