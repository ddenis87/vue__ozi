<template>
  <div class="crypto-list">
    <table class="crypto-table">
      <caption class="crypto-table__title"><slot></slot></caption>
      <thead class="crypto-table__head">
        <tr class="crypto-table__head_row">
          <th rowspan="2" class="crypto-table__head_column">№ п/п</th>
          <th rowspan="2" class="crypto-table__head_column">Наименование</th>
          <!-- <th colspan="3" class="crypto-table__head_column">Задачи</th> -->
          <th rowspan="2" class="crypto-table__head_column">Установка</th>
          <th rowspan="2" class="crypto-table__head_column">Акты</th>
          <th rowspan="2" class="crypto-table__head_column">Удаление</th>
          <th rowspan="2" class="crypto-table__head_column">Акты</th>
          <th rowspan="2" class="crypto-table__head_column crypto-table__head_column-action"></th>
        </tr>
        <!-- <tr class="crypto-table__head_row">
          <th class="crypto-table__head_column-task">З</th>
          <th class="crypto-table__head_column-task">ДП</th>
          <th class="crypto-table__head_column-task">К</th>
        </tr> -->
      </thead>
      <tbody class="crypto-table__body">
        <template v-for="(item, index) in listItem">
          <tr class="crypto-table__body_row" :key="index + 1">
            <td class="crypto-table__body_column">{{ index + 1 }}</td>
            <td class="crypto-table__body_column">{{ item.VNAME }}</td>
            <td class="crypto-table__body_column crypto-table__body_column-task" :class="{'crypto-table__body_column-task_yes': (item.VTASKCLIENT == 1) ? true : false }"></td>
            <td class="crypto-table__body_column crypto-table__body_column-task" :class="{'crypto-table__body_column-task_yes': (item.VTASKMAIL == 1) ? true : false }"></td>
            <td class="crypto-table__body_column crypto-table__body_column-task" :class="{'crypto-table__body_column-task_yes': (item.VTASKCS == 1) ? true : false }"></td>
            <td class="crypto-table__body_column crypto-table__body_column-base">
              <span>{{ getFormatedDocumentBase(item.VINSTALLDOCNUMBER, item.VINSTALLDOCDATE) }}</span>
              <button class="base-button" title="Выбрать">...</button>
            </td>
            <td class="crypto-table__body_column">
              <div class="control">
                <button class="control__button control__button_document"
                        title="Показать документ"
                        v-if="(item.VINSTALLPATH)"
                        @click="documentOpen(item.VINSTALLPATH)"></button>
                <button class="control__button control__button_document-create" title="Сформировать документ" v-else></button>
                <button class="control__button control__button_document-delete" title="Удалить документ" v-if="(item.VINSTALLPATH)"></button>
                <button class="control__button control__button_document-upload" title="Загрузить документ" v-else></button>
              </div>
            </td>
            <td class="crypto-table__body_column crypto-table__body_column-base">
              <span>{{ getFormatedDocumentBase(item.VUNISTALLDOCNUMBER, item.VUNISTALLDOCDATE) }}</span>
              <button class="base-button" title="Выбрать">...</button>
            </td>
            <td class="crypto-table__body_column">
              <div class="control">
                <button class="control__button control__button_document"
                        title="Показать документ" 
                        v-if="(item.VUNISTALLPATH)"
                        @click="documentOpen(item.VUNISTALLPATH)"></button>
                <button class="control__button control__button_document-create" title="Сформировать документ" v-else></button>
                <button class="control__button control__button_document-delete" title="Удалить документ" v-if="(item.VUNISTALLPATH)"></button>
                <button class="control__button control__button_document-upload" title="Загрузить документ" v-else></button>
              </div>
            </td>
            <td rowspan="2" class="crypto-table__body_column">
              <div class="control">
                <button class="control__button control__button_delete-row" title="Удалить запись"></button>
              </div>
            </td>
          </tr>
          <tr class="crypto-table__body_row" :key="index + 1 * 1000">
            <td colspan="9" class="crypto-table__body_column crypto-table__body_column-end">
              <div class="note">
                <div class="note__item"><b>Примечание установки: </b>{{ (item.VINSTALLNOTE) ? item.VINSTALLNOTE : 'Отсутствует' }}</div>
                <div class="note__item"><b>Примечание удаления: </b>{{ (item.VUNISTALLNOTE) ? item.VUNISTALLNOTE : 'Отсутствует' }}</div>
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
  name: 'vpnCsList'
}
</script>

