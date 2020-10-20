<template>
  <div class="document-control">
    <div class="document-control__box">
      <c-select class="document-control__select"
                :inListItem="listItem"
                v-model="documentProps">Укажите документ для добавления</c-select>
      <div class="document-control__box_inline">
        <c-input class="document-control__input"
                 v-model="documentNote">Примечание к документу</c-input>
        <!-- <div class="document-control__button"> -->
          <c-button class="document-control__button-item"
                    @click="addDocument">Добавить</c-button>
        <!-- </div> -->
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
  data: function() {
    return {
      
      documentProps: {},
      documentNote: '',
    }
  },
  created: function() {
    switch(this.listType) {
      case 'INPUT': {
        this.$store.dispatch('SET_LIST_CATALOGS', 'DOCUMENT_INPUT');
      }
      case 'OUTPUT': {
        this.$store.dispatch('SET_LIST_CATALOGS', 'DOCUMENT_OUTPUT');
      }
    }
  },
  methods: {
    addDocument: function() {
      let option = {
        documentProps: this.documentProps,
        documentNote: this.documentNote
      }
      this.$emit('add-document', option);
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
    // display: flex;
    // justify-content: flex-end;
    &-item {
      min-width: 150px;
    }
  }
}
</style>