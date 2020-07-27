<template>
  <div class="app-navigation">
    <navigation-menu></navigation-menu>
    <div class="app-navigation__items">
      <h3 class="app-navigation__title">Отдел по защите информации - Амурская область</h3>
    </div>
    <navigation-user></navigation-user>
  </div>
</template>

<script>
import NavigationMenu from '@/components/navigation-menu';
import NavigationUser from '@/components/navigation-user';

export default {
  name: 'AppNavigation',
  components: {
    NavigationMenu, NavigationUser,
  },
}
</script>

<style lang="scss" scoped>
  .app-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    &__title {
      color: darkcyan;
      font-weight: normal;
    }
  }
</style>