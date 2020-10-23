<template>
  <div class="person-card-info">
    <div class="person-card-info__title">Информация о пользователе</div>
      <person-control :profile-user="profileUser"></person-control>
    <hr/>
    <div class="person-card-info__title">История изменений</div>
    <div class="person-card-info__box" v-if="(listHistoryFio.length > 0)">
      <history-tab :list-item="listHistoryFio">ФИО</history-tab>
      <c-button class="history-clear_control">Очистить историю изменения ФИО</c-button>
    </div>
    <div class="person-card-info__box" v-if="(listHistoryDistrict.length > 0)">
      <history-tab :list-item="listHistoryDistrict">Территориальный орган</history-tab>
      <c-button class="history-clear_control">Очистить историю изменения территориального органа</c-button>
    </div>
    <div class="person-card-info__box" v-if="(listHistoryDepartment.length > 0)">
      <history-tab :list-item="listHistoryDepartment">Подразделение</history-tab>
      <c-button class="history-clear_control">Очистить историю изменения подразделения</c-button>
    </div>
    <div class="person-card-info__box" v-if="(listHistoryPost.length > 0)">
      <history-tab :list-item="listHistoryPost">Должности</history-tab>
      <c-button class="history-clear_control">Очистить историю изменения должности</c-button>
    </div>
  </div>
</template>

<script>
import cButton from '@/components/elements/c-button';
import personControl from '@/components/person/person-card/info/person-control';
import historyTab from '@/components/person/person-card/info/history-tab';

export default {
  name: 'personCardInfo',
  components: {
    cButton,
    personControl,
    historyTab,
  },
  computed: {
    profileUser() { return this.$store.getters.GET_PROFILE_USER; },
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
  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .history-clear_control {
      align-self: flex-end;
    }
  }
}
</style>