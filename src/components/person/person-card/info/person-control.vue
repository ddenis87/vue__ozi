<template>
  <div class="person-control">
    <div class="person-control__box">
      <c-input class="person-control__input"
               :value="profileUser.VFA"
               :disabled="isLock"
               @input="(value) => { newProfile.valueFa = value }">Фамилия</c-input>
      <c-select class="person-control__select"
                :disabled="isLock"
                :inListItem="listDistrict"
                :inValue="profileUser.VDISTRICTID"
                @change="(value) => { newProfile.valueDistrictId = value }">Территориальный орган</c-select>
      <button class="person-control__control" :disabled="isLock"></button>
    </div>
    <div class="person-control__box">
      <c-input class="person-control__input" 
               :value="profileUser.VIM"
               :disabled="isLock"
               @input="(value) => { newProfile.valueIm=value }">Имя</c-input>
      <c-select class="person-control__select"
                :disabled="isLock"
                :inListItem="listDepartment"
                :inValue="profileUser.VDEPARTMENTID"
                @change="(value) => { newProfile.valueDepartmentId = value }">Структурное подразделение</c-select>
      <button class="person-control__control" :disabled="isLock"></button>
    </div>
    <div class="person-control__box">
      <c-input class="person-control__input" 
               :value="profileUser.VOT"
               :disabled="isLock"
               @input="(value) => { newProfile.valueOt=value }">Отчество</c-input>
      <c-select class="person-control__select"
                :disabled="isLock"
                :inListItem="listPost"
                :inValue="profileUser.VPOSTID"
                @change="(value) => { newProfile.valuePostId = value }">Должность</c-select>
      <button class="person-control__control" :disabled="isLock"></button>
    </div>
    <div class="person-control__box">
      <div></div>
      <c-button class="person-control__button-item"
                @click="changeUser">{{ buttonControlTitle }}</c-button>
    </div>
  </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cSelect from '@/components/elements/c-select';
import cButton from '@/components/elements/c-button';

export default {
  name: 'personControl',
  components: {
    cInput,
    cSelect,
    cButton,
  },
  props: {
    profileUser: Object,
  },
  computed: {
    listDistrict() { return this.$store.getters.GET_LIST_DISTRICT_VISIBLE; },
    listDepartment() { return this.$store.getters.GET_LIST_DEPARTMENT_VISIBLE; },
    listPost() { return this.$store.getters.GET_LIST_POST_VISIBLE; },
  },
  data() {
    return {
      isLock: true,
      buttonControlTitle: 'редактировать',
      newProfile: {
        valueUserId: this.$store.getters.GET_PROFILE_USER_ID,
        valueFa: null,
        valueIm: null,
        valueOt: null,
        valueDistrictId: null,
        valueDepartmentId: null,
        valuePostId: null
      },
    }
  },
  methods: {
    changeUser() {
      this.isLock = !this.isLock;
      this.buttonControlTitle = (this.buttonControlTitle == 'редактировать') ? 'сохранить' : 'редактировать';
      if (this.newProfile.valueFa ?? this.newProfile.valueIm ?? this.newProfile.valueOt ) this.changeUserFio();
      if (this.newProfile.valueDistrictId) this.changeUserDistrict(this.newProfile.valueDistrictId);
      if (this.newProfile.valueDepartmentId) this.changeUserDepartment(this.newProfile.valueDepartmentId);
      if (this.newProfile.valuePostId) this.changeUserPost(this.newProfile.valuePostId);

      this.clearNewProfile();
    },
    changeUserFio() {
      let sendOption = {
        catalogName: 'FIO',
        valueUserId: this.newProfile.valueUserId,
        valueFa: (this.newProfile.valueFa) ? this.newProfile.valueFa : this.profileUser.VFA,
        valueIm: (this.newProfile.valueIm) ? this.newProfile.valueIm : this.profileUser.VIM,
        valueOt: (this.newProfile.valueOt) ? this.newProfile.valueOt : this.profileUser.VOT,
      };
      this.$store.dispatch('CHANGE_PROFILE_USER', sendOption);
    },
    changeUserDistrict(value) {
      let sendOption = {
        catalogName: 'DISTRICT',
        valueUserId: this.newProfile.valueUserId,
        valueDistrictId: value,
      }
      this.$store.dispatch('CHANGE_PROFILE_USER', sendOption);
    },
    changeUserDepartment(value) {
      let sendOption = {
        catalogName: 'DEPARTMENT',
        valueUserId: this.newProfile.valueUserId,
        valueDepartmentId: value,
      }
      this.$store.dispatch('CHANGE_PROFILE_USER', sendOption);
    },
    changeUserPost(value) {
      let sendOption = {
        catalogName: 'POST',
        valueUserId: this.newProfile.valueUserId,
        valuePostId: value,
      }
      this.$store.dispatch('CHANGE_PROFILE_USER', sendOption);
    },
    clearNewProfile() {
      this.newProfile = {
        valueUserId: this.$store.getters.GET_PROFILE_USER_ID,
        valueFa: null,
        valueIm: null,
        valueOt: null,
        valueDistrictId: null,
        valueDepartmentId: null,
        valuePostId: null
      };
    },
  },
}
</script>

<style lang="scss" scoped>
.person-control {
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .history-clear_control {
      align-self: flex-end;
    }
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
    outline: none;
    cursor: pointer;
    &:disabled { background-image: url('~@/assets/images/control/button_adding_disable.png'); }
  }
  &__button-item {
    width: 150px;
  }
}
</style>