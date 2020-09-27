<template>
  <div class="report-list">
    <table class="report-list__table">
      <thead class="report-list__table-head">
        <tr class="report-list__table-head_row">
          <th class="report-list__table-head_column">№ п/п</th>
          <th class="report-list__table-head_column">Автор</th>
          <th class="report-list__table-head_column">Наименование задачи</th>
          <th class="report-list__table-head_column">Статус</th>
          <th class="report-list__table-head_column">Действия</th>
        </tr>
      </thead>
      <tbody class="report-list__table-body">
        <template v-for="(item, index) in listItem">
          <tr class="report-list__table-body_row"
              :key="index">
            <td class="report-list__table-body_column">{{ index + 1 }}</td>
            <td class="report-list__table-body_column">{{ item.CNAMEAUTOR }}</td>
            <td class="report-list__table-body_column">{{ item.CNAMETASK }}</td>
            <td class="report-list__table-body_column">{{ item.CSTATUS }}</td>
            <td class="report-list__table-body_column">
              <div class="control">
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
  name: 'reportListWeek',
  props: {
    listItem: Array,
  }
}
</script>

<style lang="scss" scoped>
.report-list {
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
      &_column:nth-child(1) { width: 5%; }
      &_column:nth-child(2) { width: 10%; }
      &_column:nth-child(3) { width: 58%; }
      &_column:nth-child(4) { width: 8%; }
      &_column:nth-child(5) { width: 8%; }
    }
    &-body {
      &_row { border-bottom: 1px solid grey; }
      &_row-disabled {
        background-color: darkgray;
      }
      &_column { padding: 5px; }
      // &_column:nth-child(3) {  }
      &_column:nth-child(5) {
        padding: 0px 10px;
        .control {
          display: flex;
          justify-content: center;
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