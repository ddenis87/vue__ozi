<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Территориальные органы</h3>
    <div class="catalog__body">
      <div class="catalog__body-control">
        <catalog-control @adding-item="addingItem">
          <template v-slot:titleInput>Наименование территориального органа</template>
        </catalog-control>
      </div>
      <hr class="catalog__separator"/>
      <div class="catalog__body-list">
        <catalog-list :list-item="listItem"
                      @switch-item="showDialogSwitch"></catalog-list>
      </div>
    </div>
    <div class="catalog-dialog">
      <dialog-switch v-if="dialogSwitch.visibility"
                     :in-dialog-props="dialogSwitch.dialogProps"
                     @accept-switching="switchItem"
                     @cancel-switching="() => { dialogSwitch.visibility = false }"></dialog-switch>
    </div>
    <div class="catalog__blocked-content"
         v-if="(dialogDelete.visibility || dialogSwitch.visibility || dialogChange.visibility)"></div>
  </div>
</template>

<script>
import { catalog } from './catalog';
import catalogControl from '@/components/catalog/catalog__control';
import catalogList from '@/components/catalog/catalog__list';
import dialogSwitch from '@/components/catalog/dialog__switch';

export default {
  name: 'catalogDistrict',
  components: {
    catalogControl,
    catalogList,
    dialogSwitch,
  },
  mixins: [catalog],
  computed: {
    listItem() {
      return this.$store.getters.GET_LIST_DISTRICT;
    }
  },
  data() {
    return {
      catalogName: 'DISTRICT',
    }
  },
  methods: {
    addingItem(inValueName) {
      let option = {
        catalogName: this.catalogName,
        valueName: inValueName,
      };
      this.$store.dispatch('ADDING_ITEM_CATALOGS', option);
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'catalog.scss';
</style>