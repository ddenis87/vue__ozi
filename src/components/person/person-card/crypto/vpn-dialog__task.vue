<template>
  <div class="vpn-dialog" :class="{'vpn-dialog_show': cShowDialog}" >
    <h3 class="vpn-dialog__title">Прикладные задачи</h3>
    <div class="vpn-dialog__checkbox">
      <c-checkbox class="vpn-dialog__checkbox_item" 
                  :inInputChecked="cItemProps.VTASKCLIENT" 
                  v-model="taskValue.client">Защита трафика</c-checkbox>
      <c-checkbox class="vpn-dialog__checkbox_item" 
                  :inInputChecked="cItemProps.VTASKMAIL"  
                  v-model="taskValue.mail">Деловая почта</c-checkbox>
      <c-checkbox class="vpn-dialog__checkbox_item" 
                  :inInputChecked="cItemProps.VTASKCS" 
                  v-model="taskValue.cs">Криптосервис</c-checkbox>
    </div>
    <div class="vpn-dialog__control">
      <c-button class="vpn-dialog__control_item" @click="accept">Применить</c-button>
      <c-button class="vpn-dialog__control_item" @click="$emit('cancel-close')">Отменить</c-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import cCheckbox from '@/components/elements/c-checkbox';
import cButton from '@/components/elements/c-button';

export default {
  name: 'vpnDialogTask',
  components: {
    cCheckbox,
    cButton,
  },
  props: {
    inShowDialog: false,
    inItemProps: {}
  },
  computed: {
    cShowDialog() { return this.inShowDialog; },
    cItemProps() { return this.inItemProps; }
  },
  data() {
    return {
      taskValue: {},
    }
  },
  methods: {
    accept() {
      if (Object.keys(this.taskValue).length == 0) return;
      let option = {
        function: 'setCryptoVpnClTask',
        itemId: this.cItemProps.VID,
        client: (this.taskValue.client == true) ? '1' : '0',
        mail: (this.taskValue.mail == true) ? '1' : '0',
        cs: (this.taskValue.cs == true) ? '1' : '0',
      }
      axios
       .post(pathBackend + 'person-card__crypto.php', null, {params: option})
       .then(response => {
        //  console.log(response.data);
         this.$emit('update-task', response.data);
       })
      
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
  visibility: hidden;
  &_show {
    visibility: visible;
  }
 

  visibility: hidden;
  &__title {
    color: black;
    margin-bottom: 10px;
  }
  &__checkbox {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    &_item {
      padding: 5px;
    }
  }
  &__control {
    display: flex;
    justify-content: space-between;
    &_item {
      min-width: 100px;
    }
  }
}
</style>