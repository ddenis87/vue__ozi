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
}
</script>

<style lang="scss" scoped>
@import 'g-catalog__control.scss';

.catalog-control {
  &__box {
    justify-content: flex-end;
  }
}
</style>