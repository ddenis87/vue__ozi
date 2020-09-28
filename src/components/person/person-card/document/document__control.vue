<template>
  <div class="document-control">
    <div class="document-control__title">Добавление документа</div>
    <div class="document-control__box">
      <c-select class="document-control__select"
                :inListItem="listItem"
                v-model="documentProps">Документ</c-select>
      <c-input class="document-control__input"
               v-model="documentNote">Примечание</c-input>
      <div class="document-control__button">
        <c-button class="document-control__button-item"
                  @click="addDocument">Добавить</c-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

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
    inListType: {
      default: 'documentInput'
    },
  },
  data: function() {
    return {
      listItem: [
        {ID: '0', CNAME: ''},
        {ID: '1', CNAME: 'Заявка на предоставление доступа'},
        {ID: '2', CNAME: 'Акт о вскрытии'},
        {ID: '3', CNAME: 'Заявка на криптографию'},
      ],
      documentProps: {},
      documentNote: '',
    }
  },
  created: function() {
    let option = {
      function: this.inListType,
    };
    axios
      .post(pathBackend + 'person-card__document.php', null, {params: option})
      .then((response) => {
        this.listItem = response.data; 
      })
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
  &__title {
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }
  &__input {
    width: 100%;
    margin-bottom: 10px;
  }
  &__select {
    width: 100%;
    margin-bottom: 10px;
  }
  &__button {
    display: flex;
    justify-content: flex-end;
    &-item {
      width: 150px;
    }
  }
}
</style>