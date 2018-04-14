// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data (){
    return {
      jurorAddress: ''
    }
  },
  created (){
    var that = this;
    setInterval(function(){
      if(web3.currentProvider.isMetaMask === true){
        web3.eth.getAccounts(function(error, accounts){
          if(accounts[0] != that.jurorAddress){
            that.jurorAddress = accounts[0];
          }
        })
      }
    }, 2000)
  }
})
