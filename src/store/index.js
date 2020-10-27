import axios from 'axios';

import Vue from 'vue'
import Vuex from 'vuex'

import sCatalog from './s-catalog';
import sPerson from './s-person';
import sReport from './s-report';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: { // пользователь, кто работает
      userId: '',
      userIp: '', // ?
      userNameFull: '',
      userNameShort: '',
      userAccess: '',
    },
  },
  getters: {},
  mutations: {

    setUserProfile(state, option) {
      state.userProfile.userId = option.userId;
      state.userProfile.userIp = option.userIp;
      state.userProfile.userNameFull = option.userNameFull;
      state.userProfile.userNameShort = option.userNameShort;
      state.userProfile.userLevelAccess = option.userLevelAccess;
    },
  },
  actions: {},
  modules: {
    sCatalog,
    sPerson,
    sReport,
  }
})
