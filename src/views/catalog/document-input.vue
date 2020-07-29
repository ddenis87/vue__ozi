<template>
  <div class="catalog">
    <h3 class="catalog__title">Справочники - Входящие документы</h3>
    <div class="catalog-grid">
      <div class="catalog-grid__control">
        <addition @addItem="addItem"></addition>
      </div>
      <div class="catalog-grid__list">
        <register :arrList="arrList"
                  @disableItem="disableItem"
                  @deleteItem="confirmDelete"></register>
      </div>
    </div>
    <div class="confirm" :class="{'confirm_display' : isConfirm}">
      <confirm @confirmCancel="deleteCancel" @confirmOk="deleteOk">
        <template v-slot:action>{{ objConfirmSlot.action }}</template>  
        <template v-slot:list>{{ objConfirmSlot.list }}</template>  
        <template v-slot:effect>{{ objConfirmSlot.effect }}</template>  
      </confirm>
    </div>
  </div>
</template>

<script>
import Addition from '@/components/catalog/addition';
import Register from '@/components/catalog/register';
import Confirm from '@/components/catalog/confirm';

export default {
  name: 'DocumentInput',
  components: {
    Addition, Register, Confirm,
  },
  data: function() {
    return {
      arrList: Array,
      objDelete: {},
      modifyRezult: '',
      objConfirmSlot: {action: '', list: '', effect: '', clear: () => {this.action = ''; this.list = ''; this.effect = ''}},
      isConfirm: false,
    }
  },
  created: function() {
    this.getList();
    // this.$store.commit('systemoutState', {text: 'Warning', status: 'warning'});
  },
  methods: {
    addItem: function(inputText, inputConfirm) {
      let objParams = {
        function: 'addDocumentInput',
        iname: inputText,
        iconfirm: (inputConfirm) ? 1 : 0,
      }
      this.modifyItem(objParams, this.systemoutState, {text: 'Документ успешно добавлен', status: 'successfully'});
    },
    
    disableItem: function(row) {
      let objParams = {
        function: 'activeDocumentInput',
        iid: row.CID,
        ivisible: (row.CVISIBLE == '1') ? '0' : '1',
      }
      this.modifyItem(objParams, this.systemoutState, {text: (objParams.ivisible == '1') ? 'Документ доступен для добавления' : 'Документ не доступен для добавления', status: 'successfully'});
    },

    confirmDelete: function(row) {
      this.objDelete = {
        function: 'deleteDocumentInput',
        iid: row.CID,
      }
      this.systemoutState('Ожидание подтверждения действия...', 'information');
      this.objConfirmSlot.action = 'Вы собираетесь удалить следующий документ:';
      this.objConfirmSlot.list = '"' + row.CNAME + '"';
      this.objConfirmSlot.effect = 'Данное действие нельзя отменить.';
      this.isConfirm = true;
    },
    deleteCancel: function() {
      this.isConfirm = false;
      this.objDelete = {};
      this.objConfirmSlot.clear();
      this.systemoutState('Действие отменено', 'warning');
    },
    deleteOk: function() {
      this.modifyItem(this.objDelete);
      this.isConfirm = false;
      this.objDelete = {};
      this.objConfirmSlot.clear();
      this.systemoutState('Документ успешно удален', 'successfully');
    },
    
    systemoutState: function(text, status) {
      this.$store.commit('systemoutState', {
        text: text, 
        status: status,
      })
    },

    modifyItem: function(objParams, cbSysteoutState, cbSystemoutProps) {
      let axios = require('axios').default;
      axios
        .post(pathBackend + 'index.php', null, {params: objParams})
        .then((response) => {
          this.modifyRezult = response.data;
          this.getList();
          cbSysteoutState(cbSystemoutProps.text, cbSystemoutProps.status);
        })
    },

    getList: function() {
      let axios = require('axios').default;
      axios
        .post(pathBackend + 'index.php', null, {params: {function: 'getListDocumentInput'}})
        .then((response) => {this.arrList = response.data})
      
    },
  }
}
</script>

<style lang="scss" scoped>
  .catalog {
    position: relative;
    &__title {
      margin: 0px;
      color: teal;
    }

    .confirm {
      position: fixed;
      display: none;
      justify-content: center;
      align-items: center;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      &_display { display: flex; }
    }
  }
  .catalog-grid {
    display: grid;
    grid-template-areas: "document-control document-list";
    grid-template-rows: auto;
    grid-template-columns: 40% 60%;
    border-top: 2px solid grey;
    padding-top: 10px;
    &__control {grid-area: document-control; padding-right: 10px; border-right: 1px solid teal;}
    &__list {grid-area: document-list; padding-left: 10px; border-left: 1px solid teal;}
  }
</style>