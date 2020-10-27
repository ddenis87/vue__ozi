<template>
  <div class="join-document">
    <h3 class="join-document__title">Журналы - Сводный журнал исходящих документов</h3>
    <div class="join-document__control">
      <join-document-control :listType="catalogName"
                             @accept-filter="acceptFilter"></join-document-control>
    </div>
    <hr/>
    <div class="join-document__list">
      <join-document-list :listItem="listItem"
                          :listType="catalogName"></join-document-list>
    </div>
  </div>
</template>

<script>
import JoinDocumentList from '@/components/report/join-document__list';
import JoinDocumentControl from '@/components/report/join-document__control';

export default {
  name: 'JoinDocumentOutput',
  components: {
    JoinDocumentList,
    JoinDocumentControl,
  },
  computed: {
    listItem() { return this.$store.getters.GET_JOIN_DOCUMENT_LIST; }
  },
  data() {
    return {
      catalogName: 'OUTPUT',
      dateRange: {
        dateStart: `${(new Date()).getFullYear()}-01-01`,
        dateEnd: `${(new Date()).getFullYear()}-12-31`,
      },
    }
  },
  created() {
    this.$store.dispatch('SET_JOIN_DOCUMENT_LIST', {catalogName: this.catalogName, dateStart: this.dateRange.dateStart, dateEnd: this.dateRange.dateEnd});
  },
  methods: {
    acceptFilter(option) {
      let sendOption = {
        catalogName: this.catalogName,
        dateStart: (option.dateRange[0]) ? option.dateRange[0] : this.dateRange.dateStart,
        dateEnd: (option.dateRange[1]) ? option.dateRange[1] : this.dateRange.dateEnd,
        valueDocumentId: option.valueDocumentId,
      };
      if (option.valueDocumentId != '0') this.$store.dispatch('SET_JOIN_DOCUMENT_LIST_FILTER', sendOption);
      else this.$store.dispatch('SET_JOIN_DOCUMENT_LIST', sendOption);
    },
  }
}
</script>

<style lang="scss" scoped>
.join-document {
  font-family: 'Montserrat';
  &__body {
    padding-left: 10px;
  }
  &__title {
    margin-bottom: 10px;
    color: darkslategrey;
  }
  &__separator {
    margin: 10px 0px;
  }
}
</style>