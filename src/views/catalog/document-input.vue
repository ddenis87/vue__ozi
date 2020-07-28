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
                  @deleteItem="deleteItem"></register>
      </div>
    </div>
  </div>
</template>

<script>
import Addition from '@/components/catalog/addition';
import Register from '@/components/catalog/register';

export default {
  name: 'DocumentInput',
  components: {
    Addition, Register,
  },
  data: function() {
    return {
      arrList: Array,
      modifyRezult: '',
    }
  },
  created: function() {
    this.getList();
  },
  methods: {
    addItem: function(inputText, inputConfirm) {
      let objParams = {
        function: 'addDocumentInput',
        iname: inputText,
        iconfirm: (inputConfirm) ? 1 : 0,
      }
      this.modifyItem(objParams);
    },
    
    disableItem: function(row) {
      let objParams = {
        function: 'activeDocumentInput',
        iid: row.CID,
        ivisible: (row.CVISIBLE == '1') ? '0' : '1',
      }
      this.modifyItem(objParams);
    },

    deleteItem: function(row) {
      let objParams = {
        function: 'deleteDocumentInput',
        iid: row.CID,
      }
      //this.modifyItem(objParams);
    },
    
    modifyItem: function(objParams) {
      let axios = require('axios').default;
      axios
        .post(pathBackend + 'index.php', null, {params: objParams})
        .then((response) => {
          this.modifyRezult = response.data;
          console.log(this.modifyRezult);
          this.getList();
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
    &__title {
      margin: 0px;
      color: teal;
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