<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Входящие документы</h3>
    <div class="catalog-grid">
      <div class="catalog-grid__control">
        <addition></addition>
      </div>
      <div class="catalog-grid__list">
        <register></register>
      </div>
    </div>
  </div>
</template>

<script>
import Addition from '@/components/catalog/addition';
import Register from '@/components/catalog/register';

export default {
  name: 'DocumentInput',
  components: {
    Addition, Register,
  }
}
</script>

<style lang="scss" scoped>
  .catalog {
    &__title {
      margin: 0px;
      color: teal;
    }
  }
  .catalog-grid {
    display: grid;
    grid-template-areas: "document-control document-list";
    grid-template-rows: auto;
    grid-template-columns: 45% 55%;

    &__control {grid-area: document-control;}
    &__list {grid-area: document-list;}
  }
</style>