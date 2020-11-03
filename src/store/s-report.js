import axios from 'axios';

export default {
  state: {
    listReportDocument: [],

    listReportVpnDefault: [],
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

    SET_LIST_REPORT_CL(state, option) { state.listReportVpnCl = option, state.listReportVpnDefault = option },
    SET_LIST_REPORT_CL_FILTER(state, option) {
      state.listReportVpnCl = state.listReportVpnDefault;
      if (option.valueDistrictId != '0') state.listReportVpnCl = state.listReportVpnCl.filter(item => item.VDISTRICTINSTALLID == option.valueDistrictId);
      switch(option.valueTask) {
        case '1': state.listReportVpnCl = state.listReportVpnCl.filter(item => item.VTASKCLIENT == '1'); break;
        case '2': state.listReportVpnCl = state.listReportVpnCl.filter(item => item.VTASKMAIL == '1'); break;
        case '3': state.listReportVpnCl = state.listReportVpnCl.filter(item => item.VTASKCS == '1'); break;
      }
      switch(option.valueState) {
        case '1': state.listReportVpnCl = state.listReportVpnCl.filter(item => item.VBASISUNISTALL == null); break;
        case '2': state.listReportVpnCl = state.listReportVpnCl.filter(item => item.VBASISUNISTALL != null); break;
      }
    },

    SET_LIST_REPORT_CS(state, option) { state.listReportVpnCs = option, state.listReportVpnDefault = option },
    SET_LIST_REPORT_CS_FILTER(state, option) {
      state.listReportVpnCs = state.listReportVpnDefault;
      if (option.valueDistrictId != '0') state.listReportVpnCs = state.listReportVpnCs.filter(item => item.VDISTRICTINSTALLID == option.valueDistrictId);
      switch(option.valueState) {
        case '1': state.listReportVpnCs = state.listReportVpnCs.filter(item => item.VBASISUNISTALL == null); break;
        case '2': state.listReportVpnCs = state.listReportVpnCs.filter(item => item.VBASISUNISTALL != null); break;
      }
    },
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