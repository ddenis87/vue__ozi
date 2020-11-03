<template>
  <div class="cryptovpn-cl-list">
    <table class="cryptovpn-cl-list-table">
      <thead class="cryptovpn-cl-list-table__head">
        <tr class="cryptovpn-cl-list-table__head_row">
          <th rowspan="2" class="cryptovpn-cl-list-table__head_column">№ п/п</th>
          <th rowspan="2" class="cryptovpn-cl-list-table__head_column">Территория установки</th>
          <th rowspan="2" class="cryptovpn-cl-list-table__head_column">Пользователь</th>
          <th colspan="3" class="cryptovpn-cl-list-table__head_column" v-if="taskVisibility">Задачи</th>
          <th rowspan="2" class="cryptovpn-cl-list-table__head_column">Основание установки</th>
          <th rowspan="2" class="cryptovpn-cl-list-table__head_column">Основание удаления</th>
          <!-- <th rowspan="2" class="cryptovpn-cl-list-table__head_column cryptovpn-cl-list-table__head_column-action"></th> -->
        </tr>
        <tr class="cryptovpn-cl-list-table__head_row" v-if="taskVisibility">
          <th class="cryptovpn-cl-list-table__head_column-task">З</th>
          <th class="cryptovpn-cl-list-table__head_column-task">ДП</th>
          <th class="cryptovpn-cl-list-table__head_column-task">К</th>
        </tr>
      </thead>
      <tbody class="cryptovpn-cl-list-table__body">
        <template v-for="(item, index) in listItem">
          <tr class="cryptovpn-cl-list-table__body_row" :key="index + 1">
            <td class="cryptovpn-cl-list-table__body_column">{{ index + 1 }}</td>
            <td class="cryptovpn-cl-list-table__body_column">{{ item.VDISTRICTINSTALL }}</td>
            <td class="cryptovpn-cl-list-table__body_column">{{ item.VFIO }}</td>
            <td class="cryptovpn-cl-list-table__body_column cryptovpn-cl-list-table__body_column-task" 
                :class="{'cryptovpn-cl-list-table__body_column-task_yes': (item.VTASKCLIENT == 1) ? true : false }" 
                @click="(event) => showDialogTask(event, item)" v-if="taskVisibility"></td>
            <td class="cryptovpn-cl-list-table__body_column cryptovpn-cl-list-table__body_column-task" 
                :class="{'cryptovpn-cl-list-table__body_column-task_yes': (item.VTASKMAIL == 1) ? true : false }" 
                @click="(event) => showDialogTask(event, item)" v-if="taskVisibility"></td>
            <td class="cryptovpn-cl-list-table__body_column cryptovpn-cl-list-table__body_column-task" 
                :class="{'cryptovpn-cl-list-table__body_column-task_yes': (item.VTASKCS == 1) ? true : false }" 
                @click="(event) => showDialogTask(event, item)" v-if="taskVisibility"></td>
            <td class="cryptovpn-cl-list-table__body_column crypto-table__body_column-base">{{ item.VBASISINSTALL }}</td>
            <td class="cryptovpn-cl-list-table__body_column crypto-table__body_column-base">{{ item.VBASISUNISTALL }}</td>
            <!-- <td class="cryptovpn-cl-list-table__body_column">
              <div class="control">
                <button class="control__button control__button_delete-row" title="Удалить запись"></button>
              </div>
            </td> -->
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CryptoVpnClList',
  props: {
    listItem: Array,
    listType: String
  },
  computed: {
    // watchListItem() { return this.listItem; },
    taskVisibility() { return (this.listType == 'CL') ? true : false; },
  },
}
</script>

<style lang="scss" scoped>
.cryptovpn-cl-list {
  margin-bottom: 20px;
  font-family: 'Open sans';
  font-size: 12px;
  &-table {
    width: 100%;
    border-collapse: collapse;
    &__head {
      &_row { 
        border-bottom: 2px solid grey;
      }
      &_column {
        padding: 3px;
        border-bottom: 2px solid grey;
        &:nth-child(1) { width: 42px; }
        &:nth-child(4) { border-left: 2px solid grey; border-right: 2px solid grey; }
        &:nth-child(5), &:nth-child(6) { width: 230px; }
        &:nth-child(7) {
          width: 30px;
          background-image: url('~@/assets/images/view/action.png');
          background-size: 18px 18px;
          background-repeat: no-repeat;
          background-position: center;
        }
        &-task {
          padding: 3px;
          border-bottom: 1px solid grey;
          width: 25px;
          text-align: center; 
          font-size: 10px; 
          font-weight: bold; 
          &:nth-child(1) { border-left: 2px solid grey; border-bottom: 2px solid grey; }
          &:nth-child(2) { border-left: 1px solid grey; border-right: 1px solid grey; border-bottom: 2px solid grey; }
          &:nth-child(3) { border-right: 2px solid grey; border-bottom: 2px solid grey; }
        }
      }
    }
    &__body {
      &_row { 
        border-bottom: 1px solid grey;
      } 
      &_column {
        padding: 3px 5px;
        &:nth-child(7) { background-color: rgba(173, 216, 230, .3); }
        &:nth-child(8) { background-color: rgba(144, 238, 144, .3); }
        &:nth-child(9) { background-color: #FF9200; }
        .control {
          display: flex;
          justify-content: space-around;
          &__button {
            width: 20px;
            height: 20px;
            border: 0px solid darkcyan;
            background-color: transparent;
            background-repeat: no-repeat;
            outline: none;
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
        &-task {
          text-align: center;
          background-image: url('~@/assets/images/view/no.png');
          background-size: 14px 14px;
          background-repeat: no-repeat;
          background-position: center;
          cursor: pointer;
          &_yes { background-image: url('~@/assets/images/view/yes.png'); }
        }
      }
    }
  }
}
</style>