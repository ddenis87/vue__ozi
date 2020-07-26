<template>
  <div class="content">
    <navigation-menu></navigation-menu>
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
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>