<template>
  <div class="catalog-control">
    <div class="catalog-control__title">Добавление записи</div>
    <c-input class="catalog-control__input"><slot name="titleInput"></slot></c-input>
    
    <div class="catalog-control__box">
      <c-button class="catalog-control__button-item">Добавить</c-button>
    </div>
    </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cButton from '@/components/elements/c-button';

export default {
  name: 'catalogControl',
  components: {
    cInput,
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
    justify-content: flex-end;
    align-items: center;
  }
  &__button-item {
    width: 150px;
  }
  

  // .confirm {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   padding: 3px;
  //   &__input {cursor: pointer;}
  //   &__text {padding-left: 3px; cursor: pointer;}
  //   &_hidden {visibility: hidden;}
  // }
}
</style>