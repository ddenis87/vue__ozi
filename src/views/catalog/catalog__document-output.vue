<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Исходящие документы</h3>
    <div class="catalog__body">
      <div class="catalog__body-control">
        <catalog-control @adding-item="addingItem">
          <template v-slot:titleInput>Наименование исходящего документа</template>
        </catalog-control>
      </div>
      <hr class="catalog__separator"/>
      <div class="catalog__body-list">
        <catalog-list :listItem="listItem"></catalog-list>
      </div>
    </div>
  </div>
</template>

<script>
import catalogControl from '@/components/catalog/catalog__control-document';
import catalogList from '@/components/catalog/catalog__list-document';

export default {
  name: 'catalogDocumentOutput',
  components: {
    catalogControl,
    catalogList
  },
  computed: {
    listItem() { return this.$store.getters.GET_LIST_DOCUMENT_OUTPUT; }
  },
  created: function() {
    this.$store.dispatch('SET_LIST_CATALOGS', 'DOCUMENT_OUTPUT');
  },
  methods: {
    addingItem(inValueName, inValueVerify) {
      let option = {
        catalogName: 'DOCUMENT_OUTPUT',
        valueName: inValueName,
        valueVerify: (inValueVerify == true) ? '1' : '0',
      };
      this.$store.dispatch('ADDING_ITEM_CATALOGS', option);
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'catalog.scss';
</style>