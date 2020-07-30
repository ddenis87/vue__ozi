<template>
  <div class="search">
    <div class="search__text">Поиск пользователей</div>
    <input class="search__input" 
           type="text" 
           placeholder="Укажите фамилию полностью или ее часть" 
           :class="{'addition__input_validate' : (isValidate)}"/>
    <button class="search__button">Найти</button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: function() {
    return {
      isValidate: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  .search {
    width: 50%;
    display: flex;
    flex-direction: column;
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
  }
</style>