<template>
  <div class="person-control">
    <div class="person-control__title">Поиск пользователей</div>
    <div class="person-control__box">
      <c-input class="person-control__input"
               v-model="personFa"
               :inValidation="isEmpty"
               @input="() => { isEmpty = false; }">Укажите фамилию для поиска</c-input>
      <c-button class="person-control__button-item"
                @click="personSearch">Найти</c-button>
      <c-button class="person-control__button-item"
                @click="personCreate">Создать</c-button>
    </div>
    
  </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cButton from '@/components/elements/c-button';

export default {
  name: 'personControl',
  components: {
    cInput,
    cButton,
  },
  data: function() {
    return {
      personFa: '',
      isEmpty: false,
    }
  },
  methods: {
    personSearch: function() {
      if (this.personFa == '') {
        this.isEmpty = true; 
        return;
      }
      this.$emit('click', this.personFa);
    },
    personCreate: function() {
      this.$router.push('/person-card');
    }
  }
}
</script>

<style lang="scss" scoped>
.person-control {
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
    width: 100%;
  }
  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__button-item {
    width: 150px;
    margin-left: 10px;
  }


  // .confirm {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   padding: 3px;
  //   &__input {cursor: pointer;}
  //   &__text {padding-left: 3px; cursor: pointer;}
  //   &_hidden {visibility: hidden;}
  // }
}
</style>