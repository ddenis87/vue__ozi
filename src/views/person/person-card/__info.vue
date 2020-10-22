<template>
  <div class="person-card-info">
    <div class="person-card-info__title">Информация о пользователе</div>
    <div class="person-card-info__box">
      <c-input class="person-card-info__input"
               :inValue="profileUser.VFA">Фамилия</c-input>
      <c-select class="person-card-info__select"
                :inListItem="listDistrict"
                :inValue="profileUser.VDISTRICTID">Территориальный орган</c-select>
      <button class="person-card-info__control"></button>
    </div>
    <div class="person-card-info__box">
      <c-input class="person-card-info__input" 
               :inValue="profileUser.VIM">Имя</c-input>
      <c-select class="person-card-info__select"
                :inListItem="listDepartment"
                :inValue="profileUser.VDEPARTMENTID">Структурное подразделение</c-select>
      <button class="person-card-info__control"></button>
    </div>
    <div class="person-card-info__box">
      <c-input class="person-card-info__input" 
               :inValue="profileUser.VOT">Отчество</c-input>
      <c-select class="person-card-info__select"
                :inListItem="listPost"
                :inValue="profileUser.VPOSTID">Должность</c-select>
      <button class="person-card-info__control"></button>
    </div>
    <div class="person-card-info__box">
      <c-button class="person-card-info__button-item">Изменить</c-button>
      <c-button class="person-card-info__button-item">Сохранить</c-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import cInput from '@/components/elements/c-input';
import cSelect from '@/components/elements/c-select';
import cButton from '@/components/elements/c-button';

export default {
  name: 'personCardInfo',
  components: {
    cInput,
    cSelect,
    cButton
  },
  computed: {
    profileUser() { return this.$store.getters.GET_PROFILE_USER; },
    listDistrict() { return this.$store.getters.GET_LIST_DISTRICT_VISIBLE; },
    listDepartment() { return this.$store.getters.GET_LIST_DEPARTMENT_VISIBLE; },
    listPost() { return this.$store.getters.GET_LIST_POST_VISIBLE; },
  },
  data: function() {
    return {
    }
  },
  created: function() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.person-card-info {
  width: 100%;
  margin-bottom: 10px;
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
  &__control {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    border: 0px;
    background-color: unset;
    background-image: url('~@/assets/images/control/button_adding.png');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  &__button-item {
    width: 150px;
  }
}
</style>