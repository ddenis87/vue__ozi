<template>
  <div class="catalog-control">
    <div class="catalog-control__title">Добавление записи</div>
    <c-input class="catalog-control__input"><slot name="titleInput"></slot></c-input>
    
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
  name: 'catalogControlDocument',
  components: {
    cInput,
    cCheckbox,
    cButton,
  },
}
</script>

<style lang="scss" scoped>
@import 'catalog__control.scss';

.catalog-control {
  &__box {
    justify-content: space-between;
  }
}
</style>