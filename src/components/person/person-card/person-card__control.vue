<template>
  <div class="person-card-control">
    <div class="person-card-control__title">Информация о пользователе</div>
    <div class="person-card-control__box">
      <c-input class="person-card-control__input">Фамилия</c-input>
      <c-select class="person-card-control__select">Территориальный орган</c-select>
    </div>
    <div class="person-card-control__box">
      <c-input class="person-card-control__input">Имя</c-input>
      <c-select class="person-card-control__select">Структурное подразделение</c-select>
    </div>
    <div class="person-card-control__box">
      <c-input class="person-card-control__input">Отчество</c-input>
      <c-select class="person-card-control__select">Должность</c-select>
    </div>
    <div class="person-card-control__box">
      <c-button class="person-card-control__button-item">Изменить</c-button>
      <c-button class="person-card-control__button-item">Сохранить</c-button>
    </div>
  </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cSelect from '@/components/elements/c-select';
import cButton from '@/components/elements/c-button';

export default {
  name: 'personCardControl',
  components: {
    cInput,
    cSelect,
    cButton
  }
}
</script>

<style lang="scss" scoped>
.person-card-control {
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
    width: 300px;
  }
  &__select {
    width: 100%;
    margin-left: 20px;
  }
  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  &__button-item {
    width: 150px;
    // margin-left: 10px;
  }
}
</style>