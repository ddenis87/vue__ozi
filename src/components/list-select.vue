<template>
  <div class="list-select" :style="{'width': selectWidth}">
    <select class="list-select__select" 
            v-model="selectChecked"
            :disabled="p_selectDisabled"
            @change="() => {$emit('change',this.selectChecked)}">
      <option class="list-select__option" value=""></option>
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
    p_selectFunction: '',
    p_selectWidth: '',
    p_selectDisabled: false,
    p_selectChecked: '',
  },
  computed: {
    selectWidth() {return this.p_selectWidth + 'px';},
  },
  data: function() {
    return {
      selectChecked: this.p_selectChecked,
      arrList: [],
    }
  },
  created: function() {
    let axios = require('axios').default;
    axios
      .post(pathBackend + 'index.php', null, {params: {function: this.p_selectFunction}})
      .then((response) => {this.arrList = response.data})
      .catch(this.arrList = [{NAME: 'Ошибка получения данных с сервера.'}])
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