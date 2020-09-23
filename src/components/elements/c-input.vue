<template>
  <div class="c-input">
    <label class="c-input__title"><slot></slot></label>
    <input class="c-input__input" 
           type="text" />
  </div>
</template>

<script>
export default {
  name: 'cInput',  
}
</script>

<style lang="scss" scoped>
.c-input {
  position: relative;
  &__title {
    position: absolute;
    left: 5px;
    top: 5px;
    font-size: 8px;
    text-transform: uppercase;
  }
  &__input {
    left: 0px;
    top: 0px;
    width: 100%;
    padding: 3px;
    padding-left: 5px;
    padding-top: 16px;
    font-size: 14px;
    border: 1px solid grey;
    border-radius: 3px;
    box-sizing: border-box;
  }
}
</style>