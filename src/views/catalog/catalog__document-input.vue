<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Входящие документы</h3>

    <div class="catalog__body">
      <div class="catalog__body-control">
        <catalog-control>
          <template v-slot:titleInput>Наименование входящего документа</template>
        </catalog-control>
      </div>
      <hr class="catalog__separator"/>
      <div class="catalog__body-list">
        <catalog-list :listItem="listItem"></catalog-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import catalogControl from '@/components/catalog/catalog__control-document';
import catalogList from '@/components/catalog/catalog__list-document';
export default {
  name: 'catalogDocumentInput',
  components: {
    catalogControl,
    catalogList
  },
  data: function() {
    return {
      listItem: Array,
      // objDelete: {},
      // modifyRezult: '',
      // objConfirmSlot: {action: '', list: '', effect: '', clear: () => {this.action = ''; this.list = ''; this.effect = ''}},
      // isConfirm: false,
    }
  },
  created: function() {
    this.getListItem();
    // this.getList();
    // this.$store.commit('systemoutState', {text: 'Warning', status: 'warning'});
  },
  methods: {
    // addItem: function(inputText, inputConfirm) {
    //   let objParams = {
    //     function: 'addDocumentInput',
    //     iname: inputText,
    //     iconfirm: (inputConfirm) ? 1 : 0,
    //   }
    //   this.modifyItem(objParams, this.systemoutState, {text: 'Документ успешно добавлен', status: 'successfully'});
    // },
    
    // disableItem: function(row) {
    //   let objParams = {
    //     function: 'activeDocumentInput',
    //     iid: row.CID,
    //     ivisible: (row.CVISIBLE == '1') ? '0' : '1',
    //   }
    //   this.modifyItem(objParams, this.systemoutState, {text: (objParams.ivisible == '1') ? 'Документ доступен для добавления' : 'Документ не доступен для добавления', status: 'successfully'});
    // },

    // confirmDelete: function(row) {
    //   this.objDelete = {
    //     function: 'deleteDocumentInput',
    //     iid: row.CID,
    //   }
    //   this.systemoutState('Ожидание подтверждения действия...', 'information');
    //   this.objConfirmSlot.action = 'Вы собираетесь удалить следующий документ:';
    //   this.objConfirmSlot.list = '- "' + row.CNAME + '"';
    //   // this.objConfirmSlot.effect = 'Данное действие нельзя отменить.';
    //   this.isConfirm = true;
    // },
    // deleteCancel: function() {
    //   this.isConfirm = false;
    //   this.objDelete = {};
    //   this.objConfirmSlot.clear();
    //   this.systemoutState('Действие отменено', 'warning');
    // },
    // deleteOk: function() {
    //   this.modifyItem(this.objDelete);
    //   this.isConfirm = false;
    //   this.objDelete = {};
    //   this.objConfirmSlot.clear();
    //   this.systemoutState('Документ успешно удален', 'successfully');
    // },
    
    // systemoutState: function(text, status) {
    //   this.$store.commit('systemoutState', {
    //     text: text, 
    //     status: status,
    //   })
    // },

    // modifyItem: function(objParams, cbSysteoutState, cbSystemoutProps) {
    //   let axios = require('axios').default;
    //   axios
    //     .post(pathBackend + 'index.php', null, {params: objParams})
    //     .then((response) => {
    //       this.modifyRezult = response.data;
    //       this.getList();
    //       cbSysteoutState(cbSystemoutProps.text, cbSystemoutProps.status);
    //     })
    // },

    getListItem: function() {
      axios
      .post(pathBackend + 'catalog.php', null, {params: {function: 'getListDocumentInput'}})
      .then(response => {
        this.listItem = response.data;
      })
      .catch(() => {
        this.listItem = [
          {CID: '1', CNAME: 'Нет соединения с базой', CCONFIRM: '0', CVISIBLE: '1'},
          {CID: '2', CNAME: 'Или произошла ошибка при получении данных', CCONFIRM: '1', CVISIBLE: '1'},
          {CID: '3', CNAME: 'А возможно так сошлись звезды', CCONFIRM: '0', CVISIBLE: '0'},
        ]
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  font-family: 'Montserrat';
  &__title {
    margin-bottom: 10px;
    color: darkslategrey;
  }
  &__separator {
    margin: 10px 20px;
  }
}
</style>