<template>
  <div class="document">
    <div class="document-input">
      <h5>Входящие документы</h5>
      <hr/>
      <div class="document__control"></div>
      <div class="document__list"></div>
    </div>
    <div class="document-output">
      <h5>Исходящие документы</h5>
      <hr/>
      <div class="document__control"></div>
      <div class="document__list"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.document {
  display: grid;
  grid-template-areas: "document-input document-output";
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  &-input {
    grid-area: document-input;
  }
  &-output {
    grid-area: document-output;
  }
}
</style>