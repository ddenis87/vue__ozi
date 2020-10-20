import axios from 'axios';

export default {
  state: {
    userDocumentInput: [],
    userDocumentOutput: [],
  },
  getters: {
    GET_USER_DOCUMENT_INPUT(state) { return state.userDocumentInput },
    GET_USER_DOCUMENT_OUTPUT(state) { return state.userDocumentOutput },
  },
  mutations: {
    SET_USER_DOCUMENT_INPUT(state, option) { state.userDocumentInput = option },
    SET_USER_DOCUMENT_OUTPUT(state, option) { state.userDocumentOutput = option },
  },
  actions: {
    SET_USER_DOCUMENTS(state, option) {
      let sendOption = option;
      sendOption.function = `getUserDocument${option.catalogName.toUpperCase()}`;
      sendOption.personId = state.getters.GET_PROFILE_USER_ID;
      axios.post(pathBackend + 'person-card__document.php', null, {params: sendOption})
        .then(response => {
          state.commit(`SET_USER_DOCUMENT_${option.catalogName.toUpperCase()}`, response.data);
        })
        .catch();
    },
  },
}