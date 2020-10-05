<template>
  <div class="person-card-info">
    <div class="person-card-info__title">Информация о пользователе</div>
    <div class="person-card-info__box">
      <c-input class="person-card-info__input"
               :inValue="personProfile.personFa">Фамилия</c-input>
      <c-select class="person-card-info__select"
                :inListItem="listDistrict"
                :inValue="personProfile.personDistrictId">Территориальный орган</c-select>
    </div>
    <div class="person-card-info__box">
      <c-input class="person-card-info__input" 
               :inValue="personProfile.personIm">Имя</c-input>
      <c-select class="person-card-info__select"
                :inListItem="listDepartment"
                :inValue="personProfile.personDepartmentId">Структурное подразделение</c-select>
    </div>
    <div class="person-card-info__box">
      <c-input class="person-card-info__input" 
               :inValue="personProfile.personOt">Отчество</c-input>
      <c-select class="person-card-info__select"
                :inListItem="listPost"
                :inValue="personProfile.personPostId">Должность</c-select>
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
  name: 'personCardControl',
  components: {
    cInput,
    cSelect,
    cButton
  },
  computed: {
    personProfile() { return this.$store.state.personProfile; }
  },
  data: function() {
    return {
      listDistrict: [],
      listDepartment: [],
      listPost: [],
    }
  },
  created: function() {
    this.getListDistrict();
    this.getListDepartment();
    this.getListPost();
  },
  methods: {
    getListDistrict: function() {
      axios
        .post(pathBackend + 'person-card__info.php', null, {params: {function: 'getListDistrict'}})
        .then(response => {
          this.listDistrict = response.data;
        })
    },
    getListDepartment: function() {
      axios
        .post(pathBackend + 'person-card__info.php', null, {params: {function: 'getListDepartment'}})
        .then(response => {
          this.listDepartment = response.data;
        })
    },
    getListPost: function() {
       axios
        .post(pathBackend + 'person-card__info.php', null, {params: {function: 'getListPost'}})
        .then(response => {
          this.listPost = response.data;
        })
    }
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