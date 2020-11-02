<template>
  <div class="cryptovpn-cs">
    <h3 class="cryptovpn-cs__title">Журналы - Пользователи ViPNet Cryptoservice</h3>
    <div class="cryptovpn-cs__body">
      <div class="cryptovpn-cs__control">
        <crypto-vpn-control @accept-filter="acceptFilter" controlType="CS"></crypto-vpn-control>
      </div>
      <hr class="cryptovpn-cs__separator"/>
      <div class="cryptovpn-cs__body-list">
        <crypto-vpn-list :listItem="listItem" listType="CS"></crypto-vpn-list>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoVpnControl from '@/components/report/cryptovpn__control';
import CryptoVpnList from '@/components/report/cryptovpn__list';

export default {
  name: 'CryptovpnCs',
  components: {
    CryptoVpnControl,
    CryptoVpnList,
  },
  // computed: {
  //   listItem() { return this.$store.getters.GET_LIST_REPORT_CS; }
  // },
  data() {
    return {
      listItem: this.$store.getters.GET_LIST_REPORT_CS,
    }
  },
  created() {
    let sendOption = {};
    this.$store.dispatch('SET_LIST_REPORT_CRYPTOVPN_CS', sendOption);
  },
  methods: {
    acceptFilter(option) {
      this.listItem = this.$store.getters.GET_LIST_REPORT_CS;
      if (option.valueDistrictId != '0') this.listItem = this.listItem.filter(item => item.VDISTRICTINSTALLID == option.valueDistrictId);
      // switch(option.valueTask) {
      //   case '1': this.listItem = this.listItem.filter(item => item.VTASKCLIENT == '1'); break;
      //   case '2': this.listItem = this.listItem.filter(item => item.VTASKMAIL == '1'); break;
      //   case '3': this.listItem = this.listItem.filter(item => item.VTASKCS == '1'); break;
      // }
      switch(option.valueState) {
        case '1': this.listItem = this.listItem.filter(item => item.VBASISUNISTALL == null); break;
        case '2': this.listItem = this.listItem.filter(item => item.VBASISUNISTALL != null); break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cryptovpn-cs {
  font-family: 'Montserrat';
  &__body {
    padding-left: 10px;
  }
  &__title {
    margin-bottom: 10px;
    color: darkslategrey;
  }
  &__separator {
    margin: 10px 0px;
  }
}
</style>