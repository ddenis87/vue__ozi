<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Должности</h3>
    <div class="catalog__body">
      <div class="catalog__body-control">
        <catalog-control>
          <template v-slot:titleInput>Наименование должности</template>
        </catalog-control>
      </div>
      <hr class="catalog__separator"/>
      <div class="catalog__body-list">
        <catalog-list :listItem="listItem"></catalog-list>
      </div>
    </div>
  </div>
</template>

<script>
import catalogControl from '@/components/catalog/catalog__control';
import catalogList from '@/components/catalog/catalog__list';

export default {
  name: 'catalogPost',
  components: {
    catalogControl,
    catalogList,
  },
    computed: {
    listItem() { return this.$store.getters.GET_LIST_POST; }
  },
  created: function() {
    this.$store.dispatch('SET_LIST_CATALOGS', 'POST');
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import 'catalog.scss';
</style>