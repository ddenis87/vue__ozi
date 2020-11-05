<template>
  <div class="crypto-list">
    <table class="crypto-table">
      <caption class="crypto-table__title"><slot></slot></caption>
      <thead class="crypto-table__head">
        <tr class="crypto-table__head_row">
          <th rowspan="2" class="crypto-table__head_column">№ п/п</th>
          <th rowspan="2" class="crypto-table__head_column">Наименование</th>
          <th colspan="3" class="crypto-table__head_column">Задачи</th>
          <th rowspan="2" class="crypto-table__head_column">Установка</th>
          <th rowspan="2" class="crypto-table__head_column">Акты</th>
          <th rowspan="2" class="crypto-table__head_column">Удаление</th>
          <th rowspan="2" class="crypto-table__head_column">Акты</th>
          <th rowspan="2" class="crypto-table__head_column crypto-table__head_column-action"></th>
        </tr>
        <tr class="crypto-table__head_row">
          <th class="crypto-table__head_column-task">З</th>
          <th class="crypto-table__head_column-task">ДП</th>
          <th class="crypto-table__head_column-task">К</th>
        </tr>
      </thead>
      <tbody class="crypto-table__body">
        <template v-for="(item, index) in listItem">
          <tr class="crypto-table__body_row" :key="index + 1">
            <td class="crypto-table__body_column">{{ index + 1 }}</td>
            <td class="crypto-table__body_column">{{ item.VNAME }}</td>
            <td class="crypto-table__body_column crypto-table__body_column-task" 
                :class="{'crypto-table__body_column-task_yes': (item.VTASKCLIENT == 1) ? true : false }" 
                @click="(event) => openDialogTask(event, item.VID, item.VTASKCLIENT, item.VTASKMAIL, item.VTASKCS )"></td>
            <td class="crypto-table__body_column crypto-table__body_column-task" 
                :class="{'crypto-table__body_column-task_yes': (item.VTASKMAIL == 1) ? true : false }" 
                @click="(event) => openDialogTask(event, item.VID, item.VTASKCLIENT, item.VTASKMAIL, item.VTASKCS)"></td>
            <td class="crypto-table__body_column crypto-table__body_column-task" 
                :class="{'crypto-table__body_column-task_yes': (item.VTASKCS == 1) ? true : false }" 
                @click="(event) => openDialogTask(event, item.VID, item.VTASKCLIENT, item.VTASKMAIL, item.VTASKCS)"></td>
            <td class="crypto-table__body_column crypto-table__body_column-base">
              <list-control-basis :basisProps="{ basisText: item.VINSTALLDOCNUMBER, basisDate: item.VINSTALLDOCDATE }"
                                  @open-dialog-basis="openDialogBasis(item.VID, item.VINSTALLDOCID, 'install')"></list-control-basis>
            </td>
            <td class="crypto-table__body_column">
              <list-control-file :upload="false"></list-control-file>
            </td>
            <td class="crypto-table__body_column crypto-table__body_column-base">
              <list-control-basis :basisProps="{ basisText: item.VUNISTALLDOCNUMBER, basisDate: item.VUNISTALLDOCDATE }"
                                  @open-dialog-basis="openDialogBasis(item.VID, item.VUNISTALLDOCID, 'unistall')"></list-control-basis>
            </td>
            <td class="crypto-table__body_column">
              <list-control-file :upload="false"></list-control-file>
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
    <div class="crypto-dialog">
      <dialog-task v-if="dialogPropsTask.valueVisibility" 
                   :style="{left: dialogPropsTask.posLeft + 'px', top: dialogPropsTask.posTop + 'px'}"
                   :dialogProps="dialogPropsTask"
                   @cancel-update="() => { dialogPropsTask.valueVisibility = false; }"
                   @update-task="() => { dialogPropsTask.valueVisibility = false; }"></dialog-task>
      <dialog-basis v-if="dialogPropsBasis.valueVisibility"
                    :dialogProps="dialogPropsBasis"
                    @cancel-update="() => { dialogPropsBasis.valueVisibility = false }"
                    @update-basis="updateBasis">Документ основание</dialog-basis>
    </div>
    <div class="crypto__blocked-content"
         v-if="(dialogPropsTask.valueVisibility || dialogPropsBasis.valueVisibility)"></div>
  </div>
</template>

<script>
import ListControlFile from './list-control_file';
import ListControlBasis from './list-control_basis';
import DialogTask from './dialog__task';
import DialogBasis from './dialog__basis';

export default {
  name: 'vpnClList',
  components: {
    DialogTask,
    ListControlFile,
    ListControlBasis,
    DialogBasis,
  },
  props: {
    listItem: Array,
  },
  data() {
    return {
      dialogPropsTask: {
        posLeft: 0,
        posTop: 0,
        valueVisibility: false,
      },
      dialogPropsBasis: {
        valueVisibility: false,
      },
    }
  },
  methods: {
    updateBasis(option) {
      this.$store.dispatch('SET_VPN_BASIS_CL', option);
      this.dialogPropsBasis = { valueVisibility: false, };
    },
    openDialogBasis(valueId, valueDocumentId, valueType) {
      let valueVisibility = true;
      this.dialogPropsBasis = { valueVisibility, valueId, valueDocumentId, valueType };
    },
    openDialogTask(event, valueId, valueClient, valueMail, valueCs ) {
      this.dialogPropsTask = {
        valueVisibility: true,
        posLeft: event.x + 15,
        posTop: event.y + 15,
        valueId,
        valueClient,
        valueMail,
        valueCs
      }
    },
  }
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
        &:nth-child(3) { border-left: 2px solid grey; border-right: 2px solid grey; }
        &:nth-child(5), &:nth-child(7) { width: 70px; border-right: 2px solid darkgray; border-left: 1px solid darkgray; }
        &:nth-child(4), &:nth-child(6) { width: 230px; }
        &:nth-child(4), &:nth-child(5) { background-color: lightblue; }
        &:nth-child(6), &:nth-child(7) { background-color: lightgreen; }
        &:nth-child(8) {
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
      &_column {
        padding: 5px 5px;
        &-end {
          border-bottom: 1px solid grey;
          .note {
            display: flex;
            justify-content: space-between;
          }
        }
        &:nth-child(7), &:nth-child(9) { border-right: 2px solid darkgray; border-left: 1px solid darkgray; }
        &:nth-child(6), &:nth-child(7) { background-color: rgba(173, 216, 230, .3); }
        &:nth-child(8), &:nth-child(9) { background-color: rgba(144, 238, 144, .3); }
        &:nth-child(10) { background-color: #FF9200; }
        &-base { width: 250px; }
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
  &-dialog {
    position: relative;
    z-index: 998;
  }
  &__blocked-content {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
  }
}
</style>