<template>
  <div class="document-control">
    <div class="document-control__title">Добавление документа</div>
    <div class="document-control__box">
      <c-select class="document-control__select">Документ</c-select>
      <c-input class="document-control__input">Примечание</c-input>
      <c-button class="document-control__button-item">Добавить</c-button>
    </div>
  </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cSelect from '@/components/elements/c-select';
import cButton from '@/components/elements/c-button';

export default {
  name: 'documentControl',
  components: {
    cInput,
    cSelect,
    cButton,
  }
}
</script>

<style lang="scss" scoped>
.document-control {
  width: 100%;
  margin-bottom: 10px;
  // padding: 0px 20px;
  box-sizing: border-box;
  &__title {
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }
  &__input {
    width: 100%;
    margin-bottom: 10px;
  }
  &__select {
    width: 100%;
    margin-bottom: 10px;
    // margin-left: 20px;
  }
  &__button-item {
    width: 150px;
    // margin-left: 10px;
  }
}
</style>