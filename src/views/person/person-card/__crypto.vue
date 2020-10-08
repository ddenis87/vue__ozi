<template>
  <div>
    <crypto-list :inListItem="listCryptoVpnCL">ViPNet</crypto-list>
  </div>
</template>

<script>
import axios from 'axios';

import cryptoList from '@/components/person/person-card/crypto/crypto__list';

export default {
  name: 'personCardCrypto',
  components: {
    cryptoList,
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