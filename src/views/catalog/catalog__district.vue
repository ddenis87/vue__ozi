<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Территориальные органы</h3>
    <div class="catalog__body">
      <div class="catalog__body-control">
        <catalog-control>
          <template v-slot:titleInput>Наименование территориального органа</template>
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
  name: 'catalogDistrict',
  components: {
    catalogControl,
    catalogList,
  },
  computed: {
    listItem() { return this.$store.getters.GET_LIST_DISTRICT; }
  },
  created: function() {
    this.$store.dispatch('SET_LIST_CATALOGS', 'DISTRICT');
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import 'catalog.scss';
</style>