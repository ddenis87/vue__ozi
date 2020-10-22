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
        <td class="tab-history__body-column">{{ item.VFIO }}</td>
        <td class="tab-history__body-column">{{ item.VDATE }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'historyTab',
  props: {
    listItem: Array,
  }
}
</script>

<style lang="scss" scoped>
.tab-history {
  width: 50%;
  // border: 1px solid grey;
  border-collapse: collapse;
  font-family: 'Open sans';
  font-size: 0.7em;
  &__title {
    padding-left: 10px;
    text-align: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  &__head {
    &-row {
      border-bottom: 2px solid grey;
    }
    &-column {
      &:last-child { width: 70px; }

    }
  }
  &__body {
    &-row {
      border-bottom: 1px solid grey;
    }
  }
}
</style>