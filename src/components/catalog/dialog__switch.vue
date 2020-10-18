<template>
  <div class="dialog-catalog">
    <h3 class="dialog-catalog__title">Подтверждение</h3>
    <div class="dialog-catalog__body">
      <p class="body__text">{{ cText[0] }} документ: <b class="body__text_title">{{ cDialogProps.CNAME }}</b></p>
      <p class="body__text body__text_warning">Документ будет {{ cText[1] }} для добавления</p>
    </div>
    <div class="dialog-catalog__control">
      <c-button class="dialog-catalog__control_item" @click="switchItem(cDialogProps.ID, inDialogProps.CVISIBLE)">{{ cText[0] }}</c-button>
      <c-button class="dialog-catalog__control_item" @click="$emit('cancel-switching')">Отменить</c-button>
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
@import 'zs-dialog.scss';

</style>