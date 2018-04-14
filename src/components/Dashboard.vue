<template>
  <v-layout style="margin-top: 150px; margin-left: 65px">
    <div class="mainWrapper">
      <v-gravatar :hash="gravatarHash" class="vGravatar"/>
      <div style="margin-right: auto; margin-left: auto">
        <a :href="jurorScan" target="_blank" style="text-decoration: none; color: rgba(0,0,0,0.8)">
          <h3 class="headlineJuror">{{ $root.jurorAddress }}</h3>
        </a>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
   data () {
      return {

      }
    },
    computed: {
        jurorScan: function(){
          return 'https://etherscan.io/address/' + this.$root.jurorAddress
        },
        gravatarHash: function(){
          return md5(this.$root.jurorAddress)
        }
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
  .mainWrapper {
		margin-top: 60px;
		width: 800px;
		height: 450px;
		background-color: #222;
		margin-left: auto;
		margin-right: auto;
		border-radius: 4px;
		border-top: 4px solid #5E35B1;
		box-shadow: 0px 6px 30px #666666;
	}
	.welcomeText {
		color: white;
		margin-top: 45px;
		font-size: 22px;
	}
	.welcomeTextSec {
		color: rgba(255,255,255,0.3);
		margin-top: 2px;
		font-size: 14px;
	}
</style>
