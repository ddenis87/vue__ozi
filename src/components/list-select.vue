<template>
  <div class="list-select" :style="{'width': fieldWidth}">
    <select class="list-select__select" :value="selectChecked">
      <option class="list-select__option" value="">КС в Мазановском районе</option>
      <option class="list-select__option" 
              v-for="(row, index) in arrList" 
              :key="index" :value="row.CID">{{ row.CNAME }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ListSelect',
  props: {
    selectFunction: '',
    selectWidth: '',
    selectDisable: false,
    selectChecked: '',
    arrList: [],
  },
  computed: {
    fieldWidth() {return this.selectWidth + 'px';}
  },
  data: function() {
    return {
      selectInput: '',
      arrList: [],
    }
  },
  created: function() {
    let axios = require('axios').default;
    axios
      .post(pathBackend + 'index.php', null, {params: {function: this.selectFunction}})
      .then((response) => {this.arrList = response.data})
  },
}
</script>

<style lang="scss" scoped>
  .list-select {
    margin: 0px;
    &__select {
      margin: 0px;
      width: 100%;
      padding: 5px;
      border: 1px solid grey;
      border-radius: 3px;
      outline: none;
      &:focus { box-shadow: 1px 1px 1px lightblue, -1px -1px 1px lightblue; }
    }
  }
</style>