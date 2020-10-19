<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Администраторы</h3>
    <div class="catalog__body">
      <div class="catalog__body-control">
        <catalog-control @adding-item="addingItem">
          <template v-slot:titleInput>Наименование должности</template>
        </catalog-control>
      </div>
      <hr class="catalog__separator"/>
      <div class="catalog__body-list">
        <catalog-list :list-item="listItem"
                      @change-item="showDialogChange"
                      @switch-item="showDialogSwitch"
                      @delete-item="showDialogDelete"></catalog-list>
      </div>
    </div>
    <div class="catalog-dialog">
      <dialog-switch v-if="dialogSwitch.visibility"
                     :in-dialog-props="dialogSwitch.dialogProps"
                     @accept-switching="switchItem"
                     @cancel-switching="() => { dialogSwitch.visibility = false }"></dialog-switch>
      <dialog-change v-if="dialogChange.visibility"
                     :dialog-props="dialogChange.dialogProps"
                     @accept-change="changeItem"
                     @cancel-changes="() => { dialogChange.visibility = false }"></dialog-change>
      <dialog-delete v-if="dialogDelete.visibility"
                     :in-dialog-props="dialogDelete.dialogProps"
                     :in-catalog-name="catalogName"
                     @accept-deleting="deleteItem"
                     @cancel-deleting="() => { dialogDelete.visibility = false }"></dialog-delete>
    </div>
    <div class="catalog__blocked-content"
         v-if="(dialogDelete.visibility || dialogSwitch.visibility || dialogChange.visibility)"></div>
  </div>
</template>

<script>
import { catalog } from './catalog';
import catalogControl from '@/components/catalog/catalog__control-security-admin';
import catalogList from '@/components/catalog/catalog__list-security-admin';
import dialogSwitch from '@/components/catalog/dialog__switch-security-admin';
import dialogChange from '@/components/catalog/dialog__change';
import dialogDelete from '@/components/catalog/dialog__delete';

export default {
  name: 'catalogDepartment',
  components: {
    catalogControl,
    catalogList,
    dialogSwitch,
    dialogChange,
    dialogDelete,
  },
  mixins: [catalog],
  computed: {
    listItem() {
      return this.$store.getters.GET_LIST_SECURITY_ADMIN;
    }
  },
  data() {
    return {
      catalogName: 'SECURITY_ADMIN',
    }
  },
  methods: {
    addingItem(inValueFioFull, inValueFioShort, inValueIp, inValueAccessLevel) {
      let option = {
        catalogName: this.catalogName,
        valueFioFull: inValueFioFull,
        valueFioShort: inValueFioShort,
        valueIp: inValueIp,
        valueAccessLevel: (inValueAccessLevel == true) ? '2' : '3',
      };
      this.$store.dispatch('ADDING_ITEM_CATALOGS', option);
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'catalog.scss';
</style>