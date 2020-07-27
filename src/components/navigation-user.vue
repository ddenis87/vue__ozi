<template>
  <div class="user">
    <img class="user__images" src="@/assets/img/user.png">
    <div class="user__text">{{ userSecurity }}</div>
  </div>  
</template>

<script>
export default {
  name: 'NavigationUser',
  data: function() {
    return {
      userSecurity: 'Гость',
    }
  },
  created: function() {
    let axios = require('axios').default;
    axios
      .post(pathBackend + 'index.php', null, {params: {function: 'getUser'}})
      .then((response) => { this.userSecurity = response.data[0].CNAME; })
  }
}
</script>

<style lang="scss" scoped>
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;

    &__images {
      width: 30px;
      height: auto;
      padding: 0px 5px;
    }
    &__text {
      padding: 0px 5px;
    }
  }
</style>