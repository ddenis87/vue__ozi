<template>
  <div class="vpn-list">
    <table class="vpn-table">
      <caption class="vpn-table__title"><slot></slot></caption>
      <thead class="vpn-table__head">
        <tr class="vpn-table__head-row">
          <th class="vpn-table__head-column">№ п/п</th>
          <th class="vpn-table__head-column">Наименование</th>
          <th class="vpn-table__head-column vpn-table__head-column_basis install">Основание установки</th>
          <th class="vpn-table__head-column vpn-table__head-column_document install">Акты</th>
          <th class="vpn-table__head-column vpn-table__head-column_basis unistall">Основание удаления</th>
          <th class="vpn-table__head-column vpn-table__head-column_document unistall">Акты</th>
          <th class="vpn-table__head-column vpn-table__head-column_action"></th>
        </tr>
      </thead>
      <tbody class="vpn-table__body">
        <template v-for="(item, index) in listItem">
          <tr class="vpn-table__body-row" :key="index + 1">
            <td class="vpn-table__body-column">{{ index + 1 }}</td>
            <td class="vpn-table__body-column">{{ item.VNAME }}</td>
            <td class="vpn-table__body-column vpn-table__body-column_basis install">
              <list-control-basis :basisProps="{ basisText: item.VINSTALLDOCNUMBER, basisDate: item.VINSTALLDOCDATE }"
                                  @open-dialog-basis="openDialogBasis(item.VID, item.VINSTALLDOCID, 'install')"></list-control-basis>
            </td>
            <td class="vpn-table__body-column vpn-table__body-column_document install">
              <list-control-file :upload="false"></list-control-file>
            </td>
            <td class="vpn-table__body-column vpn-table__body-column_basis unistall">
              <list-control-basis :basisProps="{ basisText: item.VUNISTALLDOCNUMBER, basisDate: item.VUNISTALLDOCDATE }"
                                  @open-dialog-basis="openDialogBasis(item.VID, item.VUNISTALLDOCID, 'unistall')"></list-control-basis>
            </td>
            <td class="vpn-table__body-column vpn-table__body-column_document unistall">
              <list-control-file :upload="true"></list-control-file>
            </td>
            <td rowspan="2" class="vpn-table__body-column">
                <button class="button_delete" title="Удалить запись"></button>
            </td>
          </tr>
          <tr class="vpn-table__body-row" :key="index + 1 * 1000">
            <td colspan="6" class="vpn-table__body-column vpn-table__body-column_note">
              <div class="note">
                <div class="note__item"><b>Примечание установки: </b>{{ (item.VINSTALLNOTE) ? item.VINSTALLNOTE : 'Отсутствует' }}</div>
                <div class="note__item"><b>Примечание удаления: </b>{{ (item.VUNISTALLNOTE) ? item.VUNISTALLNOTE : 'Отсутствует' }}</div>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <dialog-basis v-if="dialogPropsBasis.valueVisibility"
                  :dialogProps="dialogPropsBasis"
                  @cancel-update="() => { dialogPropsBasis.valueVisibility = false }"
                  @update-basis="updateBasis">Документ основание</dialog-basis>
  </div>
</template>

<script>
import ListControlFile from './vpn-list-control__file';
import ListControlBasis from './vpn-list-control__basis';
import DialogBasis from './vpn-list-dialog__basis';

export default {
  name: 'vpnListCs',
  components: {
    ListControlFile,
    ListControlBasis,
    DialogBasis,
  },
  props: {
    listItem: Array,
  },
  data() {
    return {
      dialogPropsBasis: {
        valueVisibility: false,
      },
    }
  },
  methods: {
    updateBasis(option) {
      this.$store.dispatch('SET_VPN_BASIS_CS', option);
      this.dialogPropsBasis = { valueVisibility: false, };
    },
    openDialogBasis(valueId, valueDocumentId, valueType) {
      let valueVisibility = true;
      this.dialogPropsBasis = { valueVisibility, valueId, valueDocumentId, valueType };
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'vpn-list.scss';
</style>