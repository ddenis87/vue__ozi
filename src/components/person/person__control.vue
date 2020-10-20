<template>
  <div class="person-control">
    <div class="person-control__title">Поиск пользователей</div>
    <div class="person-control__box">
      <c-input class="person-control__input"
               v-model="personFa"
               :in-validation="isEmpty"
               @input="() => { isEmpty = false; }"
               @keydown="pressEnter">Укажите фамилию для поиска</c-input>
      <c-button class="person-control__button-item"
                @click="personFind">Найти</c-button>
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
  data() {
    return {
      personFa: '',
      isEmpty: false,
    }
  },
  methods: {
    pressEnter(key) { if (key == 'Enter') this.personFind(); },
    personFind() {
      if (this.personFa == '') {
        this.isEmpty = true; 
        return;
      }
      this.$emit('person-find', this.personFa);
    },
    personCreate() { this.$emit('person-create'); }
  }
}
</script>

<style lang="scss" scoped>
.person-control {
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
}
</style>