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
            <td class="catalog-list__table-body_column">{{ item.CNAMELEVELACCESS }}</td>
            <td class="catalog-list__table-body_column">
              <div class="control">
                <button class="control__button"
                        v-bind:title="(item.CVISIBLE == '0') ? 'Активировать' : 'Отключить'" 
                        v-bind:class="{
                          'control__button_disabled-off': (item.CVISIBLE == '1') ? true : false,
                          'control__button_disabled-on': (item.CVISIBLE == '0') ? true : false
                        }" 
                        @click="switchItem(item)"></button>
                <button class="control__button control__button_edit" 
                        title="Редактировать запись"
                        @click="changeItem(item)"></button>
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
    listItem: Array,
  },
  methods: {
    switchItem(inItem) { this.$emit('switch-item', inItem); },
    changeItem(inItem) { this.$emit('change-item', inItem); },
    deleteItem(inItem) { this.$emit('delete-item', inItem); },
  }
}
</script>

<style lang="scss" scoped>
@import 'zs-catalog__list.scss';

.catalog-list {
  &__table {
    &-head {
      &_column:nth-child(1) { width: 8%; }
      &_column:nth-child(2) { width: 30%; }
      &_column:nth-child(3) { width: 28%; }
      &_column:nth-child(4) { width: 10%; }
      &_column:nth-child(5) { width: 14%; }
      &_column:nth-child(6) { width: 10%; min-width: 114px; box-sizing: border-box; }
    }
    &-body {
      &_column:nth-child(5) { text-align: center; }
      &_column:nth-child(6) { padding: 0px 10px; }
    }
  }
}
</style>