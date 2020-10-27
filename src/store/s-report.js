import axios from 'axios';

export default {
  state: {
    listReportDocument: [],

    listReportVpnCl: [],
  },
  getters: {
    GET_LIST_REPORT_DOCUMENT(state) { return state.listReportDocument; },

    GET_LIST_REPORT_CL(state) { return state.listReportVpnCl; },
  },
  mutations: {
    SET_LIST_REPORT_DOCUMENT(state, option) { state.listReportDocument = option; },

    SET_LIST_REPORT_CL(state, option) { state.listReportVpnCl = option },
  },
  actions: {
    SET_LIST_REPORT_DOCUMENT(state, option) {
      let sendOption = option;
      sendOption.function = `getJoinDocument${option.catalogName.toUpperCase()}`;
      axios
        .post(pathBackend + 'report.php', null, {params: sendOption})
        .then(response => {
          state.commit('SET_LIST_REPORT_DOCUMENT', response.data);
        })
        .catch();
    },
    SET_LIST_REPORT_DOCUMENT_FILTER(state, option) {
      let sendOption = option;
      sendOption.function = `getJoinDocumentFilter${option.catalogName.toUpperCase()}`;
      axios
        .post(pathBackend + 'report.php', null, {params: sendOption})
        .then(response => {
          state.commit('SET_LIST_REPORT_DOCUMENT', response.data);
        })
        .catch();
    },

    SET_LIST_REPORT_CRYPTOVPN_CL(state, option) {
      let sendOption = option;
      sendOption.function = 'getCryptoVpnClReport';
      axios
        .post(pathBackend + 'report.php', null, {params: sendOption})
        .then(response => {
          console.log(response.data);
          state.commit('SET_LIST_REPORT_CL', response.data);
        })
        .catch();
    },
  },
}