<template>
  <div class="catalog-control">
    <div class="catalog-control__title">Добавление записи</div>
    <div class="catalog-control__box">
      <c-input class="catalog-control__input"><slot>Фамилия Имя Отчество</slot></c-input>
      <c-input class="catalog-control__input"><slot>Фамилия И. О.</slot></c-input>
      <c-input class="catalog-control__input"><slot>IP - пользователя</slot></c-input>
    </div>

    <div class="catalog-control__box">
      <c-checkbox-double class="catalog-control__checkbox">
        <template v-slot:accessOff>УПФР</template>
        <template v-slot:accessOn>ОПФР</template>
      </c-checkbox-double>
      <c-button class="catalog-control__button-item">Добавить</c-button>
    </div>
  </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cCheckboxDouble from '@/components/elements/c-checkbox-double';
import cButton from '@/components/elements/c-button';

export default {
  name: 'catalogControlSecurityAdmin',
  components: {
    cInput,
    cCheckboxDouble,
    cButton,
  },
}
</script>

<style lang="scss" scoped>
@import 'catalog__control.scss';

.catalog__control {
  &__input {
    // width: 100%; // ??????
    &:nth-child(2) { width: 400px; margin-left: 20px; }
    &:nth-child(3) { width: 300px; margin-left: 20px; }
  }
  &__box {
    justify-content: space-between;
  }
}
</style>