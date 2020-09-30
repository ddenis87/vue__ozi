<template>
  <div class="document">
    <div class="document-control-input">
      <h5 class="document__title">Входящие документы</h5>
      <hr/>
      <div class="document__control">
        <document-control inListType="documentInput"
                          @add-document="addDocumentInput"></document-control>
      </div>
    </div>
    <div class="document-control-output">
      <h5 class="document__title">Исходящие документы</h5>
      <hr/>
      <div class="document__control">
        <document-control inListType="documentOutput"
                          @add-document="addDocumentOutput"></document-control>
      </div>
    </div>
    <div class="document-list-input">
      <hr/>
      <document-list :inListItem="listDocumentInput"
                     inListType="document-input">Входящие документы</document-list>
    </div>
    <div class="document-list-output">
      <hr/>
      <document-list :inListItem="listDocumentOutput"
                     inListType="document-output">Исходящие документы</document-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import documentControl from '@/components/person/person-card/document/document__control';
import documentList from '@/components/person/person-card/document/document__list';

export default {
  name: 'personCardDocument',
  components: {
    documentControl,
    documentList,
  },
  data: function() {
    return {
      personId: this.$store.state.personProfile.personId,
      listDocumentInput: [],
      listDocumentOutput: [],
    }
  },
  created: function() {
    this.getListDocumentInput();
    this.getListDocumentOutput();
  },
  methods: {
    addDocumentInput: function(option) {
      console.log(option)
    },
    addDocumentOutput: function(option) {
      console.log(option)
    },
    getListDocumentInput: function() {
      let option = {
        function: 'getListDocumentInputPerson',
        personId: this.personId
      }
      axios
        .post(pathBackend + 'person-card__document.php', null, {params: option})
        .then(response => {
          this.listDocumentInput = response.data;
        })
    },
    getListDocumentOutput: function() {
      let option = {
        function: 'getListDocumentOutputPerson',
        personId: this.personId
      }
      axios
        .post(pathBackend + 'person-card__document.php', null, {params: option})
        .then(response => {
          this.listDocumentOutput = response.data;
        })
    },
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
    color: darkslategrey;;
  }
  &-control-input {
    grid-area: document-control-input;
    padding-right: 10px;
    border-right: 1px solid darkgrey;
    // box-sizing: border-box;
  }
  &-control-output {
    grid-area: document-control-output;
    padding-left: 10px;
    // box-sizing: border-box;
  }
  &-list-input {
    grid-area: document-list-input;
    margin-top: 5px;
    // border-top: 1px solid darkgray;
  }
  &-list-output {
    grid-area: document-list-output;
    margin-top: 5px;
    // border-top: 1px solid darkgray;
  }
}
</style>