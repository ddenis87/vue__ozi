<template>
  <div class="cryptovpn-control">
    <c-select class="cryptovpn-control__document"
              :inListItem="listItem"
              v-model="valueDistrictId">Территория</c-select>
    <c-select class="cryptovpn-control__state"
              :inListItem="listItemState"
              v-model="valueState">Состояние</c-select>
    <c-select class="cryptovpn-control__task"
              :inListItem="listItemTask"
              v-model="valueTask">Задача</c-select>
    <c-button @click="acceptFilter">Применить</c-button>
  </div>
</template>

<script>
import cSelect from '@/components/elements/c-select';
import cButton from '@/components/elements/c-button';

export default {
  name: 'CryptovpnControl',
  components: {
    cSelect,
    cButton,
  },
  props: {
    // listType: {type: String, default: 'CLIENT'} //?
  },
  computed: {
    listItem() { return this.$store.getters.GET_LIST_DISTRICT; }
  },
  data() {
    return {
      valueDistrictId: "0",
      valueState: "1",
      valueTask: "1",
      listItemTask: [{ID: '1', CNAME: 'Все'}, {ID: '2', CNAME: 'Client'}, {ID: '3', CNAME: 'Mail'}, {ID: '4', CNAME: 'Cryptoservice'}],
      listItemState: [{ID: '1', CNAME: 'Все'}, {ID: '2', CNAME: 'Установлен'}, {ID: '3', CNAME: 'Удален'}],
    }
  },
  created() {
    this.$store.dispatch('SET_LIST_CATALOGS', `DISTRICT`);
  },
  methods: {
    acceptFilter() {
      let sendOption = {
        valueDistrictId: this.valueDistrictId,
        valueState: this.valueState,
        valueTask: this.valueTask,
      }
      this.$emit('accept-filter', sendOption);
    },
  },
}
</script>

<style lang="scss" scoped>
.cryptovpn-control {
  display: flex;
  align-items: center;
  &__date-range {
    min-width: 300px;
  }
  &__document {
    margin-right: 20px;
    width: 100%;
  }
  &__state, &__task {
    margin-right: 20px;
    width: 200px;
  }
}
</style>