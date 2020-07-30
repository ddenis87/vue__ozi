<template>
  <div class="user">
    <h3 class="user__title">Журналы - Пользователи</h3>
    <div class="user-grid">
      <div class="user-grid__control">
        <search></search>
      </div>
      <div class="user-grid__list">

      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/user/search'

export default {
  name: 'User',  
  components: {
    Search,
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