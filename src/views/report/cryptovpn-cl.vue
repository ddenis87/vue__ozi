<template>
  <div class="cryptovpn-cl">
    <h3 class="cryptovpn-cl__title">Журналы - Пользователи ViPNet Client</h3>
    <div class="cryptovpn-cl__body">
      <div class="cryptovpn-cl__control">
        <crypto-vpn-control @accept-filter="acceptFilter" controlType="CL"></crypto-vpn-control>
      </div>
      <hr class="cryptovpn-cl__separator"/>
      <div class="cryptovpn-cl__body-list">
        <crypto-vpn-list :listItem="listItem" listType="CL"></crypto-vpn-list>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoVpnControl from '@/components/report/cryptovpn__control';
import CryptoVpnList from '@/components/report/cryptovpn__list';

export default {
  name: 'CryptovpnCl',
  components: {
    CryptoVpnControl,
    CryptoVpnList,
  },
  computed: {
    listItem() { return this.$store.getters.GET_LIST_REPORT_CL; },
  },
  created() {
    let sendOption = {};
    this.$store.dispatch('SET_LIST_REPORT_CRYPTOVPN_CL', sendOption);
  },
  methods: {
    acceptFilter(option) {
      this.$store.commit('SET_LIST_REPORT_CL_FILTER', option);
    }
  }
}
</script>

<style lang="scss" scoped>
.cryptovpn-cl {
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