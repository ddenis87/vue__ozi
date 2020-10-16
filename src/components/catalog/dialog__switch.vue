<template>
  <div class="dialog-switch">
    <h3 class="dialog-switch__title">Подтверждение</h3>
    <div class="dialog-switch__body">
      <p class="body__text">{{ cText[0] }} документ: <b class="body__text_title">{{ cDialogProps.CNAME }}</b></p>
      <p class="body__text body__text_warning">Документ будет {{ cText[1] }} для добавления</p>
    </div>
    <div class="dialog-switch__control">
      <c-button class="dialog-switch__control_item" @click="switchItem(cDialogProps.ID, inDialogProps.CVISIBLE)">{{ cText[0] }}</c-button>
      <c-button class="dialog-switch__control_item" @click="$emit('cancel-switching')">Отменить</c-button>
    </div>
  </div>
</template>

<script>
import cButton from '@/components/elements/c-button';

export default {
  name: 'dialogSwitch',
  components: {
    cButton,
  },
  props: {
    inDialogProps: Object,
  },
  computed: {
    cDialogProps() { return this.inDialogProps; },
    cText() {
      switch (this.inDialogProps.CVISIBLE) {
        case '1':
          return ['Отключить','недоступен']; break;
        case '0':
          return ['Активировать','доступен']; break;
      }
    }
  },
  methods: {
    switchItem(inValueId, inValueVisible) {
      this.$emit('accept-switching', inValueId, (inValueVisible == '1') ? '0' : '1')
    },
  }
}
</script>

<style lang="scss" scoped>
$minWidth: 600px;
.dialog-switch {
  position: fixed;
  top: calc(50% - 150px);
  left: calc(50% - 300px) ;
  display: block;
  width: auto;
  height: auto;
  max-height: 300px;
  padding: 10px;
  min-width: $minWidth;
  max-width: 700px;
  border: 2px solid grey;
  border-radius: 3px;
  box-shadow: 1px 1px 1px black;
  background-color: white;

  font-size: 13px;
  font-family: 'Montserrat';
  &__title {
    color: darkslategrey;
    margin-bottom: 10px;
  }
  &__body {
    margin-bottom: 10px;
    .body__text {
      margin: 6px 0px;
      &_title { color: darkgreen; }
      &_warning {
        margin: 20px 0px;
        color: red;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
  &__control {
    display: flex;
    justify-content: space-between;
    &_item {
      min-width: 100px;
    }
  }
}
</style>