<template>
  <div class="list-control-basis">
    <span class="list-control-basis__text">{{ getFormatedDocumentBase((basisProp.basisType == 'install') ? basisProp.VINSTALLDOCNUMBER : basisProp.VUNISTALLDOCNUMBER, (basisProp.basisType == 'install') ? basisProp.VINSTALLDOCDATE : basisProp.VUNISTALLDOCDATE) }}</span>
    <button class="list-control-basis__button" title="Выбрать" @click="openDialog">...</button>
    <dialog-basis v-if="dialogProps.valueVisibility"
                  :dialogProps="dialogProps"
                  @basis-cancel="() => { dialogProps.valueVisibility = false }"
                  @basis-update="basisUpdate">Документ основание</dialog-basis>
  </div>
</template>

<script>
import DialogBasis from './dialog__basis';

export default {
  name: 'ListControlBasis',
  components: {
    DialogBasis
  },
  props: {
    basisProp: Object,
    // basisId: { type: String },
    // basisDocumentId: { type: String },
    // basisText: { type: String, default: null },
    // basisDate: { type: String, default: ''},
    // basisType: { type: String }
  },
  data() {
    return {
      dialogProps: {
        valueVisibility: false,
        valueId: null,
        valueDocumentId: null,
        valueType: null,
      },
    }
  },
  created() {
    
  },
  methods: {
    basisUpdate(option) {
      this.$emit('basis-update', option);
      this.dialogPropsBasis.visibility = false;
    },
    openDialog() {
      console.log(this.basisProp);
      this.dialogProps.valueVisibility = true;
      this.dialogProps.valueId = this.basisProp.VID;
      this.dialogProps.valueDocumentId = (this.basisProp.basisType == 'install') ? this.basisProp.VINSTALLDOCID : this.basisProp.VUNISTALLDOCID;
      this.dialogProps.valueType = this.basisProp.basisType;
      // this.dialogPropsBasis.visibility = true;
      // this.dialogPropsBasis.documentBasisId = this.basisDocumentId;
      // this.dialogPropsBasis.listItemId = this.basisId;
      // this.dialogPropsBasis.typeBasis = this.basisType;
      
    },
    getFormatedDocumentBase(basisText, basisDate) {
      if (basisText == null) return '---';
      return `Заявка № ${basisText} от ${basisDate}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.list-control-basis {
  display: flex;
  justify-content: space-between;
  &__button {
    width: 20px;
    height: 20px;
    padding: 0px;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid black;
    background-color: transparent;
  }
}
</style>