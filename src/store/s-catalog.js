import axios from 'axios';

export default {
  state: {
    listDepartment: []
  },
  getters: {
    GET_LIST_DEPARTMENT() { return state.listDepartment; },
    GET_LIST_DEPARTMENT_ACTIVE() { return state.listDepartment.filter(item => item.CVISIBLE == 1); }
  },
  mutations: {
    SET_LIST_DEPARTMENT(state, option) { state.listDepartment = option; }
  },
  actions: {
    SET_LIST_CATALOGS(context, catalogName) {
      axios
        .get(pathBackend + 'person-card__document.php', {function: `getList${catalogName}`})
        .then(response => {
          context.commit(`SET_LIST_${catalogName.toUpperCase()}`, response.data);
        })
        .catch();
    }
  }
}