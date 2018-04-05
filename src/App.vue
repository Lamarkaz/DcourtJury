<template>
  <div id="app">
    <Layout></Layout>
    <Latest></Latest>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue'
import Metamask from '@/components/Metamask.vue'
import Latest from '@/components/Latest.vue'
export default {
  name: 'App',
  components: { Layout,  Latest }

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
