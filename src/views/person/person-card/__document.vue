<template>
  <div class="document">
    <div class="document-control-input">
      <h4 class="document__title">Входящие документы</h4>
      <hr/>
      <div class="document__control">
        <document-control inListType="documentInput"></document-control>
      </div>
    </div>
    <div class="document-control-output">
      <h4 class="document__title">Исходящие документы</h4>
      <hr/>
      <div class="document__control">
        <document-control inListType="documentOutput"></document-control>
      </div>
    </div>
    <div class="document-list-input">
      <document-list><template v-slot:title>Входящие документы</template></document-list>
    </div>
    <div class="document-list-output">
      <document-list><template v-slot:title>Исходящие документы</template></document-list>
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
    border-top: 1px solid darkgray;
  }
  &-list-output {
    grid-area: document-list-output;
    margin-top: 5px;
    border-top: 1px solid darkgray;
  }
}
</style>