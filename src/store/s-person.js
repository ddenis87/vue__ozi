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
  },
  getters: {
    GET_PROFILE_USER(state) { return state.profileUser; },
    GET_PROFILE_USER_ID(state) { return state.profileUser.VID; },
  },
  mutations: {
    SET_PROFILE_USER(state, option) {
      state.profileUser = option;
      state.profileUser.VFIO = `${option.VFA} ${option.VIM} ${option.VOT}`;
    },
  },
  actions: {
    SET_PROFILE_USER(store, option) {
      let sendOption = option;
      sendOption.function = 'getProfileUser';
      axios
        .post(pathBackend + 'person.php', null, {params: sendOption})
        .then(response => {
          store.commit('SET_PROFILE_USER', response.data[0]);
        })
        .catch();
    }
  },
  modules: {
    personCardDocument,
  }
}