<template>
  <div class="crypto-vpn-list-control">
    <button class="crypto-vpn-list-control__button crypto-vpn-list-control__button_view" title="Показать документ" v-if="upload"></button>
    <button class="crypto-vpn-list-control__button crypto-vpn-list-control__button_create" title="Сформировать документ" v-else @click="createDocument"></button>
    <button class="crypto-vpn-list-control__button crypto-vpn-list-control__button_delete" title="Удалить документ" v-if="upload"></button>
    <button class="crypto-vpn-list-control__button crypto-vpn-list-control__button_upload" title="Загрузить документ" v-else></button>
  </div>  
</template>

<script>
export default {
  name: 'CryptoVpnListControl',
  props: {
    upload: {
      type: Boolean,
      default: false
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.crypto-vpn-list-control {
  display: flex;
  justify-content: space-around;
  &__button {
    width: 20px;
    height: 20px;
    border: 0px solid darkcyan;
    background-color: transparent;
    background-repeat: no-repeat;
    cursor: pointer;
    &_view { background-image: url('~@/assets/images/control/button_document.png'); background-size: contain; }
    &_create { background-image: url('~@/assets/images/control/button_document-create.png'); background-size: contain; }
    &_delete { background-image: url('~@/assets/images/control/button_delete_file.png'); background-size: contain; }
    &_upload { background-image: url('~@/assets/images/control/button_upload_file.png'); background-size: contain; }
    &_row { background-image: url('~@/assets/images/control/button_delete.png'); background-size: contain; }
  }
}
</style>