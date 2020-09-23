<template>
  <div class="c-button">
    <button class="c-button__button"><slot></slot></button>
  </div>  
</template>

<script>
export default {
  name: 'cButton',
}
</script>

<style lang="scss" scoped>
.c-button {
  &__button {
    width: 100%;
    padding: 5px;
    border: 1px solid darkblue;
    background-color: rgb(54, 96, 146);

    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background-color: rgb(54, 96, 146, .8);
    }
  }
}
</style>