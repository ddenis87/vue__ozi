<template>
  <div class="catalog-list">
    <table class="catalog-list__table">
      <thead class="catalog-list__table-head">
        <tr class="catalog-list__table-head_row">
          <th class="catalog-list__table-head_column">№ п/п</th>
          <th class="catalog-list__table-head_column">ФИО</th>
          <th class="catalog-list__table-head_column">ФИО сокращенно</th>
          <th class="catalog-list__table-head_column">IP - адрес</th>
          <th class="catalog-list__table-head_column">Уровень доступа</th>
          <th class="catalog-list__table-head_column">Действия</th>
        </tr>
      </thead>
      <tbody class="catalog-list__table-body">
        <template v-for="(item, index) in listItem">
          <tr class="catalog-list__table-body_row" 
              :class="{'catalog-list__table-body_row-disabled': (item.CVISIBLE == '1') ? false : true}"
              :key="index">
            <td class="catalog-list__table-body_column">{{ index + 1 }}</td>
            <td class="catalog-list__table-body_column">{{ item.CNAMEFULL }}</td>
            <td class="catalog-list__table-body_column">{{ item.CNAMESHORT }}</td>
            <td class="catalog-list__table-body_column">{{ item.CIP }}</td>
            <td class="catalog-list__table-body_column">{{ item.CLEVELACCESS }}</td>
            <td class="catalog-list__table-body_column">
              <div class="control">
                <button class="control__button"
                        v-bind:title="(item.CVISIBLE == '0') ? 'Активировать' : 'Деактивировать'" 
                        v-bind:class="{
                          'control__button_disabled-off': (item.CVISIBLE == '1') ? true : false,
                          'control__button_disabled-on': (item.CVISIBLE == '0') ? true : false
                        }" 
                        @click="disableItem(item)"></button>
                <button class="control__button control__button_delete" 
                        title="Удалить запись"
                        @click="deleteItem(item)"></button>
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
  name: 'catalogListSecurityAdmin',
  props: {
    listItem: {
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
      &_column:nth-child(2) { width: 30%; }
      &_column:nth-child(3) { width: 30%; }
      &_column:nth-child(4) { width: 10%; }
      &_column:nth-child(5) { width: 14%; }
      &_column:nth-child(6) { width: 8%; }
    }
    &-body {
      &_row { border-bottom: 1px solid grey; }
      &_row-disabled {
        background-color: darkgray;
      }
      &_column { padding: 5px; }
      &_column:nth-child(5) { text-align: center; }
      &_column:nth-child(6) {
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