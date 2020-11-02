import axios from 'axios';

export default {
  state: {
    listReportDocument: [],

    listReportVpnCl: [],
    listReportVpnCs: [],
  },
  getters: {
    GET_LIST_REPORT_DOCUMENT(state) { return state.listReportDocument; },

    GET_LIST_REPORT_CL(state) { return state.listReportVpnCl; },
    GET_LIST_REPORT_CS(state) { return state.listReportVpnCs; },
  },
  mutations: {
    SET_LIST_REPORT_DOCUMENT(state, option) { state.listReportDocument = option; },

    SET_LIST_REPORT_CL(state, option) { state.listReportVpnCl = option },
    SET_LIST_REPORT_CS(state, option) { state.listReportVpnCs = option },
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
          state.commit('SET_LIST_REPORT_CL', response.data);
        })
        .catch();
    },
    SET_LIST_REPORT_CRYPTOVPN_CS(state, option) {
      let sendOption = option;
      sendOption.function = 'getCryptoVpnCsReport';
      axios
        .post(pathBackend + 'report.php', null, {params: sendOption})
        .then(response => {
          state.commit('SET_LIST_REPORT_CS', response.data);
        })
        .catch();
    },

  },
}