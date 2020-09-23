<template>
  <div class="user">
    <h3 class="user__title">Журналы - Пользователи</h3>
    <div class="user-grid">
      <div class="user-grid__control">
        <search @searchUser="searchUser"></search>
      </div>
      <div class="user-grid__list">
        <register :arrList="arrList"></register>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/user/search'
import Register from '@/components/user/register'

export default {
  name: 'User',  
  components: {
    Search, Register,
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
  .user {
    &__title {
      margin: 0px;
      color: teal;
    }
  }

  .user-grid {
    display: grid;
    grid-template-areas: "user-control" "user-list";
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    border-top: 2px solid grey;
    padding-top: 10px;

    &__control {grid-area: user-control;}
    &__list {grid-area: user-list;}
  }

</style>