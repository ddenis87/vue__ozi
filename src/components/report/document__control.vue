<template>
  <div class="join-document-control">
    <c-date-range class="join-document-control__date-range"
                  v-model="dateRange"></c-date-range>
    <c-select class="join-document-control__document"
              :inListItem="listItem"
              v-model="valueDocumentId">Документ</c-select>
    <c-button @click="acceptFilter">Применить</c-button>
  </div>
</template>

<script>
import cSelect from '@/components/elements/c-select';
import cButton from '@/components/elements/c-button';
import cDateRange from '@/components/elements/c-date-range';

export default {
  name: 'JoinDocumentControl',
  components: {
    cSelect,
    cButton,
    cDateRange,
  },
  props: {
    listType: {type: String, default: 'INPUT'}
  },
  computed: {
    listItem() { return (this.listType == 'INPUT') ? this.$store.getters.GET_LIST_DOCUMENT_INPUT : this.$store.getters.GET_LIST_DOCUMENT_OUTPUT; }
  },
  data() {
    return {
      dateRange: [],
      valueDocumentId: "0",
    }
  },
  created() {
    this.$store.dispatch('SET_LIST_CATALOGS', `DOCUMENT_${this.listType.toUpperCase()}`);
  },
  methods: {
    acceptFilter() {
      let sendOption = {
        dateRange: this.dateRange,
        valueDocumentId: this.valueDocumentId,
      }
      this.$emit('accept-filter', sendOption);
    },
  },
}
</script>

<style lang="scss" scoped>
.join-document-control {
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