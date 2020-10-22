import axios from 'axios';
import personCardDocument from './s-person-card/__document';


export default {
  state: {
    profileAdmin: {},
    profileUser: {
      VFIO: '',
      VPOSTNAME: '',
      VDEPARTMENTNAME: '',
      VDISTRICTNAME: '',
    },
    historyUser: {
      historyFio: [
        {VFIO: 'Леголас', VDATE: '24.06.2020'},
        {VFIO: 'Гимли', VDATE: '12.03.2020'},
        {VFIO: 'Фродо', VDATE: '02.01.2020'},
      ],
      historyDistrict: [],
      historyDepartment: [],
      historyPost: [],
    },
  },
  getters: {
    GET_PROFILE_USER(state) { return state.profileUser; },
    GET_PROFILE_USER_ID(state) { return state.profileUser.VID; },

    GET_HISTORY_USER_FIO(state) { return state.historyUser.historyFio; },
    GET_HISTORY_USER_DISTRICT(state) { return state.historyUser.historyDistrict; },
    GET_HISTORY_USER_DEPARTMENT(state) { return state.historyUser.historyDepartment; },
    GET_HISTORY_USER_POST(state) { return state.historyUser.historyPost; },
  },
  mutations: {
    SET_PROFILE_USER(state, option) {
      state.profileUser = option;
      state.profileUser.VFIO = `${option.VFA} ${option.VIM} ${option.VOT}`;
    },
    SET_HISTORY_USER_FIO(state, option) { state.historyUser.historyFio = option },
    SET_HISTORY_USER_DISTRICT(state, option) { state.historyUser.historyDistrict = option },
    SET_HISTORY_USER_DEPARTMENT(state, option) { state.historyUser.historyDepartment = option },
    SET_HISTORY_USER_POST(state, option) { state.historyUser.historyPost = option },
  },
  actions: {
    async SET_PROFILE_USER(store, option) {
      let sendOption = option;
      sendOption.function = 'getUserProfile';
      await axios
        .post(pathBackend + 'person.php', null, {params: sendOption})
        .then(response => {
          store.commit('SET_PROFILE_USER', response.data[0]);
        })
        .catch();
    },
    SET_HISTORY_USER(store, option) {
      let sendOption = option;
      sendOption.function = `getHistoryUser${option.catalogName.toUpperCase()}`
      axios
        .post(pathBackend + 'person.php', null, {params: sendOption})
        .then(response => {
          store.commit(`SET_HISTORY_USER_${option.catalogName.toUpperCase()}`, response.data);
        })
        .catch();
    }
  },
  modules: {
    personCardDocument,
  }
}