<template>
  <div class="addition">
    <div class="addition__text">Добавление записи</div>
    <input class="addition__input" type="text" placeholder="Введите наименование..." v-model="valueInput" />
    <div class="verification">
      <input class="verification__input" type="checkbox" id="verification"/>
      <label class="verification__text" for="verification">Требует верификации</label>
    </div>
    <button class="addition__button">Добавить</button>
  </div>
</template>

<script>
export default {
  name: 'Addition'
}
</script>

<style lang="scss" scoped>
  .addition {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0px;
    border-top: 1px solid grey;
    &__text {
      padding: 5px 0px;
    }
    &__input {
      margin: 5px 0px;
      padding: 5px;
      border: 1px solid grey;
      border-radius: 3px;
      outline: none;
    }
    &__input:focus { box-shadow: 1px 1px 1px lightblue, -1px -1px 1px lightblue; }
    &__button {
      align-self: flex-end;
      width: 150px;
      margin: 5px 0px;
      padding: 5px 0px;
      outline: none;
    }
    .verification {
      align-self: flex-start;
      display: flex;
      align-items: center;
      padding: 3px;
      &__input {cursor: pointer;}
      &__text {padding-left: 3px; cursor: pointer;}
    }
  }
</style>