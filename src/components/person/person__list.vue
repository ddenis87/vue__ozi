<template>
  <div class="person-list">
    <table class="person-list__table">
      <thead class="person-list__table-head">
        <tr class="person-list__table-head_row">
          <th class="person-list__table-head_column">№ п/п</th>
          <th class="person-list__table-head_column">ФИО</th>
          <th class="person-list__table-head_column">Должность</th>
          <th class="person-list__table-head_column">Территориальный орган</th>
        </tr>
      </thead>
      <tbody class="person-list__table-body">
        <template v-for="(item, index) in listItem">
          <template v-if="item.VVISIBLE == '1'">
            <tr class="person-list__table-body_row"
                :key="index"
                @click="personEnter(item)">
            <td class="person-list__table-body_column">{{ incrementIndex() }}</td>
            <td class="person-list__table-body_column">{{ item.VFIO }}</td>
            <td class="person-list__table-body_column">{{ item.VPOSTNAME }}</td>
            <td class="person-list__table-body_column">{{ item.VDISTRICTNAME }}</td>
            </tr>
          </template>
          <template v-else>
            <tr class="person-list__table-body_row_disable"
                :key="index">
            <td class="person-list__table-body_column_disable">{{ }}</td>
            <td class="person-list__table-body_column_disable" colspan="3">{{ item.VFIO }}</td>
            </tr>
          </template>
        </template>
      </tbody>      
    </table>
  </div>
</template>

<script>
export default {
  name: 'personList',
  props: {
    listItem: {default: []},
  },
  data() {
    return {
      indexItem: 0,
    }
  },
  beforeUpdate() { this.indexItem = 0; },
  methods: {
    personEnter(inItem) {
      if (inItem.VVISIBLE != '0') this.$emit('click', inItem.VID);
    },
    incrementIndex() { return ++this.indexItem; }
  }
}
</script>

<style lang="scss" scoped>
.person-list {
  font-family: 'Open sans';
  font-size: 13px;
  &__table {
    width: 100%;
    border-collapse: collapse;
    &-head {
      &_row { border-bottom: 1px solid grey; }
      &_column { padding: 5px; }
      &_column:nth-child(1) { width: 7%; }
      &_column:nth-child(2) { width: 31%; }
      &_column:nth-child(3) { width: 31%; }
      &_column:nth-child(4) { width: 31%; }
    }
    &-body {
      &_row { 
        border-bottom: 1px solid grey; 
        cursor: pointer;
        &:hover {
          background-color:rgba(95, 158, 160, .3);
        }
      }
      &_row_disable {
        border-bottom: 1px solid grey; 
        background-color: lightgray; 
      }
      &_column {
        padding: 5px;
      }
      &_column_disable {
        padding: 5px; 
        padding-left: 15px;
      }
    }
  }
}
</style>