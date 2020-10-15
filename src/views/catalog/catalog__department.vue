<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Отделы</h3>
    <div class="catalog__body">
      <div class="catalog__body-control">
        <catalog-control @adding-item="addingItem">
          <template v-slot:titleInput>Наименование отдела</template>
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
  name: 'catalogDepartment',
  components: {
    catalogControl,
    catalogList,
  },
  computed: {
    listItem() { return this.$store.getters.GET_LIST_DEPARTMENT; }
  },
  created: function() {
    this.$store.dispatch('SET_LIST_CATALOGS', 'DEPARTMENT');
  },
  methods: {
    addingItem(inValueName) {
      let option = {
        catalogName: 'DEPARTMENT',
        valueName: inValueName,
      };
      this.$store.dispatch('ADDING_ITEM_CATALOGS', option);
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'catalog.scss';
</style>