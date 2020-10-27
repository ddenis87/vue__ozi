<template>
  <div class="catalog-control">
    <div class="catalog-control__title">Добавление записи</div>
    <div class="catalog-control__box">
      <c-input ref="valuseFioFull" class="catalog-control__input"
               v-model="valueFioFull"><slot>Фамилия Имя Отчество</slot></c-input>
      <c-input ref="valueFioShort" class="catalog-control__input" 
               v-model="valueFioShort"><slot>Фамилия И. О.</slot></c-input>
      <c-input ref="valueIp" class="catalog-control__input" 
               v-model="valueIp"><slot>IP - пользователя</slot></c-input>
    </div>

    <div class="catalog-control__box">
      <c-checkbox-double class="catalog-control__checkbox"
                         v-model="valueAccessLevel">
        <template v-slot:accessOff>УПФР</template>
        <template v-slot:accessOn>ОПФР</template>
      </c-checkbox-double>
      <c-button class="catalog-control__button-item" 
                @click="addingItem">Добавить</c-button>
    </div>
  </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cCheckboxDouble from '@/components/elements/c-checkbox-double';
import cButton from '@/components/elements/c-button';

export default {
  name: 'catalogControlSecurityAdmin',
  components: {
    cInput,
    cCheckboxDouble,
    cButton,
  },
  data() {
    return {
      valueFioFull: '',
      valueFioShort: '',
      valueIp: '',
      valueAccessLevel: false,
    }
  },
  methods: {
    addingItem() {
      this.validation = false;
      if (this.valueName == '') {
        this.validation = true;
        return;
      }
      this.$emit('adding-item', this.valueFioFull, this.valueFioShort, this.valueIp, this.valueAccessLevel);
      this.$refs.valueFioFull.resetComponent()
      this.$refs.valueFioShort.resetComponent()
      this.$refs.valueIp.resetComponent()
    },
  }

}
</script>

<style lang="scss" scoped>
@import 'zs-catalog__control.scss';

.catalog-control {
  &__input {
    width: 100%;
    &:nth-child(2) { width: 300px; margin-left: 20px; }
    &:nth-child(3) { width: 300px; margin-left: 20px; }
  }
  &__box {
    justify-content: space-between;
  }
}
</style>