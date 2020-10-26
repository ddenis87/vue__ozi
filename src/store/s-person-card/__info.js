import axios from 'axios';

export default {
  state: {
    historyUser: {
      historyFio: [],
      historyDistrict: [],
      historyDepartment: [],
      historyPost: [],
    },
  },
  getters: {
    GET_HISTORY_USER_FIO(state) { return state.historyUser.historyFio; },
    GET_HISTORY_USER_DISTRICT(state) { return state.historyUser.historyDistrict; },
    GET_HISTORY_USER_DEPARTMENT(state) { return state.historyUser.historyDepartment; },
    GET_HISTORY_USER_POST(state) { return state.historyUser.historyPost; },
  },
  mutations: {
    SET_HISTORY_USER_FIO(state, option) {
      let newArr = [];
      for (let i = 0; i < option.length; i++) if (i != option.length - 1) newArr.unshift({ VNAME: option[i].VNAME, VDATE: option[i].VDATE, VDATE_E: option[i + 1].VDATE });
      state.historyUser.historyFio = newArr;
    },
    SET_HISTORY_USER_DISTRICT(state, option) {
      let newArr = [];
      for (let i = 0; i < option.length; i++) if (i != option.length - 1) newArr.unshift({ VNAME: option[i].VNAME, VDATE: option[i].VDATE, VDATE_E: option[i + 1].VDATE });
      state.historyUser.historyDistrict = newArr;
    },
    SET_HISTORY_USER_DEPARTMENT(state, option) {
      let newArr = [];
      for (let i = 0; i < option.length; i++) if (i != option.length - 1) newArr.unshift({ VNAME: option[i].VNAME, VDATE: option[i].VDATE, VDATE_E: option[i + 1].VDATE });
      state.historyUser.historyDepartment = newArr;
    },
    SET_HISTORY_USER_POST(state, option) {
      let newArr = [];
      for (let i = 0; i < option.length; i++) if (i != option.length - 1) newArr.unshift({ VNAME: option[i].VNAME, VDATE: option[i].VDATE, VDATE_E: option[i + 1].VDATE });
      state.historyUser.historyPost = newArr;
    },
  },
  actions: {
    SET_HISTORY_USER(store, option) {
      let sendOption = {};
      Object.assign(sendOption, option);
      sendOption.function = `getHistory${option.catalogName.toUpperCase()}`;
      axios
        .post(pathBackend + 'person-card__info.php', null, {params: sendOption})
        .then(response => {
          store.commit(`SET_HISTORY_USER_${option.catalogName.toUpperCase()}`, response.data);
        })
        .catch();
    },
    CHANGE_PROFILE_USER(store, option) {
      let sendOption = option;
      sendOption.function = `changeUser${option.catalogName.toUpperCase()}`;
      axios
        .post(pathBackend + 'person-card__info.php', null, {params: sendOption})
        .then(response => {
          if (response.data == '1') {
            store.dispatch('SET_HISTORY_USER', option);
            store.dispatch('SET_PROFILE_USER', option);
          }
        })
        .catch();
    },

    DELETE_HISTORY_USER(store, option) {
      let sendOption = {};
      Object.assign(sendOption, option);
      sendOption.function = `deleteHistory${option.catalogName.toUpperCase()}`;
      axios
        .post(pathBackend + 'person-card__info.php', null, {params: sendOption})
        .then(response => {
          if (response.data == '1') store.dispatch('SET_HISTORY_USER', option);
        })
        .catch();
    },

    
  },
}