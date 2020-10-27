<template>
  <div class="join-document-list">
    <table class="join-table">
      <thead class="join-table__head">
        <tr class="join-table__head-row">
          <th class="join-table__head-column">{{ (listType == "INPUT") ? '№ вх.' : '№ исх.' }}</th>
          <th class="join-table__head-column">Дата</th>
          <th class="join-table__head-column">Наименование документа</th>
          <th class="join-table__head-column">ФИО пользователя</th>
          <th class="join-table__head-column">Территория</th>
        </tr>
      </thead>
      <tbody class="join-table__body">
        <tr class="join-table__body-row"
            v-for="(item, index) in listItem"
            :key="index">
          <td class="join-table__body-column">{{ item.VNUMBERDOCUMENT }}</td>
          <td class="join-table__body-column">{{ modDate(item.VDATE) }}</td>
          <td class="join-table__body-column">{{ item.VNAMEDOCUMENT }}</td>
          <td class="join-table__body-column">{{ item.VFIO }}</td>
          <td class="join-table__body-column">{{ item.VNAMEDISTRICT }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'JoinDocumentList',
  props: {
    listItem: Array,
    listType: {type: String, default: 'INPUT'},
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
.join-document-list {
  margin-bottom: 20px;
  font-family: 'Open sans';
  font-size: 12px;

  .join-table {
    width: 100%;
    border-collapse: collapse;
    &__head {
      &-row { border-bottom: 1px solid grey; }
      &-column {
        padding: 5px;
        &:nth-child(1) { width: 45px; }
        &:nth-child(2) { width: 80px; }
      }
    }
    &__body {
      &-row { 
        border-bottom: 1px solid grey;
        &:hover {
          background-color:rgba(95, 158, 160, .3);
        }
      }
      &-column {
        padding: 3px 0px;
      }
    }
  }
}
</style>