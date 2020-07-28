<template>
  <div class="">
    <div class="background">
        qwe
    </div>
    <div class="dialog">
      <div class="dialog__title">Предупреждение</div>
      <p class="dialog__text"><slot name="action"></slot></p>
      <p class="dialog__text"><slot name="list"></slot></p>
      <p class="dialog__text"><slot name="effect"></slot></p>
      <p class="dialog__text">Требуется подтверждение действий:</p>
      <div class="dialog__control">
        <button class="" @click="$emit('confirmOk')">Подтвердить</button>
        <button class="" @click="$emit('confirmCancel')">Отменить</button>
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
    border: 2px solid grey;
    border-radius: 3px;

    &__title {
      color: red;
    }
    &__text {
      align-self: flex-start;
      margin: 5px;
      text-indent: 20px;
    }
    &__control {
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      width: 100%;
    }
  }
</style>