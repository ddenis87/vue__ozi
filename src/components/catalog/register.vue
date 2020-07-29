<template>
  <div class="register">
    <table class="register-table">
      <tr class="table-title">
        <th class="table-title__col table-title__col_width-index">№ п/п</th>
        <th class="table-title__col">Наименование</th>
        <th class="table-title__col table-title__col_width-prop">Верификация</th>
        <th class="table-title__col table-title__col_width-prop">Доступна</th>
        <th class="table-title__col table-title__col_width-prop">Действия</th>
      </tr>
      <tr class="table-body"><td class="table-body__col" colspan="5"><hr class="table-body__col_separator"></td></tr>
      <template v-for="(row, index) in arrList">
      <tr class="table-body" :key="index">
        <td class="table-body__col table-body__col_center">{{ index + 1 }}</td>
        <td class="table-body__col">{{ row.CNAME }}</td>
        <td class="table-body__col table-body__col_center" 
            v-bind:class="{'table-body__col_confirm': (row.CCONFIRM == '1') ? true : false}">
            {{ (row.CCONFIRM == '1') ? 'Да' : 'Нет' }}
        </td>
        <td class="table-body__col table-body__col_center" 
            v-bind:class="{'table-body__col_disable': (row.CVISIBLE == '0') ? true : false }">
            {{ (row.CVISIBLE == '1') ? 'Да' : 'Нет' }}
        </td>
        <td class="table-body__col">
          <div class="control">
          <button class="control__button"
                  v-bind:title="(row.CVISIBLE == '0') ? 'Активировать' : 'Деактивировать'" 
                  v-bind:class="{
                    'control__button_visible-on': (row.CVISIBLE == '1') ? true : false,
                    'control__button_visible-off': (row.CVISIBLE == '0') ? true : false
                  }" 
                  @click="disableItem(row)"></button>
          <button class="control__button control__button_delete" 
                  title="Удалить запись"
                  @click="deleteItem(row)"></button>
          </div>
        </td>
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
    arrList: {
      // type: Array,
      default: [
        {CID: '1', CNAME: 'Нет соединения с базой', CCONFIRM: '0', CVISIBLE: '1'},
        {CID: '2', CNAME: 'Или произошла ошибка при получении данных', CCONFIRM: '1', CVISIBLE: '1'},
        {CID: '3', CNAME: 'А возможно так сошлись звезды', CCONFIRM: '0', CVISIBLE: '0'},
      ]
    }
  },
  data: function() {
    return {
    }
  },
  methods: {
    disableItem: function(row) {
      this.$emit('disableItem', row);
    },
    deleteItem: function(row) {
      this.$emit('deleteItem', row);
    },
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
    font-size: 0.8em;

    .table-title {
      &__col:first-child { border: 0px; }
      &__col {
        border-left: 1px solid grey;
        padding: 3px;
        &_width {
          &-prop { width: 80px; }
          &-index { width: 45px; }
        }
      }
    }
    .table-body {
      &__col:first-child { border: 0px; }
      &__col {
        border-left: 1px solid grey;
        padding: 3px;
        &_center { text-align: center; }
        &_confirm { background-color: lightgreen; }
        &_disable { background-color: coral; }
        &_separator {margin: 0px;}
      }
    }
  }

  .control {
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__button {
      width: 20px;
      height: 20px;
      outline: none;
      border: 0px solid grey;
      background-color: white;
      background-size: 22px 22px;
      background-repeat: no-repeat;
      background-position: center center;
      cursor: pointer;

      &_visible-on { background-image: url('/img/button_visible-off.png'); }
      &_visible-off { background-image: url('/img/button_visible-on.png'); }
      &_delete { background-image: url('/img/button_delete.png'); }
    }
  }
</style>