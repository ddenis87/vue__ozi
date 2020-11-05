<template>
  <div>
    <vpn-list-cl :listItem="listVpnCl">ViPNet Client</vpn-list-cl>
    <hr>
    <vpn-list-cs :listItem="listVpnCs">ViPNet Cryptoservice</vpn-list-cs>
  </div>
</template>

<script>

import VpnListCl from '@/components/person/person-card/crypto/vpn-list__cl';
import VpnListCs from '@/components/person/person-card/crypto/vpn-list__cs';

export default {
  name: 'personCardCrypto',
  components: {
    VpnListCl,
    VpnListCs,
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