<template>
  <div class="document-list">
    <table class="document-list__table">
      <caption class="document-list__table-title"><slot name="title"></slot></caption>
      <thead class="document-list__table-head">
        <tr class="document-list__table-head_row">
          <th class="document-list__table-head_column">№ п/п</th>
          <th class="document-list__table-head_column">Наименование</th>
          <th class="document-list__table-head_column">Примечание</th>
          <th class="document-list__table-head_column">Дейст.</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.document-list {
  // padding-left: 20px;
  // padding-right: 20px;
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
      &_column:nth-child(2) { width: 45%; text-align: left; }
      &_column:nth-child(3) { width: 45%; text-align: left; }
      &_column:nth-child(4) { width: 5%; }
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
    }
  }
}
</style>