<template>
  <div class="dialog-catalog">
    <h3 class="dialog-catalog__title">Подтверждение удаления</h3>
    <div class="dialog-catalog__body">
      <p class="body__text">Удаляемый документ: <b class="body__text_title">{{ cDialogProps.CNAME }}.</b></p>
      <p class="body__text">Документ имеет следующие связи:</p>
      <table class="body__table">
        <tr class="table-row table-row_active">
          <td class="table-column">Активных связей:</td>
          <td class="table-column">{{ cCountUsedItem.itemActive }}</td>
        </tr>
        <tr class="table-row table-row_inactive">
          <td class="table-column">Неактивных связей:</td>
          <td class="table-column">{{ cCountUsedItem.itemInactive }}</td>
        </tr>
      </table>
      <template v-if="cCountUsedItem.itemActive > 0">
        <p class="body__text body__text_warning">Удаление невозможно при наличии активных связей</p>
      </template>
      <template v-else>
        <p class="body__text body__text_warning" v-if="cCountUsedItem.itemInactive >= 0">При удалении документа, будут каскадно удалены неактивные связанные данные</p>
        <c-input class="body__input" :inValidation="validation" @input="inputValidation" v-model="valueInput">Вставте в это поле наименование удаляемого документа</c-input>
      </template>
    </div>
    <div class="dialog-catalog__control">
      <div class="dialog-catalog__control_item">
        <c-button class="dialog-catalog__control_item" 
                  v-if="cCountUsedItem.itemActive == 0 && valueInput != ''" 
                  @click="deleteItem(cDialogProps.ID)">Применить</c-button></div>
      <c-button class="dialog-catalog__control_item" @click="$emit('cancel-deleting')">Отменить</c-button>
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
    inCatalogName: String,
  },
  computed: {
    cDialogProps() { return this.inDialogProps; },
    cCountUsedItem() { 
      return this.$store.getters.GET_COUNT_USED_ITEM_CATALOG;
    },
  },
  data() {
    return {
      valueInput: '',
      validation: false,
    }
  },
  created() {
    this.$store.dispatch('SET_COUNT_USED_ITEM_ACTIVE', { valueId: this.inDialogProps.ID, catalogName: this.inCatalogName });
    this.$store.dispatch('SET_COUNT_USED_ITEM_INACTIVE', { valueId: this.inDialogProps.ID, catalogName: this.inCatalogName });
  },
  methods: {
    inputValidation() {
      this.validation = false;
      if (this.valueInput != this.cDialogProps.CNAME) this.validation = true;
    },
    deleteItem(inValueId) {
      if (this.validation == false) this.$emit('accept-deleting', inValueId);
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'zs-dialog.scss';

.dialog-catalog {
  &__body {
    .body__text {
      &_warning {
        margin: 3px 0px;
      }
    }
    .body__table {
      margin-left: 10px;
      font-family: 'Montserrat';
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      .table-row_active { color: red; }
      .table-row_inactive { color: grey; }
    }
  }
}
</style>