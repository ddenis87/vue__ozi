<template>
  <div class="vpn-dialog" :class="{'vpn-dialog_show': cShowDialog}">
    <h3 class="vpn-dialog__title">Прикладные задачи</h3>
    <div class="vpn-dialog__checkbox" v-show="cShowDialog">
      <c-checkbox class="vpn-dialog__checkbox_item" inValue="client" :inValueChecked="inTaskValue.VTASKCLIENT">Защита трафика</c-checkbox>
      <c-checkbox class="vpn-dialog__checkbox_item" inValue="mail" :inValueChecked="inTaskValue.VTASKMAIL">Деловая почта</c-checkbox>
      <c-checkbox class="vpn-dialog__checkbox_item" inValue="cs" :inValueChecked="inTaskValue.VTASKCS">Криптосервис</c-checkbox>
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
  name: 'cryptoVpnDialog',
  components: {
    cCheckbox,
    cButton,
  },
  props: {
    inShowDialog: false,
    inTaskValue: {}
  },
  computed: {
    cShowDialog() { return this.inShowDialog; },
    cTaskValue() { return this.inTaskValue; }
  },
  data() {
    return {
      // taskClient: '',
      // taskMail: cTaskValue.VTASKMAIL,
      // taskCs: cTaskValue.VTASKCS,
      taskValue: []
    }
  },
  methods: {
    accept() {
      // console.log(item);
      console.log(this.taskClient);
      console.log(this.taskMail);
      console.log(this.taskCs);
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