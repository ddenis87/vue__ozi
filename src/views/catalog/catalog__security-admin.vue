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
import axios from 'axios';

import catalogControl from '@/components/catalog/catalog__control-security-admin';
import catalogList from '@/components/catalog/catalog__list-security-admin';

export default {
  name: 'catalogDepartment',
  components: {
    catalogControl,
    catalogList,
  },
  data: function() {
    return {
      listItem: Array,
    }
  },
  created: function() {
    this.getListItem();
  },
  methods: {
    getListItem: function() {
      axios
      .post(pathBackend + 'catalog.php', null, {params: {function: 'getListSecurityAdmin'}})
      .then(response => {
        console.log(response.data);
        this.listItem = response.data;
      })
      .catch(() => {
        this.listItem = [
          {CID: '1', CNAME: 'Специалист-эксперт', CCONFIRM: '0', CVISIBLE: '1'},
          {CID: '2', CNAME: 'Специалист', CCONFIRM: '1', CVISIBLE: '1'},
          {CID: '3', CNAME: 'Начальник отдела', CCONFIRM: '0', CVISIBLE: '0'},
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'catalog.scss';
</style>