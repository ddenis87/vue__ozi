<template>
  <div class="catalog-list">
    <table class="catalog-list__table">
      <thead class="catalog-list__table-head">
        <tr class="catalog-list__table-head_row">
          <th class="catalog-list__table-head_column">№ п/п</th>
          <th class="catalog-list__table-head_column">Наименование</th>
          <th class="catalog-list__table-head_column">Доступ</th>
          <th class="catalog-list__table-head_column">Действия</th>
        </tr>
      </thead>
      <tbody class="catalog-list__table-body">
        <template v-for="(row, index) in listItem">
          <tr class="catalog-list__table-body_row" 
              :class="{'catalog-list__table-body_row-disabled': (row.CVISIBLE == '1') ? false : true}"
              :key="index">
            <td class="catalog-list__table-body_column">{{ index + 1 }}</td>
            <td class="catalog-list__table-body_column">{{ row.CNAME }}</td>
            <td class="catalog-list__table-body_column">{{ (row.CVISIBLE == '1') ? 'Да' : 'Нет' }}</td>
            <td class="catalog-list__table-body_column">
              <div class="control">
              <button class="control__button"
                      v-bind:title="(row.CVISIBLE == '0') ? 'Активировать' : 'Деактивировать'" 
                      v-bind:class="{
                        'control__button_disabled-off': (row.CVISIBLE == '1') ? true : false,
                        'control__button_disabled-on': (row.CVISIBLE == '0') ? true : false
                      }" 
                      @click="disableItem(row)"></button>
              <button class="control__button control__button_delete" 
                      title="Удалить запись"
                      @click="deleteItem(row)"></button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    listItem: {
      // type: Array,
      default: [
        {CID: '1', CNAME: 'Нет соединения с базой', CCONFIRM: '0', CVISIBLE: '1'},
        {CID: '2', CNAME: 'Или произошла ошибка при получении данных', CVISIBLE: '1'},
        {CID: '3', CNAME: 'А возможно так сошлись звезды', CVISIBLE: '0'},
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
.catalog-list {
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Open sans';
  font-size: 13px;
  &__table {
    width: 100%;
    border-collapse: collapse;
    &-head {
      &_row { border-bottom: 1px solid grey; }
      &_column { padding: 5px; }
      &_column:nth-child(1) { width: 8%; }
      &_column:nth-child(2) { width: 76%; }
      &_column:nth-child(3) { width: 8%; }
      &_column:nth-child(4) { width: 8%; }
    }
    &-body {
      &_row { border-bottom: 1px solid grey; }
      &_row-disabled {
        background-color: darkgray;
      }
      &_column { padding: 5px; }
      &_column:nth-child(3) { text-align: center; }
      &_column:nth-child(4) {
        padding: 0px 10px;
        .control {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &__button {
            width: 24px;
            height: 24px;
            border: 0px;
            background-color: rgba(0, 0, 0, 0);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            cursor: pointer;
            &_disabled-on { background-image: url('~@/assets/images/control/button_disabled-on.png'); }
            &_disabled-off { background-image: url('~@/assets/images/control/button_disabled-off.png'); }
            &_delete { 
              background-image: url('~@/assets/images/control/button_delete.png');
            }
          }
        }
      }
    }
  }
}
</style>