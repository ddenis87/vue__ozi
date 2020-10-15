<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Отделы</h3>
    <div class="catalog__body">
      <div class="catalog__body-control">
        <catalog-control @adding-item="addingItem">
          <template v-slot:titleInput>Наименование отдела</template>
        </catalog-control>
      </div>
      <hr class="catalog__separator"/>
      <div class="catalog__body-list">
        <catalog-list :listItem="listItem" @delete-item="confirmDeleteItem"></catalog-list>
      </div>
    </div>
    <div class="catalog-dialog">
      <dialog-delete v-if="dialogDelete.visibility"
                     :inDialogProps="dialogDelete.dialogProps"
                     @cancel-close="() => { dialogDelete.visibility = false }"></dialog-delete>
    </div>
    <div class="catalog__blocked-content"
         v-if="(dialogDelete.visibility)"></div>
  </div>
</template>

<script>
import catalogControl from '@/components/catalog/catalog__control';
import catalogList from '@/components/catalog/catalog__list';
import dialogDelete from '@/components/catalog/dialog__delete';


export default {
  name: 'catalogDepartment',
  components: {
    catalogControl,
    catalogList,
    dialogDelete
  },
  computed: {
    listItem() { return this.$store.getters.GET_LIST_DEPARTMENT; }
  },
  data() {
    return {
      dialogDelete: { visibility: false, }
    }
  },
  created: function() {
    this.$store.dispatch('SET_LIST_CATALOGS', 'DEPARTMENT');
  },
  methods: {
    addingItem(inValueName) {
      let option = {
        catalogName: 'DEPARTMENT',
        valueName: inValueName,
      };
      this.$store.dispatch('ADDING_ITEM_CATALOGS', option);
    },
    confirmDeleteItem(inItem) {
      this.dialogDelete.visibility = true;
      this.dialogDelete.dialogProps = inItem;
      console.log(inItem);
    },
    deleteItem() {}
  }
}
</script>

<style lang="scss" scoped>
@import 'catalog.scss';

.catalog {
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