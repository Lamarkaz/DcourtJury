<template>
  <v-layout style="margin-top: 150px; margin-left: 65px">
    <v-flex xs12 sm4 offset-sm8>
      <v-card class="jurorCard">
        <v-gravatar :hash="jurorAddress" class="vGravatar" size="100"/>
        <v-card-title primary-title>
          <div style="margin-right: auto; margin-left: auto">
            <h3 class="headlineJuror">{{ jurorAddress }}</h3>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script>
export default {
   data () {
      return {
        jurorAddress: web3.eth.defaultAccount,
        jurorScan: 'https://etherscan.io/address/' + jurorAddress,
      }
    }
}

var jurorAddress = web3.eth.defaultAccount;
var jurorScan = 'https://etherscan.io/address/' + jurorAddress;
</script>


<style scoped>
  .headlineJuror {
    font-size: 13px !important;
    font-weight: 500;
    margin-right: auto; 
    margin-left: auto;
  }
  .vGravatar {
    margin-top: 30px;
    border-radius: 5px;
  }
  .jurorCard {
    box-shadow: none !important;
  }
</style>
