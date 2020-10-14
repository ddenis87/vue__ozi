<template>
  <div>
    <crypto-vpn-cl-list v-if="(listCryptoVpnCL.length != 0)" 
                        :inListItem="listCryptoVpnCL"
                        @update-task="getListCryptoVpnCL"
                        @update-basis="getListCryptoVpnCL">ViPNet</crypto-vpn-cl-list>
    <crypto-vpn-cs-list v-if="(listCryptoVpnCS.length != 0)"
                        :inListItem="listCryptoVpnCS"></crypto-vpn-cs-list>
  </div>
</template>

<script>
import axios from 'axios';

import cryptoVpnClList from '@/components/person/person-card/crypto/crypto__vpn-cl-list';
import cryptoVpnCsList from '@/components/person/person-card/crypto/crypto__vpn-cs-list';

export default {
  name: 'personCardCrypto',
  components: {
    cryptoVpnClList,
    cryptoVpnCsList,
  },
  data() {
    return {
      personId: this.$store.state.personProfile.personId,
      listCryptoVpnCL: [],
      listCryptoVpnCS: [],
    }
  },
  created() {
    this.getListCryptoVpnCL();
    this.getListCryptoVpnCS()
  },
  methods: {
    getListCryptoVpnCL() {
      let option = {
        function: 'getCryptoVpnClList',
        personId: this.personId
      }
      axios
        .post(pathBackend + 'person-card__crypto.php', null, {params: option})
        .then(response => {
          this.listCryptoVpnCL = response.data;
        })
    },
    getListCryptoVpnCS() {
      let option = {
        function: 'getCryptoVpnCsList',
        personId: this.personId
      }
      axios
        .post(pathBackend + 'person-card__crypto.php', null, {params: option})
        .then(response => {
          this.listCryptoVpnCS = response.data;
        })
    }
  }

}
</script>