<template>
  <div class="dialog-catalog">
    <h3 class="dialog-catalog__title">Изменение документа</h3>
    <div class="dialog-catalog__body">
      <c-input class="body__input" :inValue="cDialogProps.CNAME" v-model="valueName">Наименование документа</c-input>
      <c-checkbox class="body__checkbox" 
                  v-if="cVerify" 
                  :inInputChecked="cDialogProps.CCONFIRM" 
                  v-model="valueVerify">Верификация</c-checkbox>
      <p class="body__text body__text_warning">Наименование документа измениться везде где он назначен</p>
    </div>
    <div class="dialog-catalog__control">
      <div class="dialog-catalog__control_item">
        <c-button class="dialog-catalog__control_item"
                  @click="changeItem(cDialogProps.ID)">Применить</c-button>
      </div>
      <c-button class="dialog-catalog__control_item" @click="$emit('cancel-changes')">Отменить</c-button>
    </div>
  </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cCheckbox from '@/components/elements/c-checkbox';
import cButton from '@/components/elements/c-button';

export default {
  name: 'dialogChange',
  components: {
    cInput,
    cCheckbox,
    cButton,
  },
  props: {
    dialogProps: Object,
  },
  computed: {
    cDialogProps() { return this.dialogProps; },
    cVerify() { return (this.dialogProps?.CCONFIRM) ? true : false; }
  },
  created() {
    this.valueName = this.cDialogProps.CNAME;
  },
  data() {
    return {
      valueName: '',
      valueVerify: false,
    }
  },
  methods: {
    changeItem(inValueId) {
      this.$emit('accept-change', inValueId, this.valueName, this.valueVerify);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'zs-dialog.scss';

.dialog-catalog {
  &__body {
    .body__input, .body__chackbox, .body__text {
      margin-bottom: 10px;
    }
  }
}
</style>