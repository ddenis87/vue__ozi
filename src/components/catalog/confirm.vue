<template>
  <div class="">
    <div class="background">
        qwe
    </div>
    <div class="dialog">
      <div class="dialog__title">Предупреждение!</div>
      <p class="dialog__text"><slot name="action"></slot></p>
      <p class="dialog__text dialog__text_list"><slot name="list"></slot></p>
      <p class="dialog__text"><slot name="effect"></slot></p>
      <p class="dialog__text">подтвердите действие:</p>
      <div class="dialog__control">
        <button class="dialog__button" @click="$emit('confirmOk')">Подтвердить</button>
        <button class="dialog__button" @click="$emit('confirmCancel')">Отменить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  props: {

  }  
}
</script>

<style lang="scss" scoped>
  .background {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
  }
  .dialog {
    $dialogWidth: 400px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    top: 20%;
    left: 50%;
    width: $dialogWidth;
    height: auto;
    margin-left: -1 * ($dialogWidth / 2);
    padding: 10px;
    background-color: white;
    border: 3px solid teal;
    border-radius: 3px;

    &__title {
      color: red;
      margin-bottom: 3px;
    }
    &__text {
      align-self: flex-start;
      margin: 2px;
      &_list {
        font-size: 0.9em;
        color: red;
        text-indent: 20px;
        margin: 2px;
      }
    }
    &__control {
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      width: 100%;
    }
    &__button {
      width: 120px;
      padding: 3px;
      border: 1px solid teal;
      border-radius: 2px;
      cursor: pointer;
    }
    &__button:hover {
      background-color:rgb(31, 150, 180);
      color: white;
    }
  }
</style>