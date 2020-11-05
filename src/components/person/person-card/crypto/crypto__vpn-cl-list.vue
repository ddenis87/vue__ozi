<template>
  <div class="vpn-list">
    <table class="vpn-table">
      <caption class="vpn-table__title"><slot></slot></caption>
      <thead class="vpn-table__head">
        <tr class="vpn-table__head-row">
          <th rowspan="2" class="vpn-table__head-column">№ п/п</th>
          <th rowspan="2" class="vpn-table__head-column">Наименование</th>
          <th colspan="3" class="vpn-table__head-column vpn-table__head-column_task">Задачи</th>
          <th rowspan="2" class="vpn-table__head-column vpn-table__head-column_basis install">Основание установки</th>
          <th rowspan="2" class="vpn-table__head-column vpn-table__head-column_document install">Акты</th>
          <th rowspan="2" class="vpn-table__head-column vpn-table__head-column_basis unistall">Основание удаления</th>
          <th rowspan="2" class="vpn-table__head-column vpn-table__head-column_document unistall">Акты</th>
          <th rowspan="2" class="vpn-table__head-column vpn-table__head-column_action"></th>
        </tr>
        <tr class="vpn-table__head_row">
          <th class="vpn-table__head-column vpn-table__head-column_task">З</th>
          <th class="vpn-table__head-column vpn-table__head-column_task">ДП</th>
          <th class="vpn-table__head-column vpn-table__head-column_task">К</th>
        </tr>
      </thead>
      <tbody class="vpn-table__body">
        <template v-for="(item, index) in listItem">
          <tr class="vpn-table__body-row" :key="index + 1">
            <td class="vpn-table__body-column">{{ index + 1 }}</td>
            <td class="vpn-table__body-column">{{ item.VNAME }}</td>
            <td class="vpn-table__body-column vpn-table__body-column_task task" 
                :class="{'task_yes': (item.VTASKCLIENT == 1) ? true : false }" 
                @click="(event) => openDialogTask(event, item.VID, item.VTASKCLIENT, item.VTASKMAIL, item.VTASKCS )"></td>
            <td class="vpn-table__body-column vpn-table__body-column_task task" 
                :class="{'task_yes': (item.VTASKMAIL == 1) ? true : false }" 
                @click="(event) => openDialogTask(event, item.VID, item.VTASKCLIENT, item.VTASKMAIL, item.VTASKCS)"></td>
            <td class="vpn-table__body-column vpn-table__body-column_task task" 
                :class="{'task_yes': (item.VTASKCS == 1) ? true : false }" 
                @click="(event) => openDialogTask(event, item.VID, item.VTASKCLIENT, item.VTASKMAIL, item.VTASKCS)"></td>
            <td class="vpn-table__body-column install">
              <list-control-basis :basisProps="{ basisText: item.VINSTALLDOCNUMBER, basisDate: item.VINSTALLDOCDATE }"
                                  @open-dialog-basis="openDialogBasis(item.VID, item.VINSTALLDOCID, 'install')"></list-control-basis>
            </td>
            <td class="vpn-table__body-column install">
              <list-control-file :upload="false"></list-control-file>
            </td>
            <td class="vpn-table__body-column unistall">
              <list-control-basis :basisProps="{ basisText: item.VUNISTALLDOCNUMBER, basisDate: item.VUNISTALLDOCDATE }"
                                  @open-dialog-basis="openDialogBasis(item.VID, item.VUNISTALLDOCID, 'unistall')"></list-control-basis>
            </td>
            <td class="vpn-table__body-column unistall">
              <list-control-file :upload="false"></list-control-file>
            </td>
            <td rowspan="2" class="vpn-table__body-column">
                <button class="button_delete" title="Удалить запись"></button>
            </td>
          </tr>
          <tr class="vpn-table__body_row" :key="index + 1 * 1000">
            <td colspan="9" class="vpn-table__body-column vpn-table__body-column_note">
              <div class="note">
                <div class="note__item"><b>Примечание установки: </b>{{ (item.VINSTALLNOTE) ? item.VINSTALLNOTE : 'Отсутствует' }}</div>
                <div class="note__item"><b>Примечание удаления: </b>{{ (item.VUNISTALLNOTE) ? item.VUNISTALLNOTE : 'Отсутствует' }}</div>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="vpn-dialog">
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
    <div class="vpn__blocked-content"
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
@import 'vpn-list.scss';

.vpn-list {
  .vpn-table {
    &__head {
      &-column {
        &_task {
          border-left: 2px solid grey; border-right: 2px solid grey;
          &:nth-child(1), &:nth-child(2), &:nth-child(3) {
            text-align: center;
            width: 30px;
          }
        }
      }
    }
    &__body {
      .task { 
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
</style>