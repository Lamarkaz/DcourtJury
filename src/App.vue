<template>
  <div id="app">
      <Metamask v-if="!Metamask"></Metamask>
      <!-- <Welcome v-if="!Registered && Metamask"></Welcome> -->
      <div data-app>
        <Layout></Layout>
        <v-content style="margin-left: 65px">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </v-content>
      </div>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue'
import Metamask from '@/components/Metamask.vue'
import Welcome from '@/components/Welcome.vue'
export default {
  name: 'App',
  components: { Layout, Metamask, Welcome },
  data (){
    return {
      Metamask: false,
      Registered: false
    }
  },
  created (){
    if(web3.currentProvider.isMetaMask){
      this.Metamask = true;
      web3.eth.getAccounts(function(error, accounts){
          if((typeof accounts[0] === 'string')){
            this.Registered = true;
          }
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #EEEEEE;
}
</style>
