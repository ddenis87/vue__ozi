<template>
  <div class="person-control">
    <div class="person-control__box">
      <c-input class="person-control__input"
               :value="profileUser.VFA"
               :disabled="isLock"
               @input="(value) => { changeProfile.valueFa = value }">Фамилия</c-input>
      <c-select class="person-control__select"
                :disabled="isLock"
                :inListItem="listDistrict"
                :inValue="profileUser.VDISTRICTID"
                @change="(value) => { changeProfile.valueDistrictId = value }">Территориальный орган</c-select>
      <button class="person-control__control" :disabled="isLock"></button>
    </div>
    <div class="person-control__box">
      <c-input class="person-control__input" 
               :value="profileUser.VIM"
               :disabled="isLock"
               @input="(value) => { changeProfile.valueIm=value }">Имя</c-input>
      <c-select class="person-control__select"
                :disabled="isLock"
                :inListItem="listDepartment"
                :inValue="profileUser.VDEPARTMENTID"
                @change="(value) => { changeProfile.valueDepartmentId = value }">Структурное подразделение</c-select>
      <button class="person-control__control" :disabled="isLock"></button>
    </div>
    <div class="person-control__box">
      <c-input class="person-control__input" 
               :value="profileUser.VOT"
               :disabled="isLock"
               @input="(value) => { changeProfile.valueOt=value }">Отчество</c-input>
      <c-select class="person-control__select"
                :disabled="isLock"
                :inListItem="listPost"
                :inValue="profileUser.VPOSTID"
                @change="(value) => { changeProfile.valuePostId = value }">Должность</c-select>
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
      changeProfile: {
        valueUserId: this.$store.getters.GET_PROFILE_USER_ID,
        valueFa: '',
        valueIm: '',
        valueOt: '',
        valueDistrictId: '',
        valueDepartmentId: '',
        valuePostId: ''
      },
    }
  },
  methods: {
    changeUser() {
      this.isLock = !this.isLock;
      this.buttonControlTitle = (this.buttonControlTitle == 'редактировать') ? 'сохранить' : 'редактировать';
      if (this.changeProfile.valueFa ?? this.changeProfile.valueIm ?? this.changeProfile.valueOt ) console.log('change FIO');
      if (this.changeProfile.valueDistrictId) console.log('change District');
      if (this.changeProfile.valueDepartmentId) console.log('change Department');
      if (this.changeProfile.valuePostId) console.log('change Post');

      this.clearChangeProfile()
    },
    clearChangeProfile() {
      this.changeProfile = {
        valueUserId: this.$store.getters.GET_PROFILE_USER_ID,
        valueFa: undefined,
        valueIm: undefined,
        valueOt: undefined,
        valueDistrictId: undefined,
        valueDepartmentId: undefined,
        valuePostId: undefined
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