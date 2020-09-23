import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {
      userId: '',
      userIp: '', // ?
      userNameFull: '',
      userNameShort: '',
      userAccess: '',
    },
    // userProfile: {
    //   userId: '3',
    //   userIp: '10.38.0.112', // ?
    //   userNameFull: 'Dontsov Denis Aleksandrovich',
    //   userNameShort: 'Dontsov D.A.',
    //   userLevelAccess: 'opfr',
    // },
    // systemout: {
    //   text: 'Hello', 
    //   status: 'default',
      
    // }
  },
  mutations: {
    setUserProfile(state, option) {
      state.userProfile.userId = option.userId;
      state.userProfile.userIp = option.userIp;
      state.userProfile.userNameFull = option.userNameFull;
      state.userProfile.userNameShort = option.userNameShort;
      state.userProfile.userLevelAccess = option.userLevelAccess;
    }
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
