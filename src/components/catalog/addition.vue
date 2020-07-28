<template>
  <div class="addition">
    <div class="addition__text">Добавление записи</div>
    <input class="addition__input" type="text" placeholder="Введите наименование..." v-model="inputText" :class="{'addition__input_validate' : (isValidate) ? true : false}" @input="() => {isValidate = false}"/>
    <div class="addition__block">
      <div class="confirm" :class="{'confirm_hidden': (isConfirm) ? false : true}">
        <input class="confirm__input" type="checkbox" id="confirm" v-model="inputConfirm"/>
        <label class="confirm__text" for="confirm">Требует верификации</label>
      </div>
      <button class="addition__button" @click="addItem">Добавить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Addition',
  props: {
    isConfirm: {type: Boolean, default: true}
  },
  data: function() {
    return {
      inputText: '',
      inputConfirm: false,
      isValidate: false,
    }
  },
  methods: {
    addItem: function() {
      if (!this.inputText) {
        this.isValidate = true; 
        return;
      } else {
        this.$emit('addItem', this.inputText, this.inputConfirm);
        this.inputText = '';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .addition {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0px;
    &__text {
      color: teal;
    }
    &__input {
      margin: 5px 0px;
      padding: 5px;
      border: 1px solid grey;
      border-radius: 3px;
      outline: none;
    }
    &__input:focus { box-shadow: 1px 1px 1px lightblue, -1px -1px 1px lightblue; }
    &__input_validate { box-shadow: 1px 1px 5px red, -1px -1px 5px red; }
    &__button {
      align-self: flex-end;
      width: 150px;
      margin: 5px 0px;
      padding: 5px 0px;
      outline: none;
      cursor: pointer;
    }
    &__block {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .confirm {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3px;
      &__input {cursor: pointer;}
      &__text {padding-left: 3px; cursor: pointer;}
      &_hidden {visibility: hidden;}
    }
  }
</style>