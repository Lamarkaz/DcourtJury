<template>
  <v-layout style="margin-top: 150px; margin-left: 65px">
    <v-flex xs12 sm4 offset-sm8>
      <v-card class="jurorCard">
        <v-gravatar :hash="gravatarHash" class="vGravatar" size="100"/>
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
import * as md5 from '../js/md5.min.js'
export default {
   data () {
      return {
        jurorAddress: '',
        jurorScan: '',
        gravatarHash: '',
      }
    },
    created (){
        this.jurorAddress = web3.eth.defaultAccount;
        this.jurorScan = 'https://etherscan.io/address/' + this.jurorAddress;
        this.gravatarHash = md5.md5(this.jurorAddress);
    }
}
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
