<template>
  <div class="list-control-basis">
    <span class="list-control-basis__text">{{ getFormatedDocumentBase(basisProps.basisText, basisProps.basisDate) }}</span>
    <button class="list-control-basis__button" title="Выбрать" @click="$emit('open-dialog-basis')">...</button>
  </div>
</template>

<script>

export default {
  name: 'ListControlBasis',
  props: {
    basisProps: Object,
  },
  methods: {
    getFormatedDocumentBase(basisText, basisDate) {
      if (basisText == null) return '---';
      return `Заявка № ${basisText} от ${basisDate}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.list-control-basis {
  display: flex;
  justify-content: space-between;
  &__button {
    width: 20px;
    height: 20px;
    padding: 0px;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid black;
    background-color: transparent;
  }
}
</style>