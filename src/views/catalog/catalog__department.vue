<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Отделы</h3>
    <div class="catalog__body">
      <div class="catalog__body-control">
        <catalog-control>
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
import axios from 'axios';

import catalogControl from '@/components/catalog/catalog__control';
import catalogList from '@/components/catalog/catalog__list';

export default {
  name: 'catalogDepartment',
  components: {
    catalogControl,
    catalogList,
  },
  computed: {
    listItem() { this.$store.getters.GET_LIST_DEPARTMENT; }
  },
  data: function() {
    return {
      // listItem: Array,
    }
  },
  created: function() {
    this.$store.dispatch('SET_LIST_CATALOGS', 'DEPARTMENT');
    // this.getListItem();
  },
  methods: {
    // getListItem: function() {
    //   axios
    //   .post(pathBackend + 'catalog.php', null, {params: {function: 'getListDepartment'}})
    //   .then(response => {
    //     this.listItem = response.data;
    //   })
    //   .catch(() => {
    //     this.listItem = [
    //       {CID: '1', CNAME: 'Нет соединения с базой', CCONFIRM: '0', CVISIBLE: '1'},
    //       {CID: '2', CNAME: 'Или произошла ошибка при получении данных', CCONFIRM: '1', CVISIBLE: '1'},
    //       {CID: '3', CNAME: 'А возможно так сошлись звезды', CCONFIRM: '0', CVISIBLE: '0'},
    //     ]
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
@import 'catalog.scss';
</style>