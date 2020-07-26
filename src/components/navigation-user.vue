<template>
  <div class="user">
    <img class="user__images" src="@/assets/img/user.png">
    <div class="user__text">Донцов Денис Адександрович</div>
  </div>  
</template>

<script>
export default {
  name: 'NavigationUser',
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