<style lang="scss" scoped>
.crypto {
  &-list {
    font-family: 'Open sans';
    font-size: 13px;
  }
  &-table {
    width: 100%;
    border-collapse: collapse;
    &__title {
      text-align: left;
      font-family: 'Montserrat';
      font-size: 14px;
      font-weight: bold;
      border-bottom: 2px solid grey;
    }
    &__head {
      &_column {
        padding: 3px;
        border-bottom: 2px solid grey;
        &:nth-child(1) { width: 42px; }
        // &:nth-child(3) { border-left: 2px solid grey; border-right: 2px solid grey; }
        &:nth-child(4), &:nth-child(6) { width: 60px; border-left: 2px solid darkgray; }
        &:nth-child(3), &:nth-child(5) { width: 230px; }
        &:nth-child(3), &:nth-child(4) { background-color: lightblue; }
        &:nth-child(5), &:nth-child(6) { background-color: lightgreen; }
        &:nth-child(7) {
          width: 30px;
          background-image: url('~@/assets/images/view/action.png');
          background-size: 18px 18px;
          background-repeat: no-repeat;
          background-position: center;
        }
        // &-task {
        //   padding: 3px;
        //   border-bottom: 1px solid grey;
        //   width: 25px;
        //   text-align: center; 
        //   font-size: 10px; 
        //   font-weight: bold; 
        //   &:nth-child(1) { border-left: 2px solid grey; border-bottom: 2px solid grey; }
        //   &:nth-child(2) { border-left: 1px solid grey; border-right: 1px solid grey; border-bottom: 2px solid grey; }
        //   &:nth-child(3) { border-right: 2px solid grey; border-bottom: 2px solid grey; }
        // }
      }
    }
    &__body {
      &_column {
        padding: 5px 5px;
        &-end {
          border-bottom: 1px solid grey;
          .note {
            display: flex;
            justify-content: space-between;
          }
        }
        &:nth-child(6), &:nth-child(7) { background-color: rgba(173, 216, 230, .3); }
        &:nth-child(8), &:nth-child(9) { background-color: rgba(144, 238, 144, .3); }
        &:nth-child(10) { background-color: #FF9200; }
        .control {
          display: flex;
          justify-content: space-around;
          &__button {
            width: 20px;
            height: 20px;
            border: 0px solid darkcyan;
            background-color: transparent;
            background-repeat: no-repeat;
            cursor: pointer;
            &_document { background-image: url('~@/assets/images/control/button_document.png'); background-size: contain; }
            &_document-create { background-image: url('~@/assets/images/control/button_document-create.png'); background-size: contain; }
            &_document-delete { background-image: url('~@/assets/images/control/button_delete_file.png'); background-size: contain; }
            &_document-upload { background-image: url('~@/assets/images/control/button_upload_file.png'); background-size: contain; }
            &_delete-row { background-image: url('~@/assets/images/control/button_delete.png'); background-size: contain; }
          }
        }
        &-base {
          display: flex;
          justify-content: space-between;
          .base-button {
            width: 20px;
            height: 20px;
            padding: 0px;
            font-weight: bold;
            cursor: pointer;
            border: 1px solid black;
            background-color: transparent;
          }
        }
        // &-task {
        //   text-align: center;
        //   background-image: url('~@/assets/images/view/no.png');
        //   background-size: 14px 14px;
        //   background-repeat: no-repeat;
        //   background-position: center;
        //   &_yes { background-image: url('~@/assets/images/view/yes.png'); }
        // }
      }
    }
  }
}
</style>