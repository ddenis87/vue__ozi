<template>
  <div class="report-control">
    <div class="report-control__title">Добавить задачу</div>
    <c-input class="report-control__input"><slot name="titleInput"></slot></c-input>
    <div class="report-control__box">
      <c-select class="report-control__select-item"
                :listItem="listItem"><slot name="titleSelect"></slot></c-select>
      <c-button class="report-control__button-item">Добавить</c-button>
    </div>
  </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cSelect from '@/components/elements/c-select';
import cButton from '@/components/elements/c-button';

export default {
  name: 'reportControlWeek',
  components: {
    cInput,
    cSelect,
    cButton,
  },
  data: function() {
    return {
      listItem: [
        {ID: '1', CNAME: 'Без статуса'},
        {ID: '2', CNAME: 'В работе'},
        {ID: '3', CNAME: 'Завершена'},
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.report-control {
  width: 100%;
  margin-bottom: 10px;
  padding: 0px 20px;
  box-sizing: border-box;
  &__title {
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }
  &__input {
    margin-bottom: 10px;
  }
  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__select-item {
    width: 150px;
  }
  &__button-item {
    width: 150px;
  }
}
</style>