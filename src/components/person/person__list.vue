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
          <tr class="person-list__table-body_row" :key="index">
            <td class="person-list__table-body_column">{{ index + 1 }}</td>
            <td class="person-list__table-body_column">{{ item.VFIO }}</td>
            <td class="person-list__table-body_column">{{ item.VPOST }}</td>
            <td class="person-list__table-body_column">{{ item.VDISTRICT }}</td>
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
    listItem: {default: []},
  }
}
</script>

<style lang="scss" scoped>
.person-list {
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
      &_column:nth-child(1) { width: 7%; }
      &_column:nth-child(2) { width: 31%; }
      &_column:nth-child(3) { width: 31%; }
      &_column:nth-child(4) { width: 31%; }
    }
    &-body {
      &_row { border-bottom: 1px solid grey; }
      &_column { padding: 5px; }
    }
  }
}
</style>