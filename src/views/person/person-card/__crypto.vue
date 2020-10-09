<template>
  <div>
    <crypto-vpn-cl-list v-if="(listCryptoVpnCL.length != 0)" 
                        :inListItem="listCryptoVpnCL">ViPNet</crypto-vpn-cl-list>
    <crypto-vpn-cs-list v-if="(listCryptoVpnCS.length != 0)"></crypto-vpn-cs-list>
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
    
  },
  methods: {
    getListCryptoVpnCL() {
      let option = {
        function: 'getListCryptoVpnCL',
        personId: this.personId
      }
      axios
        .post(pathBackend + 'person-card__crypto.php', null, {params: option})
        .then(response => {
          this.listCryptoVpnCL = response.data;
          console.log(this.listCryptoVpnCL);
        })
    },
    getListCryptoVpnCS() {
      let option = {
        function: 'getListCryptoVpnCS',
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