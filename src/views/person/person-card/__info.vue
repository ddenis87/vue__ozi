<template>
  <div class="person-card-info">
    <div class="person-card-info__title">Информация о пользователе</div>
    <div class="person-card-info__box">
      <c-input class="person-card-info__input"
               :value="profileUser.VFA">Фамилия</c-input>
      <c-select class="person-card-info__select"
                :inListItem="listDistrict"
                :inValue="profileUser.VDISTRICTID">Территориальный орган</c-select>
      <button class="person-card-info__control"></button>
    </div>
    <div class="person-card-info__box">
      <c-input class="person-card-info__input" 
               :value="profileUser.VIM">Имя</c-input>
      <c-select class="person-card-info__select"
                :inListItem="listDepartment"
                :inValue="profileUser.VDEPARTMENTID">Структурное подразделение</c-select>
      <button class="person-card-info__control"></button>
    </div>
    <div class="person-card-info__box">
      <c-input class="person-card-info__input" 
               :value="profileUser.VOT">Отчество</c-input>
      <c-select class="person-card-info__select"
                :inListItem="listPost"
                :inValue="profileUser.VPOSTID">Должность</c-select>
      <button class="person-card-info__control"></button>
    </div>
    <div class="person-card-info__box">
      <c-button class="person-card-info__button-item">Изменить</c-button>
      <c-button class="person-card-info__button-item">Сохранить</c-button>
    </div>
    <hr/>
    <div class="person-card-info__title">История изменений</div>
    <div class="person-card-info__box" v-if="(listHistoryFio.length > 0)">
      <history-tab :list-item="listHistoryFio">ФИО</history-tab>
      <c-button>Очистить историю изменения ФИО</c-button>
    </div>
    <div class="person-card-info__box" v-if="(listHistoryDistrict.length > 0)">
      <history-tab :list-item="listHistoryDistrict">Территориальный орган</history-tab>
      <c-button>Очистить историю изменения территориального органа</c-button>
    </div>
    <div class="person-card-info__box" v-if="(listHistoryDepartment.length > 0)">
      <history-tab :list-item="listHistoryDepartment">Подразделение</history-tab>
      <c-button>Очистить историю изменения подразделения</c-button>
    </div>
    <div class="person-card-info__box" v-if="(listHistoryPost.length > 0)">
      <history-tab :list-item="listHistoryPost">Подразделение</history-tab>
      <c-button>Очистить историю изменения подразделения</c-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import cInput from '@/components/elements/c-input';
import cSelect from '@/components/elements/c-select';
import cButton from '@/components/elements/c-button';
import historyTab from '@/components/person/person-card/history-tab';

export default {
  name: 'personCardInfo',
  components: {
    cInput,
    cSelect,
    cButton,
    historyTab,
  },
  computed: {
    profileUser() { console.log(this.$store.getters.GET_PROFILE_USER); return this.$store.getters.GET_PROFILE_USER; },
    listDistrict() { return this.$store.getters.GET_LIST_DISTRICT_VISIBLE; },
    listDepartment() { return this.$store.getters.GET_LIST_DEPARTMENT_VISIBLE; },
    listPost() { return this.$store.getters.GET_LIST_POST_VISIBLE; },
    listHistoryFio() { return this.$store.getters.GET_HISTORY_USER_FIO; },
    listHistoryDistrict() { return this.$store.getters.GET_HISTORY_USER_DISTRICT; },
    listHistoryDepartment() { return this.$store.getters.GET_HISTORY_USER_DEPARTMENT; },
    listHistoryPost() { return this.$store.getters.GET_HISTORY_USER_POST; },
  },
  data: function() {
    return {
    }
  },
  created: function() {
    this.$store.dispatch('SET_HISTORY_USER', { valueUserId: this.$store.getters.GET_PROFILE_USER_ID, catalogName: 'FIO' });
    this.$store.dispatch('SET_HISTORY_USER', { valueUserId: this.$store.getters.GET_PROFILE_USER_ID, catalogName: 'DISTRICT' });
    this.$store.dispatch('SET_HISTORY_USER', { valueUserId: this.$store.getters.GET_PROFILE_USER_ID, catalogName: 'DEPARTMENT' });
    this.$store.dispatch('SET_HISTORY_USER', { valueUserId: this.$store.getters.GET_PROFILE_USER_ID, catalogName: 'POST' });
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
    max-width: 300px;
    width: 100%;
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