import Vue from 'vue'
import Vuex from 'vuex'

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
    personProfile: { // пользователь с которым работают
      personId: '',
      personFa: '',
      personIm: '',
      personOt: '',
      personNameFull: '',
      personDistrictId: '',
      personDistrictName: '',
      personDepartmentId: '',
      personDepartmentName: '',
      personPostId: '',
      personPostName: '',
    }
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
    },
    setPersonProfile(state, option) {
      state.personProfile.personId = option.VID;
      state.personProfile.personFa = option.VFA;
      state.personProfile.personIm = option.VIM;
      state.personProfile.personOt = option.VOT;
      state.personProfile.personDistrictId = option.VDISTRICTID;
      state.personProfile.personDistrictName = option.VDISTRICTNAME;
      state.personProfile.personDepartmentId = option.VDEPARTMENTID;
      state.personProfile.personDepartmentName = option.VDEPARTMENTNAME;
      state.personProfile.personPostId = option.VPOSTID;
      state.personProfile.personPostName = option.VPOSTNAME;
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
