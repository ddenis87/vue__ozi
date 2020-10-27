<template>
  <div class="join-cryptovpn-control">
    <c-select class="join-cryptovpn-control__document"
              :inListItem="listItem"
              v-model="valueDistrictId">Территория</c-select>
    <c-button @click="acceptFilter">Применить</c-button>
  </div>
</template>

<script>
import cSelect from '@/components/elements/c-select';
import cButton from '@/components/elements/c-button';

export default {
  name: 'JoinDocumentControl',
  components: {
    cSelect,
    cButton,
  },
  props: {
    listType: {type: String, default: 'CLIENT'} //?
  },
  computed: {
    listItem() { return this.$store.getters.GET_LIST_DISTRICT; }
  },
  data() {
    return {
      valueDistrictId: "0",
    }
  },
  created() {
    this.$store.dispatch('SET_LIST_CATALOGS', `DISTRICT`);
  },
  methods: {
    acceptFilter() {
      let sendOption = {
        valueDistrictId: this.valueDistrictId,
      }
      this.$emit('accept-filter', sendOption);
    },
  },
}
</script>

<style lang="scss" scoped>
.join-cryptovpn-control {
  display: flex;
  align-items: center;
  &__date-range {
    min-width: 300px;
  }
  &__document {
    margin: 0px 20px;
    width: 100%;
  }
}
</style>