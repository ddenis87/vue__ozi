<template>
  <div class="dialog-delete">
    <h3 class="dialog-delete__title">Подтверждение удаления</h3>
    <div class="dialog-delete__body">
      <p class="body__text">Для подтверждения удаления документа, скопируйте его наименование в поле</p>
      <p class="body__text">Удаляемый документ: <b>{{ cDialogProps.CNAME }}</b></p>
      <c-input class="body__input" :inValidation="validation" @input="inputValidation" v-model="valueInput">Вставте в это поле наименование удаляемого документа</c-input>
    </div>
    <div class="dialog-delete__control">
      <c-button class="dialog-delete__control_item" @click="deleteItem(cDialogProps.VID)" :inDisabled="true">Применить</c-button>
      <c-button class="dialog-delete__control_item" @click="$emit('cancel-deleting')">Отменить</c-button>
    </div>
  </div>
</template>

<script>
import cInput from '@/components/elements/c-input';
import cButton from '@/components/elements/c-button';

export default {
  name: 'dialogDelete',
  components: {
    cInput,
    cButton,
  },
  props: {
    inDialogProps: Object,
  },
  computed: {
    cDialogProps() { console.log(this.inDialogProps); return this.inDialogProps; },
    cCountUseItem() {  },
  },
  data() {
    return {
      valueInput: '',
      validation: false,
    }
  },
  methods: {
    inputValidation() {
      this.validation = false;
      if (this.valueInput != this.cDialogProps.CNAME) this.validation = true;
    },
    deleteItem(inValueId) {
      this.$emit('accept-deleting', inValueId);
    },
  }
}
</script>

<style lang="scss" scoped>
$minWidth: 600px;
.dialog-delete {
  position: fixed;
  top: calc(50% - 150px);
  left: calc(50% - 300px) ;
  display: block;
  width: auto;
  height: auto;
  max-height: 300px;
  padding: 10px;
  min-width: $minWidth;
  border: 2px solid grey;
  border-radius: 3px;
  box-shadow: 1px 1px 1px black;
  background-color: white;

  font-size: 12px;
  font-family: 'Montserrat';
  &__title {
    color: black;
    margin-bottom: 10px;
  }
  &__body {
    margin-bottom: 10px;
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