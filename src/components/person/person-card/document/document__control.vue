<template>
  <div class="document-control">
    <div class="document-control__box">
      <c-select ref="documentId" class="document-control__select"
                :inListItem="listItem"
                :validation="validation"
                v-model="documentProps.valueDocumentId"
                @change="() => { validation = false }">Укажите документ для добавления</c-select>
      <div class="document-control__box_inline">
        <c-input ref="documentNote" class="document-control__input"
                 v-model="documentProps.valueNote">Примечание к документу</c-input>
        <c-button class="document-control__button-item"
                  @click="addingItem">Добавить</c-button>
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
  props: {
    listType: {
      type: String,
      default: 'INPUT'
    },
  },
  computed: {
    listItem() { return this.$store.getters[`GET_LIST_DOCUMENT_${this.listType.toUpperCase()}_VISIBLE`]; },
  },
  data() {
    return {
      documentProps: {
        catalogName: this.listType,
        valueDocumentId: null,
        valueNote: null,
      },
      validation: false,
    }
  },
  created() {
    this.$store.dispatch('SET_LIST_CATALOGS', `DOCUMENT_${this.listType.toUpperCase()}`);
  },
  methods: {
    addingItem() {
      let sendOption = {};
      Object.assign(sendOption, this.documentProps);
      if (sendOption.valueDocumentId == null || sendOption.valueDocumentId == '0') { this.validation = true; return;}
      this.$emit('adding-item', sendOption);
      this.$refs.documentId.resetComponent();
      this.$refs.documentNote.resetComponent();
    }
  }
}
</script>

<style lang="scss" scoped>
.document-control {
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  &__box_inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }
  &__input {
    width: 100%;
    margin-right: 10px;
  }
  &__select {
    width: 100%;
    margin-bottom: 10px;
  }
  &__button {
    &-item {
      min-width: 150px;
    }
  }
}
</style>