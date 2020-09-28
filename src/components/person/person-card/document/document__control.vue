<template>
  <div class="document-control">
    <div class="document-control__title">Добавление документа</div>
    <div class="document-control__box">
      <c-select class="document-control__select"
                :inListItem="listItem">Документ</c-select>
      <c-input class="document-control__input">Примечание</c-input>
      <div class="document-control__button">
        <c-button class="document-control__button-item">Добавить</c-button>
      </div>
    </div>
  </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cSelect from '@/components/elements/c-select';
import cButton from '@/components/elements/c-button';

export default {
  name: 'documentControl',
  components: {
    cInput,
    cSelect,
    cButton,
  },
  props: [
    'inListItem',
  ],
  computed: {
    listItem: function() { return this.inListItem; }
  }
}
</script>

<style lang="scss" scoped>
.document-control {
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
    margin-bottom: 10px;
  }
  &__select {
    width: 100%;
    margin-bottom: 10px;
  }
  &__button {
    display: flex;
    justify-content: flex-end;
    &-item {
      width: 150px;
    }
  }
}
</style>