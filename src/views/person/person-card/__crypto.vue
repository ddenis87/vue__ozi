<template>
  <div>
    <crypto-vpn-cl-list :listItem="listVpnCl">ViPNet Client</crypto-vpn-cl-list>
    <hr>
    <crypto-vpn-cs-list :listItem="listVpnCs">ViPNet Cryptoservice</crypto-vpn-cs-list>
  </div>
</template>

<script>

import cryptoVpnClList from '@/components/person/person-card/crypto/crypto__vpn-cl-list';
import cryptoVpnCsList from '@/components/person/person-card/crypto/crypto__vpn-cs-list';

export default {
  name: 'personCardCrypto',
  components: {
    cryptoVpnClList,
    cryptoVpnCsList,
  },
  computed: {
    listVpnCs() { return this.$store.getters.GET_USER_VPN_CS; },
    listVpnCl() { return this.$store.getters.GET_USER_VPN_CL; },
    valueUserId() { return this.$store.getters.GET_PROFILE_USER_ID; },
  },
  created() {
    this.$store.dispatch('SET_USER_VPN', { valueUserId: this.valueUserId, keyType: 'cs' });
    this.$store.dispatch('SET_USER_VPN', { valueUserId: this.valueUserId, keyType: 'cl' });
  },
}
</script>