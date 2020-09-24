<template>
  <div class="person-list">
    <table class="person-list__table">
      <thead class="person-list__table-head">
        <tr class="person-list__table-head_row">
          <th class="person-list__table-head_column">№ п/п</th>
          <th class="person-list__table-head_column">ФИО</th>
          <th class="person-list__table-head_column">Должность</th>
          <th class="person-list__table-head_column">Территориальный орган</th>
          <th class="person-list__table-head_column">Действия</th>
        </tr>
      </thead>
      
      <tr class="table-body"><td class="table-body__col" colspan="5"><hr class="table-body__col_separator"></td></tr>
      <template v-for="(item, index) in listItem">
      <tr class="table-body" :key="index">
        <td class="table-body__col table-body__col_center">{{ index + 1 }}</td>
        <td class="table-body__col">{{ item.VFIO }}</td>
        <td class="table-body__col">{{ item.VPOST }}</td>
        <td class="table-body__col">{{ item.VDISTRICT }}</td>
        <td class="table-body__col">{{  }}</td>
      </tr>
      <tr class="table-body" :key="index + 1000"><td class="table-body__col" colspan="5"><hr class="table-body__col_separator"></td></tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    listItem: {default: []},
  }
}
</script>

<style lang="scss" scoped>
.person-list {
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Open sans';
  font-size: 14px;
  &__table {
    width: 100%;
    border-collapse: collapse;
    &-head {
      &_column:nth-child(1) { width: 50px; }
      &_column:nth-child(5) { width: 50px; }
    }
  }
}
  // .register {
  //   padding: 5px 0px;
  // }
  // .register-table {
  //   width: 100%;
  //   border-spacing: 0px;
  //   font-size: 0.9em;

  //   .table-title {
  //     &__col:first-child { border: 0px; }
  //     &__col {
  //       border-left: 1px solid grey;
  //       padding: 3px;
  //       &_width {
  //         &-index { width: 50px; }
  //       }
  //     }
  //   }
  //   .table-body {
  //     &__col:first-child { border: 0px; }
  //     &__col {
  //       border-left: 1px solid grey;
  //       padding: 3px;
  //       &_center { text-align: center; }
  //       &_separator {margin: 0px;}
  //     }
  //   }
  // }
</style>