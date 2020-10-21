<template>
  <div class="document">
    <div class="document-control-input">
      <h5 class="document__title">Входящие документы</h5>
      <div class="document__control">
        <document-control list-type="INPUT"
                          @adding-item="addingItem"></document-control>
      </div>
    </div>
    <div class="document-control-output">
      <h5 class="document__title">Исходящие документы</h5>
      <div class="document__control">
        <document-control list-type="OUTPUT"
                          @adding-item="addingItem"></document-control>
      </div>
    </div>
    <div class="document-list-input">
      <hr/>
      <document-list :inListItem="listDocumentInput"
                     inListType="document-input"
                     @delete-item="deleteItem">Входящие документы</document-list>
    </div>
    <div class="document-list-output">
      <hr/>
      <document-list :inListItem="listDocumentOutput"
                     inListType="document-output">Исходящие документы</document-list>
    </div>
  </div>
</template>

<script>
import documentControl from '@/components/person/person-card/document/document__control';
import documentList from '@/components/person/person-card/document/document__list';

export default {
  name: 'personCardDocument',
  components: {
    documentControl,
    documentList,
  },
  computed: {
    listDocumentInput() { return this.$store.getters.GET_USER_DOCUMENT_INPUT; },
    listDocumentOutput() { return this.$store.getters.GET_USER_DOCUMENT_OUTPUT; }
  },
  data() {
    return {
      valueUserId: decodeURI(window.location.search.slice(window.location.search.indexOf("=") + 1)),
    }
  },
  created() {
    this.$store.dispatch('SET_USER_DOCUMENTS', {catalogName: 'INPUT', valueUserId: this.valueUserId});
    this.$store.dispatch('SET_USER_DOCUMENTS', {catalogName: 'OUTPUT', valueUserId: this.valueUserId});
  },
  methods: {
    addingItem(option) {
      let sendOption = option;
      sendOption.valueUserId = this.valueUserId;
      this.$store.dispatch('ADDING_USER_DOCUMENTS', sendOption);
    },
    deleteItem(valueId) {
      let sendOption = {
        valueId: valueId,
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.document {
  display: grid;
  grid-template-areas: "document-control-input document-control-output"
                       "document-list-input document-list-input"
                       "document-list-output document-list-output";
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding-bottom: 20px;
  &__title {
    color: darkslategrey;
    margin-bottom: 10px;
  }
  &-control-input {
    grid-area: document-control-input;
    padding-right: 10px;
    border-right: 1px solid darkgrey;
  }
  &-control-output {
    grid-area: document-control-output;
    padding-left: 10px;
  }
  &-list-input {
    grid-area: document-list-input;
    margin-top: 5px;
  }
  &-list-output {
    grid-area: document-list-output;
    margin-top: 5px;
  }
}
</style>