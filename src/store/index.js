import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // userProfile: {
    //   userId: '',
    //   userIp: '', // ?
    //   userFullName: '',
    //   userShortName: '',
    //   userAccess: '',
    // },
    userProfile: {
      userId: '3',
      userIp: '10.38.0.112', // ?
      userFullName: 'Dontsov Denis Aleksandrovich',
      userShortName: 'Dontsov D.A.',
      userLevelAccess: 'opfr',
    },
    // systemout: {
    //   text: 'Hello', 
    //   status: 'default',
      
    // }
  },
  mutations: {
    // systemoutState(state, systemoutProps) { 
    //   state.systemout.text = systemoutProps.text; 
    //   state.systemout.status = systemoutProps.status; 
    //   console.log(systemoutProps.status);
    //   if (systemoutProps.status != 'information') {
    //     setTimeout(() => {
    //       state.systemout.text = '';
    //       state.systemout.status = 'default'
    //     }, 5000);
    //   }
    // },
  },
  actions: {
  },
  modules: {
  }
})
