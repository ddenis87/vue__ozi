import axios from 'axios';

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
      documentInput: [], // список входящих документов выбранного пользователя
      documentOutput: [], // список исходящих документов выбранного пользователя
    },
  },
  getters: {
    PERSON_ID: state => { return state.personProfile.personId; },
    PERSON_DOCUMENT_INPUT: state => { return state.personProfile.documentInput; },
    PERSON_DOCUMENT_OUTPUT: state => { return state.personProfile.documentOutput; }
  },
  mutations: {
    SET_PERSON_DOCUMENT_INPUT(state, option) { state.personProfile.documentInput = option; },
    SET_PERSON_DOCUMENT_OUTPUT(state, option) { state.personProfile.documentOutput = option; },

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
      state.personProfile.personNameFull = `${option.VFA} ${option.VIM} ${option.VOT}`;
      state.personProfile.personDistrictId = option.VDISTRICTID;
      state.personProfile.personDistrictName = option.VDISTRICTNAME;
      state.personProfile.personDepartmentId = option.VDEPARTMENTID;
      state.personProfile.personDepartmentName = option.VDEPARTMENTNAME;
      state.personProfile.personPostId = option.VPOSTID;
      state.personProfile.personPostName = option.VPOSTNAME;
    }

  },
  actions: {
    SET_PERSON_DOCUMENTS(context, documentType) {
      let option = {
        function: `getListDocumentPerson${documentType}`,
        personId: context.getters.PERSON_ID,
      }
      axios.post(pathBackend + 'person-card__document.php', null, {params: option})
           .then(response => {
             context.commit(`SET_PERSON_DOCUMENT_${documentType.toUpperCase()}`, response.data);
           })
    },
  },
  modules: {
  }
})
