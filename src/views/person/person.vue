<template>
  <div class="person">
    <h3 class="person__title">Журналы - Пользователи</h3>
    <div class="person_body">
      <div class="person__body-control">
        <person-control></person-control>
      </div>
      <hr class="person__separator"/>
      <div class="person__body-list"></div>
    </div>
  </div>
</template>

<script>
import personControl from '@/components/person/person__control';

export default {
  name: 'User',  
  components: {
    personControl,
  },
  data: function() {
    return {
      arrList: Array,
    }
  },
  methods: {
    searchUser: function(searchText) {
      console.log(searchText);
      let axios = require('axios').default;
      axios
        .post(pathBackend + 'index.php', null, {params: {function: 'getUser', userFa: searchText}})
        .then((response) => {this.arrList = response.data; console.log(this.arrList);})
      console.log(this.arrList);
    },


  }
}
</script>

<style lang="scss" scoped>
.person {
  font-family: 'Montserrat';
  &__title {
    margin-bottom: 10px;
    color: darkslategrey;
  }
  &__separator {
    margin: 10px 20px;
  }
}
</style>