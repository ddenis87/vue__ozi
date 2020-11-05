import axios from 'axios';

export default {
  state: {
    listUserVpnCs: [],
    listUserVpnCl: [],
  },
  getters: {
    GET_USER_VPN_CS(state) { return state.listUserVpnCs; },
    GET_USER_VPN_CL(state) { return state.listUserVpnCl; },
  },
  mutations: {
    SET_USER_VPN_CS(state, option) { state.listUserVpnCs = option },
    SET_USER_VPN_CL(state, option) { state.listUserVpnCl = option },
  },
  actions: {
    SET_USER_VPN(state, option) {
      let sendOption = option;
      sendOption.function = `getVpnList${option.keyType.toUpperCase()}`;
      axios
        .get(pathBackend + 'person-card__crypto.php', {params: sendOption})
        .then(response => {
          state.commit(`SET_USER_VPN_${option.keyType.toUpperCase()}`, response.data);
        })
        .catch();
    },
    SET_VPN_TASK(state, option) {
      let sendOption = option;
      sendOption.function = `setVpnTask`;
      axios
        .post(pathBackend + 'person-card__crypto.php', null, {params: sendOption})
        .then(response => {
          if (response.data == '1') {
            let dispatchOption = {
              keyType: 'CL',
              valueUserId: state.getters.GET_PROFILE_USER_ID,
            };
            state.dispatch('SET_USER_VPN', dispatchOption);
          }
        })
    },
    SET_VPN_BASIS_CL(state, option) {
      let sendOption = option;
      sendOption.function = `setVpnBasisCl${option.valueType.toUpperCase()}`;
      axios
        .post(pathBackend + 'person-card__crypto.php', null, {params: sendOption})
        .then(response => {
          if (response.data == '1') {
            let dispatchOption = {
              keyType: 'CL',
              valueUserId: state.getters.GET_PROFILE_USER_ID,
            };
            state.dispatch('SET_USER_VPN', dispatchOption);
          }
        })
    },
    SET_VPN_BASIS_CS(state, option) {
      let sendOption = option;
      sendOption.function = `setVpnBasisCs${option.valueType.toUpperCase()}`;
      axios
        .post(pathBackend + 'person-card__crypto.php', null, {params: sendOption})
        .then(response => {
          if (response.data == '1') {
            let dispatchOption = {
              keyType: 'CS',
              valueUserId: state.getters.GET_PROFILE_USER_ID,
            };
            state.dispatch('SET_USER_VPN', dispatchOption);
          }
        })
    },
  },
}