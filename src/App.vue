<template>
  <div id="app">
    <Layout v-show="LayoutAppear"></Layout>
    <v-content style="margin-left: 65px">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-content>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue'
export default {
  name: 'App',
  components: { Layout },
  data: function(){
    return {
      LayoutAppear: true
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
