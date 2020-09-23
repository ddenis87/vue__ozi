<template>
  <div class="catalog-control">
    <div class="catalog-control__title">Добавление записи</div>
    <c-input class="catalog-control__input">Наименование документа</c-input>
    
    <div class="catalog-control__box">
      <c-checkbox class="catalog-control__checkbox">Требует верификации</c-checkbox>
      <c-button class="catalog-control__button-item">Добавить</c-button>
    </div>
    </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cCheckbox from '@/components/elements/c-checkbox';
import cButton from '@/components/elements/c-button';

export default {
  name: 'catalog-control',
  components: {
    cInput,
    cCheckbox,
    cButton,
  },
  data: function() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .catalog-control {
    width: 100%;
    margin-bottom: 10px;
    padding: 0px 20px;
    box-sizing: border-box;
    &__title {
      margin-bottom: 5px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
    &__input {
      margin-bottom: 10px;
    }
    &__box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__button-item {
      width: 150px;
    }
    

    .confirm {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3px;
      &__input {cursor: pointer;}
      &__text {padding-left: 3px; cursor: pointer;}
      &_hidden {visibility: hidden;}
    }
  }
</style>