<template>
  <div class="vpn-dialog" >
    <h3 class="vpn-dialog__title">Прикладные задачи</h3>
    <div class="vpn-dialog__checkbox">
      <c-checkbox class="vpn-dialog__checkbox_item" 
                  :inInputChecked="dialogProps.valueClient" 
                  v-model="taskValue.valueClient">Защита трафика</c-checkbox>
      <c-checkbox class="vpn-dialog__checkbox_item" 
                  :inInputChecked="dialogProps.valueMail"  
                  v-model="taskValue.valueMail">Деловая почта</c-checkbox>
      <c-checkbox class="vpn-dialog__checkbox_item" 
                  :inInputChecked="dialogProps.valueCs" 
                  v-model="taskValue.valueCs">Криптосервис</c-checkbox>
    </div>
    <div class="vpn-dialog__control">
      <c-button class="vpn-dialog__control_item" @click="updateTask">Применить</c-button>
      <c-button class="vpn-dialog__control_item" @click="$emit('cancel-update')">Отменить</c-button>
    </div>
  </div>
</template>

<script>
import cCheckbox from '@/components/elements/c-checkbox';
import cButton from '@/components/elements/c-button';

export default {
  name: 'DialogTask',
  components: {
    cCheckbox,
    cButton,
  },
  props: {
    dialogProps: Object
  },
  data() {
    return {
      taskValue: {},
    }
  },
  methods: {
    updateTask() {
      let option = {
        valueId: this.dialogProps.valueId,
        valueClient: (this.taskValue.valueClient == true) ? '1' : '0',
        valueMail: (this.taskValue.valueMail == true) ? '1' : '0',
        valueCs: (this.taskValue.valueCs == true) ? '1' : '0',
      }
      this.$store.dispatch('SET_VPN_TASK', option);
      this.$emit('update-task');
    }
  }
}
</script>

<style lang="scss" scoped>
.vpn-dialog {
  position: fixed;
  top: 30px;
  left: 30px;
  display: block;
  width: auto;
  height: auto;
  padding: 10px;
  min-width: 250px;
  border: 2px solid grey;
  border-radius: 3px;
  box-shadow: 1px 1px 1px black;
  background-color: white;
  font-size: 12px;
  font-family: 'Montserrat';
  &__title {
    color: black;
    margin-bottom: 10px;
  }
  &__checkbox {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    &_item { padding: 5px; }
  }
  &__control {
    display: flex;
    justify-content: space-between;
    &_item { min-width: 100px; }
  }
}
</style>