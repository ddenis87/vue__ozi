<template>
  <table class="tab-history">
    <caption class="tab-history__title"><slot></slot></caption>
    <thead class="tab-history__head">
      <tr class="tab-history__head-row">
        <th class="tab-history__head-column">Значение</th>
        <th class="tab-history__head-column">Дата</th>
      </tr>
    </thead>
    <tbody class="tab-history__body">
      <tr class="tab-history__body-row"
          v-for="(item, index) in listItem"
          :key="index">
        <td class="tab-history__body-column">{{ item.VNAME }}</td>
        <td class="tab-history__body-column">{{ formateDate(item.VDATE) + ' - ' + formateDate(item.VDATE_E) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'historyTab',
  props: {
    listItem: Array,
  },
  data() {
    return {
      arrMonth: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
    }
  },
  methods: {
    formateDate(val) {
      let nVal = String(val);
      let nDay = nVal.slice(0,2);
      let nMonth = ((this.arrMonth.indexOf(nVal.slice(3,6)) + 1) < 10) ? '0' + String(this.arrMonth.indexOf(nVal.slice(3,6)) + 1) : String(this.arrMonth.indexOf(nVal.slice(3,6)) + 1);
      let nYear = '20' + String(nVal.slice(7,9));
      nVal = nDay + '.' + nMonth + '.' + nYear;
      return nVal;
    },
  },
}
</script>

<style lang="scss" scoped>
.tab-history {
  width: 50%;
  border-collapse: collapse;
  font-family: 'Open sans';
  font-size: 0.7em;
  &__title {
    padding-left: 10px;
    text-align: left;
    font-weight: bold;
    text-transform: uppercase;
    color: darkslategray;
  }
  &__head {
    &-row {
      border-bottom: 2px solid grey;
    }
    &-column {
      &:last-child { width: 140px; }
    }
  }
  &__body {
    &-row {
      border-bottom: 1px solid grey;
    }
  }
}
</style>