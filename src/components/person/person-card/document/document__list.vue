<template>
  <div class="document-list">
    <table class="document-list__table">
      <caption class="document-list__table-title"><slot></slot></caption>
      <thead class="document-list__table-head">
        <tr class="document-list__table-head_row">
          <th class="document-list__table-head_column">№</th>
          <th class="document-list__table-head_column">Дата</th>
          <th class="document-list__table-head_column">Наименование</th>
          <th class="document-list__table-head_column">Примечание</th>
          <th class="document-list__table-head_column">Дейст.</th>
        </tr>
      </thead>
      <tbody class="document-list__table-body">
        <template v-for="(item, index) in listItem">
          <tr class="document-list__table-body_row"
              :key="index">
            <td class="document-list__table-body_column">{{ item.VID }}</td>
            <td class="document-list__table-body_column">{{ modDate(item.VDATE) }}</td>
            <td class="document-list__table-body_column">{{ item.VNAME }}</td>
            <td class="document-list__table-body_column">{{ item.VNOTE }}</td>
            <td class="document-list__table-body_column">
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
  name: 'documentList',
  props: {
    inListItem: Array,
  },
  computed: {
    listItem() { return this.inListItem; }
  },
  data: function() {
    return {
      arrMonth: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
    }
  },
  methods: {
    modDate: function(val) {
      let nVal = String(val);
      let nDay = nVal.slice(0,2);
      let nMonth = ((this.arrMonth.indexOf(nVal.slice(3,6)) + 1) < 10) ? '0' + String(this.arrMonth.indexOf(nVal.slice(3,6)) + 1) : String(this.arrMonth.indexOf(nVal.slice(3,6)) + 1);
      let nYear = '20' + String(nVal.slice(7,9));
      nVal = nDay + '.' + nMonth + '.' + nYear;
      return nVal;
    },
  }
}
</script>

<style lang="scss" scoped>
.document-list {
  font-family: 'Open sans';
  font-size: 13px;
  &__table {
    width: 100%;
    border-collapse: collapse;
    &-title {
      text-align: right;
      color: darkslategray;
      text-transform: uppercase;
    }
    &-head {
      &_row { border-bottom: 1px solid grey; }
      &_column { padding: 5px; }
      &_column:nth-child(1) { width: 5%; }
      &_column:nth-child(2) { width: 8%; }
      &_column:nth-child(3) { width: 41%; text-align: left; }
      &_column:nth-child(4) { width: 41%; text-align: left; }
      &_column:nth-child(5) { width: 5%; }
    }
    &-body {
      &_row { 
        border-bottom: 1px solid grey; 
        cursor: pointer;
        &:hover {
          background-color:rgba(95, 158, 160, .3);
        }
      }
      &_column { padding: 5px; }
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
</style>