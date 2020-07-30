<template>
  <div class="register">
    <table class="register-table">
      <tr class="table-title">
        <th class="table-title__col table-title__col_width-index">№ п/п</th>
        <th class="table-title__col">ФИО</th>
        <th class="table-title__col">Должность</th>
        <th class="table-title__col">Территориальный орган</th>
        <th class="table-title__col">Действия</th>
      </tr>
      <tr class="table-body"><td class="table-body__col" colspan="5"><hr class="table-body__col_separator"></td></tr>
      <template v-for="(row, index) in arrList">
      <tr class="table-body" :key="index">
        <td class="table-body__col table-body__col_center">{{ index + 1 }}</td>
        <td class="table-body__col">{{ row.VFIO }}</td>
        <td class="table-body__col">{{ row.VPOST }}</td>
        <td class="table-body__col">{{ row.VDISTRICT }}</td>
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
    arrList: {default: []},
  }
}
</script>

<style lang="scss" scoped>
  .register {
    padding: 5px 0px;
  }
  .register-table {
    width: 100%;
    border-spacing: 0px;
    font-size: 0.9em;

    .table-title {
      &__col:first-child { border: 0px; }
      &__col {
        border-left: 1px solid grey;
        padding: 3px;
        &_width {
          &-index { width: 50px; }
        }
      }
    }
    .table-body {
      &__col:first-child { border: 0px; }
      &__col {
        border-left: 1px solid grey;
        padding: 3px;
        &_center { text-align: center; }
        &_separator {margin: 0px;}
      }
    }
  }
</style>