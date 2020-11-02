<template>
  <div class="cryptovpn-control">
    <c-select class="cryptovpn-control__document"
              :inListItem="listItem"
              v-model="valueDistrictId">Территория</c-select>
    <c-select class="cryptovpn-control__task"
              :inListItem="listItemTask"
              v-model="valueTask"
              v-if="taskVisibility">Задача</c-select>
    <c-select class="cryptovpn-control__state"
              :inListItem="listItemState"
              v-model="valueState">Состояние</c-select>
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
    controlType: String,
  },
  computed: {
    listItem() { return this.$store.getters.GET_LIST_DISTRICT; },
    taskVisibility() { return (this.controlType == 'CL') ? true : false; },
  },
  data() {
    return {
      valueDistrictId: "0",
      valueState: "0",
      valueTask: "0",
      listItemTask: [{ID: '1', CNAME: 'Client'}, {ID: '2', CNAME: 'Mail'}, {ID: '3', CNAME: 'Cryptoservice'}],
      listItemState: [{ID: '1', CNAME: 'Установлен'}, {ID: '2', CNAME: 'Удален'}],
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