import axios from 'axios';

export default {
  state: {
    listDepartment: [],
    listDistrict: [],
    listPost: [],
    listDocumentInput: [],
    listDocumentOutput: [],
    listSecurityAdmin: [],
  },
  getters: {
    GET_LIST_DEPARTMENT(state) { return state.listDepartment; },
    GET_LIST_DEPARTMENT_VISIBLE(state) { return state.listDepartment.filter(item => item.CVISIBLE == 1); },

    GET_LIST_DISTRICT(state) { return state.listDistrict; },
    GET_LIST_DISTRICT_VISIBLE(state) { return state.listDistrict.filter(item => item.CVISIBLE == 1); },

    GET_LIST_POST(state) { return state.listPost; },
    GET_LIST_POST_VISIBLE(state) { return state.listPost.filter(item => item.CVISIBLE == 1); },

    GET_LIST_DOCUMENT_INPUT(state) { return state.listDocumentInput; },
    GET_LIST_DOCUMENT_INPUT_VISIBLE(state) { return state.listDocumentInput.filter(item => item.CVISIBLE == 1); },

    GET_LIST_DOCUMENT_OUTPUT(state) { return state.listDocumentOutput; },
    GET_LIST_DOCUMENT_OUTPUT_VISIBLE(state) { return state.listDocumentOutput.filter(item => item.CVISIBLE == 1); },

    GET_LIST_SECURITY_ADMIN(state) { return state.listSecurityAdmin; },
    GET_LIST_SECURITY_ADMIN_VISIBLE(state) { return state.listSecurityAdmin.filter(item => item.CVISIBLE == 1); },
  },
  mutations: {
    SET_LIST_DEPARTMENT(state, option) { state.listDepartment = option; },
    SET_LIST_DISTRICT(state, option) { state.listDistrict = option; },
    SET_LIST_POST(state, option) { state.listPost = option; },
    SET_LIST_DOCUMENT_INPUT(state, option) { state.listDocumentInput = option; },
    SET_LIST_DOCUMENT_OUTPUT(state, option) { state.listDocumentOutput = option; },
    SET_LIST_SECURITY_ADMIN(state, option) { state.listSecurityAdmin = option; },

  },
  actions: {
    SET_LIST_CATALOGS(store, catalogName) {
      axios
        .post(pathBackend + 'catalog.php', null, {params: {function: `getList${catalogName.toUpperCase()}`}})
        .then(response => {
          store.commit(`SET_LIST_${catalogName.toUpperCase()}`, response.data);
        })
        .catch();
    },
    ADDING_ITEM_CATALOGS(store, inOption) {
      let sendOption = inOption;
      sendOption.function = `adding${inOption.catalogName.toUpperCase()}`,
      axios
        .post(pathBackend + 'catalog.php', null, {params: sendOption})
        .then(response => {
          console.log(response.data);
          if (response.data == '1') store.dispatch('SET_LIST_CATALOGS', inOption.catalogName.toUpperCase());
        })
        .catch();
    },
    DELETE_ITEM_CATALOGS(store, inOption) {
      let sendOption = inOption;
      sendOption.function = `delete${inOption.catalogName.toUpperCase()}`,
      axios
        .post(pathBackend + 'catalog.php', null, {params: sendOption})
        .then(response => {
          if (response.data == '1') store.dispatch('SET_LIST_CATALOGS', inOption.catalogName.toUpperCase());
        })
        .catch();
    },
  }
}