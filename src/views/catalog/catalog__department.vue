<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Отделы</h3>

    <div class="catalog__body">
      <div class="catalog__body-control">
        <catalog-control></catalog-control>
      </div>
      <hr class="catalog__separator"/>
      <div class="catalog__body-list">
        <catalog-list :arrList="catalogList"></catalog-list>
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
  data: function() {
    return {
      catalogList: Array,
    }
  },
  created: function() {
    axios
      .post(pathBackend + 'catalog.php', null, {params: {function: 'getDepartmentList'}})
      .then(response => {
        console.log(response.data);
        this.catalogList = response.data;
      })
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  font-family: 'Montserrat';
  &__title {
    margin-bottom: 10px;
    color: darkslategrey;
  }
  &__separator {
    margin: 10px 20px;
  }
}
</style>