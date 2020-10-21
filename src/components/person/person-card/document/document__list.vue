<template>
  <div class="document-list"
       :class="listType">
    <table class="document-list__table">
      <caption class="document-list__table-title"><slot></slot></caption>
      <thead class="document-list__table-head">
        <tr class="document-list__table-head_row">
          <th class="document-list__table-head_column">{{ tabTitle }}</th>
          <th class="document-list__table-head_column">Дата</th>
          <th class="document-list__table-head_column">Наименование</th>
          <th class="document-list__table-head_column">Примечание</th>
          <th class="document-list__table-head_column document-list__table-head_column-action"></th>
        </tr>
      </thead>
      <tbody class="document-list__table-body">
        <template v-for="(item, index) in listItem">
          <tr class="document-list__table-body_row"
              :key="index">
            <td class="document-list__table-body_column">{{ item.VNUMBERDOC }}</td>
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
    inListType: String,
  },
  computed: {
    listItem() { return this.inListItem; },
    listType() { return "document-list__" + this.inListType; },
    tabTitle() { 
      if (this.inListType == 'document-input') return "№ вх.";
      if (this.inListType == 'document-output') return "№ исх."; 
    }
  },
  data: function() {
    return {
      arrMonth: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
    }
  },
  methods: {
    deleteItem(inItem) {
      this.$emit('delete-item', inItem); 
    },
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
  font-size: 12px;
  &__document-input {
    background-color: rgba(173, 216, 230, .3);
  }
  &__document-output {
    background-color: rgba(144, 238, 144, .3);
  }
  &__table {
    width: 100%;
    border-collapse: collapse;
    &-title {
      padding: 2px;
      padding-left: 10px;
      text-align: left;
      font-weight: bold;
      color: black;
      text-transform: uppercase;
    }
    &-head {
      &_row { border-bottom: 1px solid grey; }
      &_column { padding: 2px; }
      &_column:nth-child(1) { width: 5%; }
      &_column:nth-child(2) { width: 8%; }
      &_column:nth-child(3) { width: 52%; text-align: left; }
      &_column:nth-child(4) { width: 30%; text-align: left; }
      &_column:nth-child(5) {
        width: 30px;
        background-image: url('~@/assets/images/view/action.png');
        background-size: 18px 18px;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    &-body {
      &_row { 
        border-bottom: 1px solid grey; 
        cursor: pointer;
        &:hover {
          background-color:rgba(95, 158, 160, .3);
        }
      }
      &_column { padding: 3px; }
      .control {
        display: flex;
        justify-content: center;
        align-items: center;
        &__button {
          width: 20px;
          height: 20px;
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