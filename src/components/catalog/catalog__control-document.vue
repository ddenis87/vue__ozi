<template>
  <div class="catalog-control">
    <div class="catalog-control__title">Добавление записи</div>
    <c-input ref="documentName" class="catalog-control__input"
             :inValidation="validation"
             v-model="valueName"
             @keydown="() => { validation = false; }"><slot name="titleInput"></slot></c-input>
    <div class="catalog-control__box">
      <c-checkbox ref="verifyValue" class="catalog-control__checkbox"
                  v-model="valueVerify">Требует верификации</c-checkbox>
      <c-button class="catalog-control__button-item"
                @click="addingItem">Добавить</c-button>
    </div>
  </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cCheckbox from '@/components/elements/c-checkbox';
import cButton from '@/components/elements/c-button';

export default {
  name: 'catalogControlDocument',
  components: {
    cInput,
    cCheckbox,
    cButton,
  },
  data() {
    return {
      valueName: '',
      valueVerify: false,
      validation: false,
    }
  },
  methods: {
    addingItem() {
      this.validation = false;
      if (this.valueName == '') {
        this.validation = true;
        return;
      }
      this.$emit('adding-item', this.valueName, this.valueVerify);
      this.$refs.documentName.resetComponent();
      this.$refs.verifyValue.resetComponent();
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'zs-catalog__control.scss';

.catalog-control {
  &__box {
    justify-content: space-between;
  }
}
</style>