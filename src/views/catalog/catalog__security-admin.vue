<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Администраторы</h3>
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
import catalogControl from '@/components/catalog/catalog__control-security-admin';
import catalogList from '@/components/catalog/catalog__list-security-admin';

export default {
  name: 'catalogDepartment',
  components: {
    catalogControl,
    catalogList,
  },
  computed: {
    listItem() { return this.$store.getters.GET_LIST_SECURITY_ADMIN; }
  },
  created: function() {
    this.$store.dispatch('SET_LIST_CATALOGS', 'SECURITY_ADMIN');
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import 'catalog.scss';
</style>