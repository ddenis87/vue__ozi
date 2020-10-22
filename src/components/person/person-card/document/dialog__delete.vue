<template>
  <div class="dialog-catalog">
    <h3 class="dialog-catalog__title">Подтверждение удаления</h3>
    <div class="dialog-catalog__body">
      <p class="body__text">Удаляемый документ: <b class="body__text_title">{{ cDialogProps.VNAME }}.</b></p>
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
                  @click="deleteItem(cDialogProps.VID)">Применить</c-button></div>
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
      return { itemActive: 0, itemInactive: 0 };// this.$store.getters.GET_COUNT_USED_ITEM_CATALOG;
    },
    catalogName() { return this.inCatalogName; },
  },
  data() {
    return {
      valueInput: '',
      validation: false,
    }
  },
  created() {
    // this.$store.dispatch('SET_COUNT_USED_ITEM_ACTIVE', { valueId: this.inDialogProps.ID, catalogName: this.inCatalogName });
    // this.$store.dispatch('SET_COUNT_USED_ITEM_INACTIVE', { valueId: this.inDialogProps.ID, catalogName: this.inCatalogName });
  },
  methods: {
    inputValidation() {
      this.validation = false;
      if (this.valueInput != this.cDialogProps.VNAME) this.validation = true;
    },
    deleteItem(inValueId) {
      let sendOption = {
        catalogName: this.catalogName,
        valueId: inValueId,
        valueUserId: this.cDialogProps.VUSERID,
      }
      if (this.validation == false) this.$emit('accept-deleting', sendOption);
    },
  }
}
</script>

<style lang="scss" scoped>
// @import 'zs-dialog.scss';

$minWidth: 600px;
.dialog-catalog {
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
        color: darkred;
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
      .table-row_active { color: darkred; }
      .table-row_inactive { color: grey; }
    }
  }
}
</style>