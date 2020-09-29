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
        <template v-for="(item, index) in listItem">
          <tr class="catalog-list__table-body_row" 
              :class="{'catalog-list__table-body_row-disabled': (item.CVISIBLE == '1') ? false : true}"
              :key="index">
            <td class="catalog-list__table-body_column">{{ index + 1 }}</td>
            <td class="catalog-list__table-body_column">{{ item.CNAME }}</td>
            <td class="catalog-list__table-body_column">{{ (item.CVISIBLE == '1') ? 'Да' : 'Нет' }}</td>
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
  name: 'catalogList',
  props: {
    listItem: {
      default: []
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
@import 'variables.scss';

.catalog-list {
  margin-bottom: $bodyMarginBottom;
  padding-left: $bodyPaddingLeft;
  padding-right: $bodyPaddingRight;
  font-family: $fontFamily;
  font-size: $fontSize;
  &__table {
    width: $tableWidth;
    border-collapse: collapse;
    &-head {
      &_row { border-bottom: 1px solid $tableBorderColor; }
      &_column { padding: 5px; }
      &_column:nth-child(1) { width: 8%; }
      &_column:nth-child(2) { width: 76%; }
      &_column:nth-child(3) { width: 8%; }
      &_column:nth-child(4) { width: 8%; }
    }
    &-body {
      &_row { border-bottom: 1px solid $tableBorderColor; }
      &_row-disabled {
        background-color: $disabledRowBackground;
        color: $disabledRowText;
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
            width: $controlButtonWidth;
            height: $controlButtonHeight;
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