export const catalog = {
  data() {
    return {
      dialogSwitch: { visibility: false, },
      dialogChange: { visibility: false, },
      dialogDelete: { visibility: false, },
    }
  },
  created() {
    this.$store.dispatch('SET_LIST_CATALOGS', this.catalogName);
  },
  methods: {
    showDialogSwitch(inItem) { 
      this.dialogSwitch.visibility = true;
      this.dialogSwitch.dialogProps = inItem;
    },
    switchItem(inValueId, inValueVisible) {
      let option = {
        catalogName: this.catalogName,
        valueId: inValueId,
        valueVisible: inValueVisible,
      };
      this.$store.dispatch('SWITCH_ITEM_CATALOGS', option);
      this.dialogSwitch.visibility = false;
    },

    showDialogChange(inItem) { 
      this.dialogChange.visibility = true;
      this.dialogChange.dialogProps = inItem;
    },
    changeItem(inValueId, inValueName, inValueVerify) {
      let option = {
        catalogName: this.catalogName,
        valueId: inValueId,
        valueName: inValueName,
        valueVerify: (inValueVerify == true) ? '1' : '0',
      }
      this.$store.dispatch('CHANGE_ITEM_CATALOGS', option);
      this.dialogChange.visibility = false;
    },

    showDialogDelete(inItem) {
      this.dialogDelete.visibility = true;
      this.dialogDelete.dialogProps = inItem;
    },
    deleteItem(inValueId) {
      let option = {
        catalogName: this.catalogName,
        valueId: inValueId,
      };
      this.$store.dispatch('DELETE_ITEM_CATALOGS', option);
      this.dialogDelete.visibility = false;
    }
  }
}