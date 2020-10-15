<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Входящие документы</h3>
    <div class="catalog__body">
      <div class="catalog__body-control">
        <catalog-control>
          <template v-slot:titleInput>Наименование входящего документа</template>
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
  name: 'catalogDocumentInput',
  components: {
    catalogControl,
    catalogList
  },
  computed: {
    listItem() { return this.$store.getters.GET_LIST_DOCUMENT_INPUT; }
  },
  created: function() {
    this.$store.dispatch('SET_LIST_CATALOGS', 'DOCUMENT_INPUT');
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import 'catalog.scss';
</style>