import axios from 'axios';

export default {
  state: {
    joinDocumentList: [],
  },
  getters: {
    GET_JOIN_DOCUMENT_LIST(state) { return state.joinDocumentList; },
  },
  mutations: {
    SET_JOIN_DOCUMENT_LIST(state, option) {
      state.joinDocumentList = option;
    },
  },
  actions: {
    SET_JOIN_DOCUMENT_LIST(state, option) {
      let sendOption = option;
      sendOption.function = `getJoinDocument${option.catalogName.toUpperCase()}`;
      axios
        .post(pathBackend + 'report.php', null, {params: sendOption})
        .then(response => {
          state.commit('SET_JOIN_DOCUMENT_LIST', response.data);
        })
        .catch();
    },
    SET_JOIN_DOCUMENT_LIST_FILTER(state, option) {
      let sendOption = option;
      sendOption.function = `getJoinDocumentFilter${option.catalogName.toUpperCase()}`;
      axios
        .post(pathBackend + 'report.php', null, {params: sendOption})
        .then(response => {
          state.commit('SET_JOIN_DOCUMENT_LIST', response.data);
        })
        .catch();
    },
  },
}